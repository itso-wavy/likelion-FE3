// 1. 콘솔
console.log('hello, world');
console.info('info');
console.warn('warn');
console.error('error')

const data = {
    one: 'pineapple',
    two: 'banana',
    three: 'mango',
}

console.dir(data); // 객체의 데이터 
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



// 변수는 ___이다. FIXME:

// 2. 변수
// (1) 명명
// 가능: 한글 식별자, 문자 대소문자 구별, 특수문자($, _) 시작
// 불가능: 숫자 시작, 예약어(let, const, var, if, else)
let _ = 100; // 반복문 돌 때 의미없는 변수에 사용



// 3. 데이터 타입
// (1) 타입
console.log(typeof NaN); // number
console.log(typeof undefined); // undefined 
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof function () { }); // function
console.log(typeof /정규표현식/gi); // object

// (2) 
console.log("10" + 10); // 1010

// (3) 형변환
String(10) + String(10);
Number("10") + Number("10"); // 비권장
parseInt("10") + parseInt("10"); // 권장



// 4. 연산자
// (1) 산술연산자: + - * / ** %
// 템플릿 리터럴 내에서의 연산 비권장


