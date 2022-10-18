// 숫자 업다운 게임
// 게임 멈추기 기능
// 몇 번만에 맞추었는지 체크 기능

const heading = document.createElement('h1')
heading.textContent = 'UP & DOWN'
document.body.appendChild(heading)

let maxN = parseInt(prompt('당신은 1에서 ? 사이의 자연수 하나를 맞추게 됩니다.\n최댓값 ? 을 설정해주세요.'))

while (!maxN) {
    maxN = parseInt(prompt('잘못된 숫자입니다.\n다시 입력해주세요.'))
}
const goalN = Math.ceil(Math.random() * maxN)
        console.log(goalN)
let guessN = prompt('첫번째 시도입니다! 정답은 무엇일까요?\n(게임을 멈추고 싶다면 q를 눌러주세요)')
let attemps = 0;

while (guessN != goalN) {
     if (!parseInt(guessN)) {
        if (guessN === 'q') {
            alert('게임을 중단합니다.');
            break;
        }
        guessN = prompt('잘못된 숫자입니다.\n다시 입력해주세요.')
    } else {
        if (guessN > goalN) {
            guessN = prompt('다운!')
            attemps++;
        } else if (guessN < goalN) {
            guessN = prompt('업!')
            attemps++;
        } else {
            alert(`정답입니다. 당신의 시도는 ${attemps} 회였습니다.`)
            break;
        }
    } 
}

if (guessN == goalN) alert(`정답입니다. 당신의 시도는 ${attemps} 회였습니다.`)