/* # OOP(객체지향 프로그래밍)
- 
  0. 프로그래밍 방식: 절차적 프로그래밍 방식 / 구조적 프로그래밍 방식 / 객체 지향 프로그래밍 방식
  1. 메서드로 상호작용하는 객체 생성: OOP란 객체들이 서로 소통하도록 하는 방법
    > 4가지 특징: 캡슐화 / 상속 / 정보 은닉 / 다형성
  2. 생성자(constructor): 프로퍼티와 메서드를 공유할 수 있도록 추상화된 객체
  3. 프로토타입(prototype): 생성자 함수의 인스턴스들이 참조하는 가상의 공간 + 프로토타입 체이닝
  4. 상속: 
  5. syntactic sugar - class
*/

// ## 1. 메서드로 상호작용하는 객체 생성
const Wade = {
  name: '한재현',
  address: '제주도 제주시 인다 1길',
  phoneNum: '010-8001-6536',
  canWalk: function () {
    console.log('재현이가 걷는다.');
  },
  teach: function (student) {
    student.levelUp();
  },
};

const student = {
  level: 1,
  levelUp: function () {
    this.level++;
  },
};

wade.teach(student);

// practice
const Wavy = {
  name: 'wavy',
  address: '대전',
  weight: 50,
  goToWhere: function (place) {
    place.operate(this);
  },
};

const Sungsimdang = {
  product: 'bread',
  operate: function (who) {
    who.weight = who.weight + 1;
    console.log(
      `${who.name}은(는) 빵을 사먹었다. \n체중이 +1 되었다!(현재 ${who.weight})`
    );
  },
};

Wavy.goToWhere(Sungsimdang);
/* wavy은(는) 빵을 사먹었다. 
체중이 +1 되었다!(현재 51) */

// ## 2. 생성자(constructor)
// 같은 붕어빵 틀에서 나왔대도 팥붕과 피붕은 다른 것이다!
function Factory(name) {
  this.name = name;
  this.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  };
}

let robot0 = new Factory('브랜든');

// practice
const food = ['스파게티', '도넛', '맥모닝'];

function NewFactory(arr) {
  this.food = arr;
  this.점메추 = function () {
    console.log(
      `오늘 점심 메뉴는 ${
        this.food[~~(Math.random() * this.food.length)]
      }을(를) 추천합니다!`
    );
  };
}

const robot1 = new NewFactory(food);
robot1.점메추();
/* 오늘 점심 메뉴는 맥모닝을(를) 추천합니다! */

// ## 3. 프로토타입(prototype)
// [[Prototype]], __proto__: 인스터스의 숨겨진 프로퍼티
// 메모리의 낭비를 막기 위해 인스턴스의 __proto__가 생성자 함수의 가상공간 prototype을 참조한다.
console.log(robot1.__proto__); /* {constructor: ƒ} */
console.log(Factory.prototype); /* {constructor: ƒ} */

// practice
// 1)
NewFactory.prototype.저메추 = () => {
  console.log(
    `오늘 저녁 메뉴는 ${
      this.food[~~(Math.random() * this.food.length)]
    }을(를) 추천합니다!`
  );
};

const robot2 = new NewFactory(food);

robot1.__proto__ === robot2.__proto__; // true
robot1.점메추 === robot2.점메추; // false
robot1.저메추 === robot2.저메추; // true

// 2)
const human = (name, address, weight) => {
  this.name = name;
  this.address = address;
  this.weight = weight;
};

human.prototype.goToWhere = place => {
  place.operate(this);
};

// ## 4. 상속
// 1) 프로토타입 체이닝
const str = new String();
str.__proto__ = String.prototype; // true
str.__proto__.__proto__ = Object.prototype; // true

// 2) 함수 메서드: call, 객체 메서드: create
function Parent() {
  this.name = '재현';
}
Parent.prototype.rename = function (name) {
  this.name = name;
};
Parent.prototype.sayname = function () {
  console.log(this.name);
};
// Parent.prototype // {rename: ƒ, sayname: ƒ, constructor: ƒ}

function Child() {
  Parent.call(this);
  // 함수 메서드 call: 메서드의 인자가 Parent의 프로퍼티 상속
}

