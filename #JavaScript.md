<style>
    h2 {
        background-color: 	#00e83a;
    }
    h3 {
        background-color: 	#60d0fb;
    }
    h4 {
        background-color: gold;
    }
    strong, em {
        text-decoration: underline red;
    }
</style>


# JavaScript
## (0) REPL / 브라우저 콘솔
### 1) 개발과 소개
1. 웹페이지의 동작 담당
1. Brendan Eich(브랜든 아이크)  개발(1995): 라이브 스크립트 ➩ 자바 스크립트
1. ECMAScript 표준안, ES6(2015)부터 고급 문법 추가(cf. W3C는 웹표준 제정)
1. 브라우저, 서버에서 실행(Chrome, Node의 V8 엔진 - 자바스크립트 가상 머신)
1. 파싱, 컴파일 ➩ 고급언어 ➩ 어셈블리어 ➩ 기계어
1. cf. 커피스크립트, 타입스크립트

### 2) 실행
- 문서 내 어디에도 `<script>` 태그 삽입 가능
- 외부 스크립트/내부 스크립트/인라인
- 엄격모드(strict mode): 문서의 최상단에 적용, 취소는 불가

### 3) 기본 메서드
- 브라우저 상호 작용 메서드: `alert/prompt/confirm()`

> ex. let userInput =  prompt("") ➩ 입력값 얻기 ➩ parseInt(userInput) ➩ 출력값 얻기<br>
>> cf. prompt 입력값은 (빈칸, 숫자, 문자, ...)무조건 string 취급<br>
>> cf. parseInt()는 인자의 앞에 붙은 정수값을 파싱(분석)하여 숫자 데이터로 변환해줌

- 콘솔 메서드: console.`log/warn/error/info/time/dir()`
   1. console.log(): 출력
   1. console.warn(): 경고
   1. console.error(): 에러
   1. console.dir(): 객체의 데이터

- console.`table()`, `group()`, `groupEnd()`
  
```js
console.table(data);

console.group('one');
console.log('aa/팀원');
console.log('bb/팀원');
console.log('cc/팀원');
console.groupEnd();

console.group('two');
console.log('dd/팀장');
console.log('ee/팀장');
console.group('three');
console.log('ff/대표팀장');
console.groupEnd();
console.groupEnd();
```

### 4) 문(statement)
1. `;`로 구분, 값/연산자/키워드/명령어/표현식
2. 공백 병합
   - 함수나 메서드 내 연산식
   - 선언식 / object 자료형 내
   - 메서드 체이닝
   - 따옴표는 인식 불가, 템플릿 리터럴로 바꿔야 가능


## (1)  Data types
JS가 알고 있는 데이터, ㄱㄴㄷ
### 1) 원시 타입
1. number: integer ±정수, float 부동소수점숫자, ±Infinity, NaN
2. string: 문자'열'
3. boolean: 예/아니오, 참/거짓값, 0/1
```md
**False-y**
- false
- 0
- ""
- null
- undefined
- NaN
```
> 0은 false로 defined 된 값
4. undefined: 정의되지 않음 💬 = ⬜
5. null: 값이 없음을 정의 💬 = ⬛(typeof object)
6. symbol

```md
**전역속성 NaN** 
- 0/0
- 숫자가 아니라는 뜻을 가진 숫자
- typeof NaN === "number"
- NaN + NaN === NaN
```

### 2) 참조 타입: 내장 메서드 탑재
 1. Object객체: object/array/map/set
 2. 함수<!-- FIXME: -->

### 3) 타입 변환(형변환) <!-- FIXME: -->
- 명시적 타입 변환
- 암묵적 타입 변환

> Number, string 비권장 ➩ parseInt, toString


## (2) 변수와 상수
값을 저장하고 유지하여 코드의 반복 작성을 줄여줌

### 1) 선언(≒정의)
- 항상 const: 블록 스코프 상수, 재선언시 에러
- 가끔 let: 블록 스코프 변수, 재선언시 에러
- 절대 var: 함수 스코프 변수
> const, let으로 재선언시 error, 그러나 콘솔에서만 에러가 나지 않을 수 있음<br>
> 블록 스코프 선언 키워드를 사용시, 실행 후 없어지지 않도록 함수/블록 밖에서 선언해야 함
 
