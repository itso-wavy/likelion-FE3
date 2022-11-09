/* 
004. 기본 모듈 path
공식문서 링크: https://nodejs.org/dist/latest-v16.x/docs/api/path.html
 */

import path from 'path';

let filename = 'Users/paullab/Desktop/FE3/GitHub/test.txt';
console.log(`디렉토리: ${path.dirname(filename)}`); // Users/paullab/Desktop/FE3
console.log(`파일이름: ${path.basename(filename)}`); // test.txt
console.log(`확장자: ${path.extname(filename)}`); // .txt