Child.prototype = Object.create(Parent.prototype);
// 객체 메서드 create: 객체를 생성하면서 프로토타입을 지정
/* 참고;
// 객체에 생성자 연결하기
Child.prototype = Object.create(
  Parent.prototype,
  // 프로퍼티 서술자 객체
  // 내장속성을 설정할 수도 있습니다.
  {
    constructor: {
      // 프로퍼티 변경이 가능한가?
      configurable: true,
      //  열거가능한가?
      enumerable: true,
      // 프로퍼티의 값을 수정할 수 있는가?
      writable: true,
      value: Child,
    },
  }
);
 */
const child = new Child();
child.rename('wavy'); // Child {name: 'wavy'}
child.sayname(); // wavy

// ## 5. syntactic sugar - class
// 1) 생성자와 프로토타입
class Robot {
  constructor(name) {
    // new 키워드가 호출될 때 자동으로 실행
    this.name = name;
  }
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

// practice
class Wavy2 {
  constructor() {
    this.name = 'wavy';
    this.address = '대전';
    this.weight = 50;
  }
  goToWhere(place) {
    place.operate(this);
  }
}

console.dir(Wavy2); //
/* 
class Wavy2 
  prototype: 
    constructor: f
    goToWhere: f
 */

// 2) 상속(extends + super)
/** super의 표기는 필수
 ** constructor는 생략 가능, 이 경우 super는 자동으로 호출됨
 */
class BabyRobot extends Robot {
  // BabyRobot은 파생 클래스
  constructor(name) {
    super(name);
    this.ownName = '아이크';
  }
  sayBabyName() {
    this.sayYourName();
    console.log('Suceeding you, Father!');
  }
}
const baby = new BabyRobot('pochi');
baby.sayYourName(); // 삐리비리. 제 이름은 pochi입니다. 주인님.
baby.sayBabyName(); // 삐리비리. 제 이름은 pochi입니다. 주인님. Suceeding you, Father!

// practice
class Sausage {
  constructor(ingr1, ingr2) {
    this.ingr1 = ingr1;
    this.ingr2 = ingr2;
  }
  taste() {
    console.log(`${ingr1}와 ${ingr2} 맛이 난다!`); /* 소고기와 파 맛이 난다! */
  }
}

class FiresSausage extends Sausage {
  taste() {
    console.log(`${this.ingr1}와 ${this.ingr2}, 그리고 불맛이 나기 시작한다!`);
  }
}

const fss = new FiresSausage('소고기', '파');
fss.taste(); /* 소고기와 파, 그리고 불맛이 나기 시작한다! */

// ## 6. 비공개(private) 프로퍼티
// 1) 비공개 프로퍼티
class Robot {
  #pw;

  constructor(name, pw) {
    this.name = name;
    this.#pw = pw;
  }

  getPassword() {
    return this.#pw;
  }
  setPassword(pw) {
    this.#pw = pw;
  }
}
const robot3 = new Robot('pochi', 12345);
robot3.name; /* 'pochi' */
robot3
  .#pw; /* Uncaught SyntaxError: Private field '#pw' must be declared in an enclosing class */
robot3.getPassword(); /* 12345 */

// 2) 클로저
/* 모듈 사용자 정의 혼합 패턴 */
function Person() {
  let age = 30; // 비공개 프로퍼티
  function innerPerson() {} // 생성자함수
  innerPerson.prototype.getAge = function () {
    return age;
  };
  return innerPerson;
}
Person(); // innerPerson(){},
// Person은 메모리에서 해제되어 사라짐. innerPerson의 프로토타입 메서드 getAge() 외의 방법으로 age에 접근할 수 없음

const PersonFunc = Person(); // innerPerson(){}
const person = new PersonFunc()(
  // 인스턴스인 person의 __proto__에 getAge()

  /* IIFE 즉시실행함수 테크닉: 익명함수 사용 */
  function () {
    console.log('IIFE');
  }
)();

const Person2 = // 익명함수의 즉시실행값이 할당됨
  (function () {
    let age = 30;
    function innerPerson() {}
    innerPerson.prototype.getAge = function () {
      return age;
    };
    return innerPerson;
  })();
// const PersonFunc = Person(); 이 과정이 생략됨

const person2 = new Person2();
person2.getAge();

// 3) 게터&세터
class Robot {
  #password;
  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  get password() {
    return this.#password;
  }
  set password(pw) {
    this.#password = pw;
  }
}
const bot = new Robot('재현', 1234);

// practice
/*  */

// ## N.
// practice
/*  */
