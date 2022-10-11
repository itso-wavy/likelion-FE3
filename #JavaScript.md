# JavaScript

## (0) REPL


## (1) 브라우저 콘솔
### 1) 단축키

- 열기: ctrl + shift + J
- 지우기: clear(), ctrl + L
- shift + enter 또는 ``: 줄 바꿈
- ? 는 필수 입력이 아니라는 뜻

### 2) 콘솔 메서드
* console.`log/warn/error/info/time/dir()`, `alert/prompt()`
   - console.log(): 출력
   - console.warn(): 경고
   - console.error(): 에러
   - console.dir(): 객체의 데이터

> ex. let userInput =  prompt("") ➩ 입력값 얻기 ➩ parseInt(userInput) ➩ 출력값 얻기<br>
>> cf. prompt 입력값은 (빈칸, 숫자, 문자, ...)무조건 string 취급<br>
>> cf. parseInt()는 인자의 앞에 붙은 정수값을 파싱(분석)하여 숫자 데이터로 변환해줌

* console.`table()`, `group()`, `groupEnd()`
  
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


## (2)  Data types
JS가 알고 있는 데이터, ㄱㄴㄷ
### 1) 원시 타입
- number: integer 정수, float 소수, NaN
- string: 문자'열'
- boolean: 예/아니오, 참/거짓값, 0/1
```md
**False-y**
- false
- 0
- ""
- null
- undefined
- NaN
```
- undefined: 정의되지 않음 💬 = ⬜
- null: 값이 없음을 정의 💬 = ⬛(typeof object)
- symbol

```md
**전역속성 NaN** 
- 0/0
- 숫자가 아니라는 뜻을 가진 숫자
- typeof NaN === "number"
- NaN + NaN === NaN
```

### 2) 참조 타입: 내장 메서드 탑재
 - [Object객체](Object.js)


### 3) 타입 변환(형변환)
<!-- TODO: -->
- 명시적 타입 변환
- 암묵적 타입 변환

<!-- console.log("10" + 10); // 1010
String(10) + String(10);
Number("10") + Number("10"); // 비권장
parseInt("10") + parseInt("10"); // 권장 -->


## (3) 연산자
### 1) 기본 연산자
 - `+`, `-`, `*`, `/`
 - `**`(지수 연산자), `%`(modular)
 - `++`, `--`
 - `+=`, `-=` 
 - 템플릿 리터럴 내에서의 연산 비권장


### 2) 비교 연산자
 - `>`, `<`, `>=`, `<=`  boolean value

 - `==` 이중 등호: 메모리에 담긴 값을 비교, 양쪽을 같은 타입으로 변환함<br>
   `===` 삼중 등호: 메모리에 담긴 값 + 데이터 타입 비교

### 3) 논리 연산자 ( 계산 우선순위: and ➩ or )
 - and: && 
   - true && true = true;
   - true && false = false;
   - false && true = false;
   - false && false = false;

 - or: ||
   - true || true = true; (xor: false)
   - true || false = true;
   - false || true = true;
   - false || false = false;

 - not: !
> cf. 단축평가: 평가식을 평가하는 중 결과가 확정된 경우 나머지 평가 과정을 생략하는 것

### 4) 기타 연산자
<!-- TODO: -->
- 삼항 연산자(ternary operator)
- delete, typeof, instanceof, void 


## (4) Math 객체
- Math.PI: 3.141592653589793
- Math.floor(): 소숫점 아래 내림
- Math.ceil(): 소숫점 아래 올림
- Math.round(): 소숫점 기준 반올림
- Math.random(): 0 이상 1 미만 랜덤숫자(난수) 생성<br>
 `Math.floor(Math.random() * 선택지개수) + N`
- Math.abs(): 절댓값
- Math.pow(x, y): x의 y 제곱


## (5) Variables변수
값을 저장하고 유지하여 코드의 반복 작성을 줄여줌
### 1) 선언(=정의) <!-- TODO: -->
- 항상 const: 상수
- 가끔 let: 블록 스코프 변수
- 절대 var: 함수 스코프 변수
 
### 2) 변수 명명과 규칙
- 가능: 한글 식별자, 문자 대소문자 구별, 특수문자($, _) 시작, 유니코드언어
> let _ = 100; // 반복문 돌 때 의미없는 변수에 사용
- 불가능: 숫자 시작, 예약어(let, const, var, if, else), 띄어쓰기
- 주로 첫 글자를 소문자로 하는 카멜 케이스 이용(<->스네이크 케이스)
- 변수 이름은 길고 구체적일 것, 불리언 변수에는 앞에 is를 붙이면 더 분명해짐