### 2) 변수 명명과 규칙
1. 가능: 한글 식별자, 문자 대소문자 구별, 특수문자($_) 시작, 유니코드언어<br>
불가능: 숫자 시작, 예약어(let, const, var, if, else), 띄어쓰기
    > let _ = 100; // 반복문 돌 때 의미없는 변수에 사용<br>
    > $_(달러함수)는 보통 DOM 탐색, 또는 함수명에 사용<br>
    > 호준님은 깃헙에서 엑셀 함수명 외워두고 쓰셨다고 

1. 주로 첫 글자를 소문자로 하는 카멜 케이스 이용(⇔ 스네이크 케이스)
1. 변수 이름은 길고 구체적일 것, 불리언 변수에는 앞에 is를 붙이면 더 분명해짐


## (3) String문자열
### 1) 메모리 구성
- **유사배열객체**(index와length) 
- 이터러블(iterable)
- 각각 3byte의 char로 잡히는 캐릭터 어레이

### 2) 객체 형태
- 인덱스 + 길이 + `[[prototype]]`(키값)
- 객체지만 안에서는 primitive type

### 3) String Method

1. **추가, 접합, 변형**: concat / replace / replaceAll / repeat / toUpperCase / toLowerCase / toString / trim / padStart / padEnd<br>
1. **자르기**: slice ≒ substring / split ➩ 배열<br>
slice는 자르기, substring는 부분문자열, split은 쪼개기<br>
A > B일 때 slice(A, B)는 작동하지 않으나 substring(A, B)는 substring(B, A)로 변환해서 작동함
> substr() 비권고 ➩ substring
1. **대답하기**: indexof ➩ 인덱스값, includes / startsWith / endsWith ➩ 불리언
> concat, indexof, includes는 문자열과 어레이에 모두 존재하는 메서드

### 4) 템플릿 리터럴
- 백틱 안에서 달러변수 앞 뒤로 파싱함
- 템플릿 리터럴 내에서의 연산 비권장

### 5) 일시적 형변환(일시적 객체) <!-- TODO: -->
- 함수와 메서드 사용에 관대하다.
- 유니코드순으로 비교하고 마지막에 길이가 긴 것이 true가 됨
- `'2' > 1`, `'01' == 1`

### 6) 정규표현식
<!-- FIXME: -->
`정규식: new RegExp(/정규표현식/)`

#### ① 메서드

#### ② 플래그

#### ③ 예약어

#### ④ 이스케이프 문자(`\`): 
특수문자, 예약어에게 기능을 벗어나 스트링 리터럴로 돌아갈 수 있도록 함. `\`뒤의 문자까지 한글자 처리
- `"hello \"world\"" // 'hello "world"'`
- `\n` 엔터
- `\t`  탭
- `\s` `\S` 스페이스바 
- `\d` `\D` 숫자
- `\w` `\W` 워드 (=`[A-Za-z0-9_]`)

#### ⑤ *그룹화*

## (4) Number
### 1) 소수 처리 문제 
0 < x < Number.EPSILON이면 x는 표현하지 못하는 수가 됨
> Number.EPSILON ≒ 2.2204 * 10^-16

큰 수는 BigInt 객체로 처리(123...n)

### 2) Number 객체
- Number.EPSILON
- Number.MAX_VALUE: JS가 표현할 수 있는 제일 큰 숫자
- Number.MAX_SAFE.INTEGER: JS가 안전하게 표현할 수 있는 최대 정수값
- Number.MIN_SAFE.INTEGER: JS가 안전하게 표현할 수 있는 최소 정수값

### 3) Math 객체
- Math.round(): 반올림
- Math.ceil(): 올림
- Math.floor(): 내림 `-1.1 ➩ -2`
- Math.abs(): 절댓값
- Math.random(): 0 이상 1 미만 랜덤숫자(난수) 생성<br>
 `Math.floor(Math.random() * 선택지개수) + N`
