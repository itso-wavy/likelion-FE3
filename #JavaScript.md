## 0. REPL


## 1. 브라우저 콘솔
 - 열기: ctrl + shift + J
 - 지우기: clear(), ctrl + L
 - shift + enter 또는 ``: 줄 바꿈
 - ? 는 필수 입력이 아니라는 뜻


## 2.  Data types
* JS가 알고 있는 데이터, ㄱㄴㄷ
### 1) 원시 타입
 - number: integer 정수, float 소수
 - string: 문자'열'
 - boolean: 예/아니오, 참/거짓값, 0/1
  ```js
  False-y
 - false
 - 0
 - ""
 - null
 - undefined
 - NaN
  ```
 - undefined: 정의되지 않음 💬 = ⬜
 - null: 값이 없음을 정의 💬 = ⬛
 - symbol

### 2) 참조 타입: 내장 메서드 탑재
 - [Object객체](Object.js)


## 3. 전역속성 NaN 
 - 0/0
 - 숫자가 아니라는 뜻을 가진 숫자
 - typeof NaN === "number"
 - NaN + NaN === NaN


## 4. 연산자
### 1) 기본 연산자
 - `+`, `-`, `*`, `/`
 - `**`(지수 연산자), `%`(modular)
 - `++`, `--`
 - `+=`, `-=` 

 - 기타 연산자
   비교 연산자
   `>    <    >=    <=  boolean value`

   등호 연산자
   == 이중 등호: 양쪽을 같은 유형으로 변환하여 비교, 
   === 삼중 등호: 엄격히 타입 구분하여 비교, 변수의 값과 참조 주소를 비교하는 경우 사용

   
### 2) 논리 연산자 ( 계산 우선순위: and ➩ or )
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


## 5. math 객체
 - Math.PI: 3.141592653589793
 - Math.floor(): 소숫점 아래 내림
 - Math.ceil(): 소숫점 아래 올림
 - Math.round(): 소숫점 기준 반올림
 - Math.random(): 0 이상 1 미만 랜덤숫자(난수) 생성
   Math.floor(Math.random() * 선택지개수) + N
 - Math.abs(): 절댓값
 - Math.pow(,) //**


## 6. variables변수: 값을 저장하고 유지하여 코드의 반복작성을 줄여줌
### 1) 선언
 - 항상 const: 상수변수
 - 가끔 let: 재할당이 가능한 변수
 - 절대 var: 옛날 방식
 
### 2) 변수 명명과 규칙
 - 숫자로 시작 불가, 띄어쓰기 불가
 - _, $, _, 0~9, 유니코드언어만 이용 가능
 - 주로 첫 글자를 소문자로 하는 카멜 케이스 이용(<->스네이크 케이스)
 - 변수 이름은 길고 구체적일 것
 - 불리언 변수에는 is를 붙이면 더 분명해짐


## 7. 기본적인 메서드: console.log/warn/error/info/time/dir() + alert/prompt()
 - console.log(): 출력
 - console.warn(): 경고
 - console.error(): 에러
 ex. let userInput =  prompt("")  >>  입력값 얻기  >>  parseInt(userInput)  >>  출력값 얻기
> cf. prompt 입력값은 (빈칸, 숫자, 문자, ...)무조건 string 취급, string은 크기 비교 불가, 비교시 NaN이 반환됨

> cf. parseInt()는 인자의 앞에 붙은 정수값을 파싱(분석)하여 숫자 데이터로 변환해줌
