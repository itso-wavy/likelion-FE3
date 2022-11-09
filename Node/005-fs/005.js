/* 
005. 기본 모듈 fs
공식문서 링크: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
 */

const fs = require('fs');

/* 1. rename: 파일명 변경(mv) */
// let foo = 'foo';
// fs.rename(`./test.txt`, `./${foo}.txt`, err => {
//   console.log(err);
// });

/* 2. readFile: 지정 파일 내 텍스트 인코딩 결과를 반환(cat) */
fs.readFile('./test.txt', 'utf8', (err, data) => {
  console.log(err);
  console.log(data);
}); // hello world

/* 3. readdir: 현재 디렉토리 내 파일 리스트를 배열로 반환(ls) */
fs.readdir('./', (err, data) => {
  console.log(err);
  console.log(data);
}); // [ '005.js', 'test.txt' ]

/* 4. writeFile: 파일 생성(touch + echo) */
fs.writeFile('./test2.txt', 'hello world 2', err => {
  console.log(err);
});

/* 5. appendFile: 파일 생성 + 내부 텍스트 추가(echo) */
fs.appendFile('./test3.txt', '\nhello world 3', err => {
  console.log(err);
});

/* 6. copyFile: 파일 카피(cp) */
fs.copyFile('./test3.txt', './test3_copy.txt', err => {
  console.log(err);
});

/* 7. mkdir: 폴더 생성 */
fs.mkdir('./new_folder', err => {
  console.log(err);
});