- Math.pow(x, y): x의 y 제곱
- Math.PI: 3.141592653589793
- Math.sqrt(): 양의 제곱근 (`= x ** 0.5`)
- Math.max / Math.min(): 최대 최솟값


## (5) 연산자
### 1) 기본 연산자
 - 산술 연산자: `+`, `-`, `*`, `/`, `**`(지수 연산자), `%`(modular), `++`, `--`
  
 - 할당 연산자: `=`, `+=`, `-=`

### 2) 비교 연산자
- `>`, `<`, `>=`, `<=`  boolean value

- `==` 이중 등호: 메모리에 담긴 값을 비교, 양쪽을 같은 타입으로 변환함<br>
   `===` 삼중 등호: 메모리에 담긴 값 + 데이터 타입 비교
- `null == undefined`, `null === undefined`


### 3) 논리 연산자 ( 계산 우선순위: and ➩ or )
 - and: `&&` 
   - true && true = true;
   - true && false = false;
   - false && true = false;
   - false && false = false;

 - or: `||`
   - true || true = true; (xor: false)
   - true || false = true;
   - false || true = true;
   - false || false = false;

- 암기코드
```js
for (let i = 0; i < 30; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i)
    }
}
``` 
 - not: `!`
> cf. 단축평가: 평가식을 평가하는 중 결과가 확정된 경우 나머지 평가 과정을 생략하는 것

### 4) 기타 연산자
- `!!`( ➩ 불리언)
- 비트 연산자: `&`(and), `|`(or), `^`(xor), `~`(not), `~~`(Math.floor), `<<`(left shift)
- 삼항 연산자(ternary operator): `CDT ? TURE : FALSE`, 중첩은 3번까지만 권장
- 병합 연산자(nullish): `??`, 차례대로 피연산자의 !nullish(!null && !undefined) 여부 판단
- delete(비권장 ➩ = null 권장), typeof, instanceof, void 

### 5) 우선순위 / 연산자 체이닝
- 연산자 우선순위: 헷갈리면 괄호를 사용
- 연산자 체이닝: a = b = c = 2 + 2 비권장

## (6) 객체: 변수 선언 모음
순서없는 '키 + 값'쌍 데이터(Property속성) 집합체 (배열, 함수, 기타)

### 1) 생성: `{}`, `new Object()`
객체의 키는 문자열로 저장된다.

### 2) 접근: key
- 괄호 표기법은 접근 전 평가단계를 거친다 
```js
obj.2; // = error!
data[3][one] // error 
obj['on' + 'e']; // string이니까 접합 가능!
``` 
<!-- 
- 객체에서 키가 number인 값에 접근할 수 있는 점 표기법은 없을까?(map 사용 말고) 만약 그렇다면 불편하더라도 괄호 표기법이 더 유용하다. 
- 대괄호[] 안의 숫자는 string으로 자동 형변환 되는 것 같다. 그러니 인덱스를 음수로 찾으려고 해도 ["-1"] 따위를 찾을 수 없어서 음수 인덱스는 쓸 수 없는 것-->
- 10.toString() 불가<br>
 (10).toString(), 변수명.toString()은 가능 

- 객체 외부 데이터에 엑세스
```js
const second = 2;
obj.second; // = error!
obj[second]; // = obj["2"] = "two"
```

- Object spread 용법
```js
newuser["name"] = userUpdate["name"];
newuser["email"] = userUpdate["email"];
// = 
newuser = { ...newuser, ...userUpdate };
```

### 3) 수정(추가/삭제/변경)
#### i. key
#### ii. 객체의 내장함수
<!-- 키 변경은 스트링으로 접근, 값 변경은 키로 접근하면 될 듯 -->
```js
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
```
### 4) Nested objects중첩 객체
객체 속 객체, 객체 속 배열(일부 데이터에만 순서를 주고 싶을 때)


## (7) Sparse Arrays배열
- index순서 + length길이 + element요소 
- 해시를 통해 스택과 힙에 저장
<!-- `console.log([1, 2, 3, 4][5]) // = undefined undefined` -->

