// 내보내기 export
// 1.
export const 이름 = '호준';
export const 회사 = '위니브';

// 2. 단일 객체 default
export default function hello() {
  console.log('hello world');
}
// import hello from './008.js'
// hello()

export function sum(a, b) {
  return a + b;
}
// import {sum} from './011.js'
// import sum from './011.js' // error!

// 3. 복수 객체
const a = 10;
const b = 20;
const c = 30;

export { a, b, c };
// import {a, b, c} from './013.js'

// 불러오기 import from
// 1.
import { 이름, 회사 } from './002_exports.js';
console.log(이름);
console.log(회사);
// 많이 쓰는 형태

// 2.
import * as 프로필 from './002_exports.js';

console.log(프로필.이름);
console.log(프로필.회사);

// 프로필 = {
//     이름: '호준',
//     회사: '위니브',
// }
// 이렇게 되어 있는 것과 같습니다.

// 3.
import { 이름 as a, 회사 as b } from './002_exports.js';

console.log(a);
console.log(b);
