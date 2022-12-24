// const dq = document.querySelector.bind(document);
const $ = (selector) => {
  return document.querySelector(selector);
};

const contInp = $('.cont-inp');
const inpField = $('#inp-field');
const inpTime = $('#inp-time');
const btnCal = $('#btn-cal');
const loadingContainer = $('.cont-result-loading');
const resultContainer = $('.cont-result');
const resultField = $('#result-field');
const resultTime = $('#result-time');
const btnShowModal = $('#btn-show-modal');
const btnShare = $('#btn-share');
const btnClose = $('#btn-close');
const modal = $('#modal');

btnClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

btnShare.addEventListener('click', () => {
  const url = location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => alert('URL이 복사되었습니다.'))
    .catch((err) => {
      alert('URL이 복사되지 않았습니다. 호환되는 브라우저가 아닙니다.');
      console.log(err);
    });
});

btnShowModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

const handleAnimation = () => {
  resultContainer.style.display = 'none';
  loadingContainer.style.display = 'flex';
  setTimeout(() => {
    resultContainer.style.display = 'flex';
    loadingContainer.style.display = 'none';
  }, 1300);
};

const calculate = () => {
  resultField.textContent = inpField.value;
  resultTime.textContent = Math.round(10000 / inpTime.value);
  inpField.value = '';
  inpTime.value = '';
};

contInp.addEventListener('submit', (e) => {
  e.preventDefault();
  calculate();
  handleAnimation();
});
