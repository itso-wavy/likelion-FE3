const $center = document.querySelector('.list-item');
const $items = document.querySelectorAll('.list-item li');
const angle = 360 / $items.length;
let currAngle = 0;

document.addEventListener('click', function (event) {
  if (window.innerWidth / 2 < event.clientX) {
    currAngle -= angle;
  } else {
    currAngle += angle;
  }

  $center.style.transform = `translate(-50%, -50%) rotateY(${currAngle}deg)`;
});
