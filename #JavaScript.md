# JavaScript

## (0) REPL / 브라우저 콘솔
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


## (1)  Data types
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
 - Object객체: 배열, 함수...<!-- FIXME: -->

### 3) 타입 변환(형변환)
<!-- FIXME: -->
- 명시적 타입 변환
- 암묵적 타입 변환

<!-- Number("10") + Number("10"); // 비권장
parseInt("10") + parseInt("10"); // 권장 -->


## (2) Variables변수
값을 저장하고 유지하여 코드의 반복 작성을 줄여줌

### 1) 선언(≒정의) <!-- TODO: -->
- 항상 const: 상수
- 가끔 let: 블록 스코프 변수
- 절대 var: 함수 스코프 변수
 
### 2) 변수 명명과 규칙
- 가능: 한글 식별자, 문자 대소문자 구별, 특수문자($, _) 시작, 유니코드언어
- 불가능: 숫자 시작, 예약어(let, const, var, if, else), 띄어쓰기
> let _ = 100; // 반복문 돌 때 의미없는 변수에 사용
- 주로 첫 글자를 소문자로 하는 카멜 케이스 이용(⇔ 스네이크 케이스)
- 변수 이름은 길고 구체적일 것, 불리언 변수에는 앞에 is를 붙이면 더 분명해짐


## (3) String문자열
### 1) 메모리 구성
- **유사배열**(index와length) 
- 이터러블
- 각각 3byte의 char로 잡히는 캐릭터 어레이

### 2) 객체 형태
- 인덱스 + 길이 + `[[prototype]]`(키값)
- 객체지만 안에서는 primitive type

### 3) String Method
<!-- TODO: 배열메서드와 교집합 확인 -->

- **추가, 접합, 변형**: concat() / replace() / replaceAll() / repeat() / toUpperCase() / toLowerCase() / toString() / trim() / padStart() / padEnd()<br>
- **자르기**: slice() ≒ substring() / split() ➩ 배열<br>
slice는 자르기, substring는 부분문자열, split은 쪼개기<br>
A > B일 때 slice(A, B)는 작동하지 않으나 substring(A, B)는 substring(B, A)로 변환해서 작동함
- **대답하기**: indexof() ➩ 인덱스값, includes() / startsWith() / endsWith() ➩ 불리언
> concat(), indexof(), includes()는 배열 메서드이다

### 5) 일시적 형변환(일시적 객체)

### 6) 정규표현식
<!-- FIXME: -->
`정규식: new RegExp(/정규표현식/`)

#### 메서드
#### 플래그
#### 예약어
#### 이스케이프 문자(`\`): 
특수문자, 예약어에게 기능을 벗어나 스트링 리터럴로 돌아갈 수 있도록 함. `\`뒤의 문자까지 한글자 처리
- `"hello \"world\"" // 'hello "world"'`
- `\n` 엔터
- `\t`  탭
- `\s` `\S` 스페이스바 
- `\d` `\D` 숫자
- `\w` `\W` 워드 (=`[A-Za-z0-9_]`)

⑤ **그룹화**

## (4) Number
### 1) 소수 처리 문제 
0 < x < Number.EPSILON이면 x는 표현하지 못하는 수가 됨
> Number.EPSILON ≒ 2.2204 * 10^-16

큰 수는 BigInt 객체로 처리

### 2) Math 객체
- Math.round(): 반올림
- Math.ceil(): 올림
- Math.floor(): 내림 `-1.1 ➩ -2`
- Math.abs(): 절댓값
- Math.random(): 0 이상 1 미만 랜덤숫자(난수) 생성<br>
 `Math.floor(Math.random() * 선택지개수) + N`
- Math.pow(x, y): x의 y 제곱
- Math.PI: 3.141592653589793
- Math.sqrt(): 양의 제곱근
- Math.max / Math.min(): 최대 최솟값


## (5) 연산자
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
- 삼항 연산자(ternary operator): `CDT ? TURE : FALSE`, 중첩은 3번까지만 권장
- 병합 연산자(nullish): `??`, 차례대로 피연산자의 !nullish(!null && !undefined) 여부 판단
- delete, typeof, instanceof, void 




