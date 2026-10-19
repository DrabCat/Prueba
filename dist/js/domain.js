export const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

/** Usa la fecha local del navegador: getDay devuelve domingo = 0. */
export function defaultDay(date = new Date()) {
  const day = date.getDay();
  return day >= 1 && day <= 5 ? day - 1 : 0;
}

/** Navegación cíclica para pestañas y selector de día. */
export function nextIndex(key, current, length) {
  if (key === 'ArrowRight') return (current + 1) % length;
  if (key === 'ArrowLeft') return (current - 1 + length) % length;
  if (key === 'Home') return 0;
  if (key === 'End') return length - 1;
  return null;
}
