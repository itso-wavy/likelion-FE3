// #1 Node = JS 런타임(실행 환경)

global.console.log('hello world!');

console.time('hello time');
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.timeEnd('hello time');

// 1) 싱글 스레드
// 2) 넌 블로킹
// 3) 전역객체 global(window X)

// #2 module: 코드 뭉텅이(함수, 변수 등...)
// CommonJS: require <-> exports
// ES6: import from <-> export

// #3 명령어
// npm install 설치
// npm init --yes 명령어 => package.json 생성
