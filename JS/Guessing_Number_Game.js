// 숫자 업다운 게임
// 게임 멈추기 기능
// 몇 번만에 맞추었는지 체크 기능

let maxN = parseInt(prompt('당신은 1에서 ? 사이의 자연수 하나를 맞추게 됩니다.\n최댓값 ?을  설정해주세요.'))

while(!maxN) {
    maxN = parseInt(prompt('잘못된 숫자입니다.\n 다시 입력해주세요.'))
}
const goalN = Math.ceil(Math.random * maxN)

let guessN = prompt('첫번째 시도입니다!\n 정답은 무엇일까요?\n(게임을 멈추고 싶다면 q를 눌러주세요)')
let attemps = 0;

while(!parseInt(guessN)) {
    if(guessN === 'q') {
        alert('게임을 중단합니다.');
        break;
    }
    guessN = prompt('잘못된 숫자입니다.\n 다시 입력해주세요.')
}

while(guessN !== goalN) {
    if(guessN === 'q') {
        alert('게임을 중단합니다.');
        break;
    }
    else {
        attemps++;
        if(quessN > goalN) {
            guessN = prompt('업!')}}
}