## (6) String문자열
### 1) 메모리 구성: 유사배열
- 인덱스
- 이터러블
- length - 1 === 최대 인덱스
- 접합: 'River' + " " + 'Phoenix' = 'River Phoenix'

### 2) String Method
- .toUpperCase(), .toLowerCase(), .trim(), .slice([,]), .replace(,), repeat(): 비파괴메서드
- .indexof(), .slice([,]), .replace(,), repeat(), .includes(), .concat(), .split(), .padStart(,), substr(,): 인수가 있는 문자열 규칙


4) Templete Literal템플릿 리터럴: 리터럴 양식. 표현식을 평가(계산, 판단)해서 문자식으로 바꿔줌 
//         `${ }`  <-- 괄호 안에 변수가 들어감
//      리터럴 = 직접 보이는 데이터 <-> 상수, 변수


//// 11. Arrays배열 = 데이터(element요소) 리스트
// 배열의 모든 요소에는 index순서값이 있음
// 1) 요소 선택
let array = [NaN, 9.9999, "string!", undefined];
    typeof array // = object
    array.length // = 4
    array[2][0] // = "s": "string!"의 첫 글자 
array = [];
    array // = []

// 2) 요소 변경
// 문자열에서는 선택, 판단만 가능 / 변경, 추가, 삭제 불가
let firstName = "eun";
    firstName[0] = "X";
    firstName // = "eun", 변함 없음
// but,
const colors = ["red", "orange", "yellow"];
    colors[0] = "white"; 
    colors // = ['white', 'orange', 'yellow'], 배열에서는 요소를 바꿀 수 있다!

// 3) 요소 추가
//    i. index
colors[4] = "indigo"; 
    colors // = ['white', 'orange', 'yellow', empty, 'indigo']
    colors.length // = 5
    colors[3] // = undefined

//    ii. PUSH( ARRAY METHODS 1 ): 배열의 마지막 요소, <-> pop
let cat = "blue";
    cat.toUpperCase() // = 'BLUE'
    cat // = 'blue', 비파괴메서드
// but,
colors.push("violet");
    colors // = ['white', 'orange', 'yellow', empty, 'indigo', 'violet']

//    iii. UNSHIFT( ARRAY METHODS 2 ): 배열의 첫 요소, <-> shift
colors.unshift('black', 'red'); // = ['black', 'red', 'white', 'orange', 'yellow', empty, 'indigo', 'violet']

// 4) 요소 삭제
//    i. POP( ARRAY METHODS 3 ): 배열의 마지막 요소, <-> push
colors.pop();
colors.pop();
    colors // = ['black', 'red', 'white', 'orange', 'yellow', empty]

//    ii. SHIFT: 교체( ARRAY METHODS 4 ): 배열의 첫 요소, <-> unshift, shift
colors.shift();
colors.shift(); 
colors.shift(); 
colors.shift(); // = ['yellow', empty]
const delColor = colors.shift(); // = [empty]
    delColor // = 'yellow': 반환값

// 5) 배열 변형
//    i. CONCAT: 연결( ARRAY METHODS 5 )
const alpha = ["A", "B"];
const bet = ["C", "D"];
const alphabet = alpha.concat(bet);
    alphabet // = ['A', 'B', 'C', 'D']

//    ii. REVERSE: 뒤집기( ARRAY METHODS 6 )
alphabet.reverse(); // = ['D', 'C', 'B', 'A']
    alphabet // = ['D', 'C', 'B', 'A']

//    iii. SPLICE: 이어붙이다( ARRAY METHODS 7 ): 대체, 삽입, 제거 
//      syntex: .spice(요소 인덱스, 삭제 요소 개수, 삽입 요소 내용)
colors.splice(0, 1, "red", "orange", "yellow", "green", "blue", "indigo", "violet"); 
    colors // = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo','violet']

//    iv. SLICE: 자르기( ARRAY METHODS 8 )
//      syntex: .slice(시작점)           : 시작점에서 끝까지 선택
//              .slice(시작점, 정지점)   : 시작점에서 정지점 앞까지 선택
const coolColors = colors.slice(3); // = ['green', 'blue', 'indigo', 'violet']
const warmColors = colors.slice(0, 3); // = ['red', 'orange', 'yellow']
colors.slice(-3) // = ['blue', 'indigo', 'violet'], 음수인수도 가능, 비파괴메서드
    colors // = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// 6) 기타 메서드
//    i. INCLUDES( ARRAY METHODS 9 )
'abcd'.includes('a'); // = true
alpha.includes('Z'); // = false

