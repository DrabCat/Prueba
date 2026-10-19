import test from 'node:test';
import assert from 'node:assert/strict';
import { defaultDay, nextIndex } from '../dist/js/domain.js';
import { campaign } from '../dist/js/data.js';

test('fecha local de lunes a viernes y lunes en ambos días de fin de semana', () => {
  // Fechas construidas en hora local para detectar conversiones UTC involuntarias.
  for (const [dayOfMonth, expected] of [[19,0],[20,1],[21,2],[22,3],[23,4],[24,0],[25,0]]) {
    assert.equal(defaultDay(new Date(2026, 9, dayOfMonth, 0, 1)), expected);
    assert.equal(defaultDay(new Date(2026, 9, dayOfMonth, 23, 59)), expected);
  }
});
test('teclado circular, Inicio y Fin', () => {
  assert.equal(nextIndex('ArrowLeft', 0, 5), 4);
  assert.equal(nextIndex('ArrowRight', 4, 5), 0);
  assert.equal(nextIndex('Home', 3, 5), 0);
  assert.equal(nextIndex('End', 0, 5), 4);
  assert.equal(nextIndex('Tab', 2, 5), null);
});
test('inventario comercial y recomendaciones completos', () => {
  assert.deepEqual(campaign.week.map(day => day.length), [2,3,2,2,7]);
  assert.equal(campaign.desserts.length, 4);
  assert.equal(campaign.september.length, 4);
  assert.equal(campaign.events.length, 3);
  assert.deepEqual(campaign.recommendations.map(group => group.items.length), [3,5,5]);
  assert.equal(campaign.week[4][0].price, '$10 c/u');
  assert.equal(campaign.events[2].price, '$35');
  assert.equal(campaign.september[3].price, 'Combo $220');
});
