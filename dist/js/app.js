import { campaign } from './data.js';
import { days, defaultDay, nextIndex } from './domain.js';

const daySelector = document.querySelector('#day-selector');
const dailyPromos = document.querySelector('#daily-promos');
const venueTabs = [...document.querySelectorAll('[role="tab"]')];
let selectedDay = defaultDay();

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/** Una sola plantilla para todas las ofertas. Los datos nunca se interpretan como HTML. */
function promotionCard(promo, id, index) {
  const card = element('article', 'promo-card');
  card.dataset.tone = ['olive', 'cream', 'citron', 'terra'][index % 4];
  card.setAttribute('aria-labelledby', `${id}-title`);
  if (promo.image) {
    card.classList.add('has-photo');
    const image = element('img', 'promo-card-photo');
    Object.assign(image, { src: promo.image.src, alt: promo.image.alt, width: promo.image.width, height: promo.image.height, loading: 'lazy', decoding: 'async' });
    card.append(image);
  }
  card.append(element('p', 'vendor', promo.vendor));
  const heading = element('h3', '', promo.title);
  heading.id = `${id}-title`;
  card.append(heading);
  const price = element('p', promo.price === 'Precio por confirmar' ? 'price price-pending' : 'price');
  const prefix = promo.price.match(/^(Desde|Precio especial|Combo)\s+/);
  if (prefix) {
    price.append(element('span', 'price-prefix', prefix[0]), document.createTextNode(promo.price.slice(prefix[0].length)));
  } else price.textContent = promo.price;
  card.append(price);
  card.append(element('p', 'promo-detail', promo.detail || ''));
  const ornament = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  ornament.setAttribute('viewBox', '0 0 180 180');
  ornament.setAttribute('class', 'poster-ornament');
  ornament.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M90 14 101 57 131 28 121 70 164 61 131 90 164 108 121 113 138 155 101 127 90 170 79 127 42 155 59 113 16 108 49 90 16 61 59 70 49 28 79 57 Z M73 87 Q78 79 83 87 M100 87 Q105 79 110 87 M78 103 Q90 117 104 103');
  ornament.append(path);
  card.append(ornament);
  return card;
}

function renderPromotions(target, promotions, scope) {
  target.replaceChildren(...promotions.map((promo, index) => promotionCard(promo, `${scope}-${index}`, index)));
}

function selectDay(index, focus = false) {
  selectedDay = index;
  [...daySelector.children].forEach((button, position) => {
    const active = position === index;
    button.setAttribute('aria-pressed', String(active));
    button.tabIndex = active ? 0 : -1;
  });
  renderPromotions(dailyPromos, campaign.week[index], `day-${index}`);
  dailyPromos.classList.toggle('monday-grid', index === 0);
  document.querySelector('#day-status').textContent = `${days[index]} · ${campaign.week[index].length} promociones`;
  document.querySelector('#photo-note').hidden = index !== 0;
  if (focus) daySelector.children[index].focus();
}

days.forEach((day, index) => {
  const button = element('button', 'day-button');
  button.type = 'button';
  button.setAttribute('aria-label', day);
  button.setAttribute('aria-controls', 'daily-promos');
  button.append(element('span', 'day-full', day));
  const short = element('span', 'day-short', ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'][index]);
  short.setAttribute('aria-hidden', 'true');
  button.append(short);
  button.addEventListener('click', () => selectDay(index));
  button.addEventListener('keydown', event => {
    const next = nextIndex(event.key, selectedDay, days.length);
    if (next === null) return;
    event.preventDefault();
    selectDay(next, true);
  });
  daySelector.append(button);
});

function selectVenue(index, focus = false) {
  venueTabs.forEach((tab, position) => {
    const active = position === index;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  });
  if (focus) venueTabs[index].focus();
}

venueTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectVenue(index));
  tab.addEventListener('keydown', event => {
    const next = nextIndex(event.key, index, venueTabs.length);
    if (next === null) return;
    event.preventDefault();
    selectVenue(next, true);
  });
});

renderPromotions(document.querySelector('#dessert-promos'), campaign.desserts, 'dessert');
renderPromotions(document.querySelector('#seasonal-promos'), campaign.september, 'september');
renderPromotions(document.querySelector('#event-promos'), campaign.events, 'event');

const recommendations = document.querySelector('#recommendations');
campaign.recommendations.forEach((recommendation, index) => {
  const card = element('article', 'recommendation');
  card.append(element('p', 'recommendation-number', String(index + 1).padStart(2, '0')));
  card.append(element('h3', '', index === 0 ? 'Loza y utensilios' : recommendation.title));
  const list = document.createElement('ul');
  recommendation.items.forEach(item => list.append(element('li', '', item)));
  card.append(list);
  recommendations.append(card);
});

selectDay(selectedDay);
