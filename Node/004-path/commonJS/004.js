/* 
004. 기본 모듈 path
공식문서 링크: https://nodejs.org/dist/latest-v16.x/docs/api/path.html
 */

const path = require('path');

/* 구분자는 OS마다 다르기 때문에 폴더나 파일 경로를 사용할 때 path.sep을 사용해주셔야 합니다. */
console.log(`구분자: ${path.sep}`); // 구분자: \
console.log(__dirname); // D:\...\004-path\commonJS
console.log(__filename); // D:\...\004-path\commonJS\004.path.js

console.log(`디렉토리: ${path.dirname(__filename)}`); // D:\...\004-path\commonJS
console.log(`파일이름: ${path.basename(__filename)}`); // 004.path.js
console.log(`확장자: ${path.extname(__filename)}`); // .js

console.table(path.parse(__filename));
/* 
┌─────────┬─────────────────────────────────────────────────────────────────────┐
│ (index) │                               Values                                │
├─────────┼─────────────────────────────────────────────────────────────────────┤
│  root   │                               'D:\\'                                │
│   dir   │ 'D:\\babyWAVY\\@repository\\likelion-FE3\\Node\\004-path\\commonJS' │
│  base   │                            '004.path.js'                            │
│   ext   │                                '.js'                                │
│  name   │                             '004.path'                              │
└─────────┴─────────────────────────────────────────────────────────────────────┘
 */

console.log(path.join(__dirname, 'app.js')); // (권장) D:\...\commonJS\app.js
console.log(__dirname + '/node'); // (비권장)