### 1) 생성: `[]`, `Array()`, `Array.from()`, `Array.of()`
`typeof array // = object`
```js
Array(1) // 숫자 인자 1개는 배열의 길이
Array(1, 2, 3) // 숫자 인자가 2개 이상이면 배열의 요소
Array({}) // 숫자가 아닌 인자는 배열의 요소

Array.of(1) // = [1] ⇔ Array(1) // [empty]
```
### 2) 접근: index

### 3) 수정(추가/삭제/변경): 
#### i. index 
#### ii. ARRAY METHODS배열내장함수

- **추가, 제거(stack, queue)**: push / pop / unshift / shift
- **접합, 변형, 정렬**: concat / join (⇔ split) / slice / splice / fill / flat / reverse ⇔ sort / toString ➩ 스트링 
- **대답하기**: indexOf / includes / Array.isArray
<!-- indexOf: 인수와 처음 일치하는 인덱스를 반환
sort: 요소 첫째자리 기준으로 정렬 -->

<!-- FIXME: -->
- (순수함수=비파괴메서드) ⊃ <span style="color: palevioletred">**고차함수**</span> : 인자로 함수를 받음<br>
<span style="color: palevioletred">forEach(단순실행, 콜백), **reduce**(콜백) / map(콜백) / filter / find / findIndex / fill(,?,?) / sort(?) / includes, some, every ➩  불리언 </span>
<!-- map은 약도를 그리고 filter는 체에 치고(여과) find 첫일치값 찾아냄 
* map: 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환, 기존 배열 길이와 새롭게 만들어진 배열의 길이는 동일하다.
* reduce: 누적값과 현재값으로 하나의 값을 반환, 배열일수도 객체일수도 있다.
-->
- 비순수함수: splice, reverse, fill / push, pop, unshift, shift
> static function: 인자를 필요로 하지 않는 함수

### 4) Nested arrays중첩 배열: 배열 속 배열, 배열 속 객체


## (8) state문
```js
// 선언키워드 + 표현식
const 식별자 = 1(숫자리터럴)
```
좌항이 호이스팅 됨

## (9) 조건문
### 1) if 조건문
조건(cdt)의 범위는 좁은 곳에서 넓은 곳으로 
```js
if (cdt1) {           
    // cdt1 === true이면 실행
} else if (cdt2) {    
    // cdt1 === false && cdt2 === true이면 실행
} else {              
    // cdt1 === false && cdt2 === false이면 실행
}
```

### 2) switch 조건문
데이터 타입 확인 중요
```js
const arg = opt;
switch (arg) {
    case opt1:  // arg === opt1이면 실행
        break;
    case opt2:  // arg === opt2이면 실행
        break;
    default:    // arg !== (opt1 && opt2)이면 실행, default 위치는 어디든 가능
    // default와 상관없이 마지막 항목은 break 생략
}
```
### 3) 조건부 네스팅(Nesting): 조건문 속 조건문


## (10) Loop반복문
- 무한반복 주의
- break: 해당 반복문 탈출
- continue: 해당 단계 건너뜀
### 1) for (let) 루프
#### 1)for...of: 배열 반복
#### 2)for...in: 객체 반복


```js
// 암기코드
// 1. 구구단
for (let X = 2; X < 10; X++) {
    for (let Y = 1; Y < 10; Y++) {
        console.log(`${X} X ${Y} = ${X * Y}`);
    }
}
```

> 평균구하기
> 1. for 문에 초기값 설정해서 하나씩 더하기
> 2. forEach 메서드
> 3. reduce 메서드


### 2) while 루프

```js
while (true) {
    console.log(value)
    value = prompt('명령을 입력하세요.')
    if (value === 'break') {
        break
    }
}
```

## (11) 함수 == ()
이상적인 함수란 작고 귀엽고 친절한 함수(한가지 일만 하며 주석이 필요없는 형태)
<!-- TODO: -->
### 1) 정의
#### i. 목적
- 재사용성 
- 유지보수 = 변수의 스코프 제한
- 구조 파악 용이 = 읽기 쉬움
#### ii. 형태
- *정의*(⇔변수는 선언) ➩ *호출*(=실행, 콜)
- parameter(=param, 인자): 인수 전달이 안 되면 undefined를 기본값으로 가짐, 배열로 저장됨, 인수 개수 이상이면 객체로 넣는 게 좋음
```js
정의
    /* 
    선언 키워드 + 식별자 = function 함수명 (인자) {
        반환값
    }
    */
    const f = function name (param) { 
        return // 반환값
    }
호출
    /*
    함수명(인수)
    */
    name(argument) 
```