//    ii. INDEXOF( ARRAY METHODS 10 ): 인수와 처음 일치하는 인덱스를 반환, 일치값 없으면 -1 반환
'abcabc'.indexOf('a'); // = 0
'abcabc'.indexOf('d'); // = -1: 없다는 뜻

//    iii. SORT: 정렬( ARRAY METHODS 11 )
let nums = [7, 150 , 0, 1000 , -9];
scores.sort(); // = [-9, 0, 1000, 150, 7] 요소 첫째자리 숫자를 기준으로 나열

//    iv. TOSTRING, REDUCE, FILTER, SOME, ANY, MAP

// 7) 참조 타입과 동일성 테스트
//   1 === 1     // = true
// [1] === [1]   // = false
// [1] == [1]    // = false
//  [] == []     // = false

nums = [1, 2, 3];
let numsCopy = nums;
nums.push(4);
    nums // = [1, 2, 3, 4]
    numsCopy // = [1, 2, 3, 4]
// 배열의 요소가 아닌 일종의 주소(방향)만 참조한다는 개념: Object Reference
// 그래서 const로 원시타입 변수 선언시 업데이트 불가하나 참조타입 변수 선언시 완전한 변형 아닌 요소에 대한 업데이트는 가능
//  ex. num = [1,2,3];    error! 배열 재선언 불가
//      num = 1;          error! 데이터 타입 변형 불가

// 8) 중첩 배열
//    i. 배열 속 배열
const gameBoard = [["X", "O", "X"], ["O", null, "X"], ["O", "O", "X"]];
    gameBoard[1][1] // = null

//    ii. 배열 속 객체
const middleSchool = [{grade: "1", class: "5"}, {grade: "2", class: "2"},];


//#yellowgreen//#
//// 12. Object객체: 배열, 함수, 기타 (객체 리터럴 등)
// 1) 객체 리터럴: 순서없는 '키 + 값'쌍 데이터(Property속성) 집합체
// Why do we use an Object for?
// To create many variables quickly

const person = {
    firstName: 'Mick', 
    lastName: 'Jagger',
}

const kitchenSink = {
    favNum: 92319023, 
    486: "Love",
    colors: ['red', 'orange'], // 마지막에도 , 
}

console.log(person["lastName"]); // = "Jagger"
console.log(kitchenSink["colors"]); // = ['red', 'orange']
console.log(kitchenSink["486"]); // = "Love"
//객체에서 만드는 모든 키들은 기호 빼고 모두 문자열로 변환이 된다. 위의 예시에서 486도!

console.log(person["firstName"]); // = "Mick"
console.log(person.firstName); // = "Mick"
console.log(person['first' + 'Name']); // = "Mick"

//객체 수정하기(코딩 생략)

// 배열[순서] + 객체 {키-값}의 중첩


//// 중첩 객체

// 객체 속 배열
const ABC = {lowerCase: [a, b, c], upperCase: [A, B, C]}


13. 조건문
1) if 조건문
조건(cdt)의 범위는 좁은 곳에서 넓은 곳으로 
 - if (cdt1) {         cdt1 === true이면 실행
   } else if (cdt2) {  cdt1 === false && cdt2 === true이면 실행
   } else {            cdt1 === false && cdt2 === false이면 실행
   }

const condition = prompt("Enter something");
if(false) { // <-> true
    console.log("FALSE");
} else {
    console.log("TRUE");
}

2) switch 조건문
 - const arg = opt;
   switch (arg) {
     case opt1:        arg === opt1이면 실행
         break;
     default:          arg !== (opt1 && opt2)이면 실행, default 위치는 어디든 가능
         break;
     case opt2:        arg === opt2이면 실행, 마지막 항목은 break 생략
   }

// 3) 조건부 네스팅(Nesting): 조건문 속 조건문, nesting: 중첩

// Password must be 6+ characters && cannot include space
const password = prompt("please enter new password");
if(password.length >= 6) {
    if(password.indexOf(" ") === -1) {
        console.log("Valid Password!")
    } else {
        prompt("Password cannot contain spaces.")
    }
} else {
    prompt("Password Must be 6+ characters.") 
}


14. 반복문
1) for 루프

2) while 루프


//#darkturquoise//#
// 5. Function





//#dodgerblue//#
// 6. Array Callback Methods









//#midnightblue//#
// 7. 최신 기능들






//#indigo//#
// 8. DOM




//#darkslateblue//#
// 10. Events1
//#magenta//#
// 12. Promise

//#darkslategray//#
// 13. AJAX