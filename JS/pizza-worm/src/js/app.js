// 캔버스 설정
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const cWidth = canvas.width;
const cHeight = canvas.height;

// 배경 설정
const canvasBg = document.querySelector('#canvasBg');
const ctxBg = canvasBg.getContext('2d');

//  타일설정
const tileSize = 10;
const tileWidth = cWidth / tileSize;
const tileHeight = cHeight / tileSize;

// 점수 초기화
let score = 0;

// 점수를 그리는 함수
const renderScore = () => {
  ctx.font = '20px Helvetica';
  ctx.fillStyle = 'black';
  ctx.fillText(`SCORE : ${score}`, 0, 30);
};

//  게임오버 함수
const renderGameOver = () => {
  cancelAnimationFrame(playId);
  ctx.font = '30px Helvetica';
  ctx.fillStyle = 'red';
  // 텍스트의 수직 기준점을 설정합니다.
  ctx.textBaseline = 'middle';
  // 텍스트의 수평 기준점을 설정합니다.
  ctx.textAlign = 'center';
  ctx.fillText('GAME OVER', cWidth / 2, cHeight / 2);
};

const worm = new Worm();
const pizza = new Pizza();

document.addEventListener('keydown', event => {
  if (
    event.key === 'ArrowUp' ||
    event.key === 'ArrowDown' ||
    event.key === 'ArrowRight' ||
    event.key === 'ArrowLeft'
  ) {
    worm.checkDirection(event.key);
  }
});

let playId;
playId = requestAnimationFrame(function playGame() {
  // console.log('play');

  setTimeout(() => {
    playId = requestAnimationFrame(playGame);
    ctx.clearRect(0, 0, cWidth, cHeight);
    renderScore();
    worm.moveWorm();
    worm.renderWorm();
    pizza.renderPizza();
  }, 100);
});