- 인풋 ➩ 실행 ➩ 아웃풋
  
### 2) 정의 방식

#### i. 선언문
#### ii. 표현식
#### iii. 화살표 함수
#### iv. 생성자 함수
#### v. 선언문과 표현식의 차이

### 3) 재귀함수
### 4) 중첩함수
### 5) 콜백함수


Scope스코프 (스코프 체이닝, 지역 변수는 함수 실행이 끝난 후 없어진다. )
This
Try/Catch
DOM
테스트 자동화는 재현님과
폴리필
바벨: 모던JS 코드를 구표준을 준수하는 코드로 바꿔주는 트랜스파일러, 폴리필을 포함함


## (12) Date 객체
<!-- Date 객체
그리니치 평균시: GMT +09:00

getFullYear()
getYear()
getMonth()
getDate()
getDay()

getHours()
getMinutes()
getSeconds()

UTC //협정 세계시, GMT는 그리니치 평균시
console.log(time.getUTCFullYear())
console.log(time.getUTCMonth())
console.log(time.getUTCDate()) // 현재시간을 영국시로 표현한다. = 9시간 전
console.log(time.getUTCDay())


2022-1970 

24시간을 12시간 체제로 바꾸기
const hour = time.getHours() > 12 ? time.getHours() - 12: time.getHours() 

const 오전오후 = time.getHours() > 12 ? '오후' : '오전'  
const minutes = time.getMinutes() > 10 ? time.getMinutes() : '0' + time.getMinutes();

const now = `지금은 ${오전오후} ${hour}시 ${minutes} 분입니다.`
console.log(now) -->



```let date = new Date()```
### 1) 날짜
```js
date.getFullYear() // 년
date.getMonth() // 월, 0부터 시작, 실제의 -1
date.getDate() // 일
date.getDay() // 요일, 1은 월요일, 0은 일요일!
```
### 2) 시간
```js
date.getHours() // 시
date.getMinutes() //분
date.getSeconds() //초
```
### 3) 날짜 시간 지정
```js
new Date(2023, 0, 21, 10) // 2023년 1월 21일 10시
new Date('2023/1/20/10:00:00') // = (2월이 아님)
```
```
today = new Date() 
// UTC - KST(지정 로캘) = -9시간
today.getTimezoneOffset() // 60

today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)

today = new Date('2023/1/20/10:00:00')
today.toString();
today.toISOString();
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, '')

//http://www.w3bai.com/ko/tags/ref_language_codes.html#gsc.tab=0
//http://www.w3bai.com/ko/tags/ref_country_codes.html#gsc.tab=0
today.toLocaleString('ko-KR'); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('en-US'); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString('ja-JP'); // -> 2020/7/24 12:30:00


const dayNames = [
  '(일요일)',
  '(월요일)',
  '(화요일)',
  '(수요일)',
  '(목요일)',
  '(금요일)',
  '(토요일)'
];
// getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? 'PM' : 'AM';
```


SPA
자원을 아낄 수 있고, 깜빡임 같은 늘어짐이 없고 재활용성을 높일 수 있다.

개발 복잡도가 높고 검색엔진에서 검색 안 될 수 있음


```js
fetch('https://codingapple1.github.it/price.json')
    .then((response.ok) => {
        if(!response.ok) {
            throw new Error ('400 아니면 500 에러남')
        }
        return response.json()
    })
    .then((결과) => {
        console.log(결과)
    })
    .catch(() => {
        console.log('에러남')
    })
    
``

# HTTP 요청

참고) HTTP 응답 상태 코드
200번대: 성공응답
400번대: 클라이언트 에러 응답
500번대: 서버 에러 응답

참고) HTTP 메서드: 서버에서 데이터를...
GET: 가져옴
POST: 게시함
PUT / PATCH: 전체 / 일부 수정함
DELETE: 삭제함