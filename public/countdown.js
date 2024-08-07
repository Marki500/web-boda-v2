// Establecer la fecha y hora objetivo en UTC
const targetDate = new Date(Date.UTC(2025, 4, 3, 17, 0, 0)).getTime();

function getTimeRemaining(endtime) {
  const now = new Date().getTime();
  const total = endtime - now;
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  //console.log({ now, endtime, total, days, hours, minutes, seconds });  // Añadir para depuración
  return { total, days, hours, minutes, seconds };
}

function updateFigure($el, value) {
  const $major = $el.querySelector('.major');
  $major.innerText = value;
}

function updateCountdown() {
  const t = getTimeRemaining(targetDate);
  const days1 = Math.floor(t.days / 100);
  const days2 = Math.floor((t.days % 100) / 10);
  const days3 = t.days % 10;
  const hours1 = Math.floor(t.hours / 10);
  const hours2 = t.hours % 10;
  const minutes1 = Math.floor(t.minutes / 10);
  const minutes2 = t.minutes % 10;
  const seconds1 = Math.floor(t.seconds / 10);
  const seconds2 = t.seconds % 10;

  //console.log({ days1, days2, days3, hours1, hours2, minutes1, minutes2, seconds1, seconds2 });  // Añadir para depuración

  updateFigure(document.querySelector('.days-1'), days1);
  updateFigure(document.querySelector('.days-2'), days2);
  updateFigure(document.querySelector('.days-3'), days3);
  updateFigure(document.querySelector('.hours-1'), hours1);
  updateFigure(document.querySelector('.hours-2'), hours2);
  updateFigure(document.querySelector('.minutes-1'), minutes1);
  updateFigure(document.querySelector('.minutes-2'), minutes2);
  updateFigure(document.querySelector('.seconds-1'), seconds1);
  updateFigure(document.querySelector('.seconds-2'), seconds2);

  if (t.total <= 0) {
    clearInterval(timeinterval);
  }
}

function CountdownJS() {
  updateCountdown();
  const timeinterval = setInterval(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', CountdownJS);
