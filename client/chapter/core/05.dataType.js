/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

const empty = null;
console.log(empty); //null 구분하기 - 나중에 체크를 해주는게 존재함.

// 2. 값이 할당되지 않은 상태
let unknown;
console.log(unknown);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const hi = new String('hello'); //문자 생성자, new 키워드 넣어서 생성가능, 모든 자료형은 생성자를 가지고있다(constructer), 잘쓰진 않지만 이런게 있다는건 알아야함
//모든 데이터타입은 객체에서 생성된다.

//우리는 리터럴 방식으로 쓸것임!!
const double = 'hello'; //문자 리터럴, 윗줄과 똑같음, 생성자보다 리터럴을 선호한다.
const single = 'hello';
const backtick = `hello ${1 + 2}`; //템플릿 리터럴

console.log(typeof double);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(123); // 숫자 생성자(object)

const integer = 123; //(number)
const floatingPointNumber = 10.45;

console.log(typeof integer);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const big = BigInt(123); //생성자에  New 가 없어도된다.

const bigInteger = 123n; //

// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;
console.log(typeof bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const Obj = new Object({});
const obj = {};

console.log(obj);
// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uid');
console.log(typeof unique); //symbol
/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()
console.log(typeof (1 + 2));

// 언어 상, 오류

// Object

const user = {
  //객체의 프로펄티
  // key : value
  name: 'tiger',
  age: 28,
  //객체안에 있는 함수 = 메서드
  sayHi: function () {
    console.log('hello~');
  },
  alert1: function () {
    //normal function
  },
  alert2() {
    // consise method
  },
  alert3: () => {
    //arrow function
  },
  //밖에 함수는 =그냥 함수
};
// console.log(user.name); //tiger
console.log(user.sayHi()); //hello~

// Array

// const newArray = new Array();
//[0번째, 1번째, 2번째 ...]
const arr = [10, 100, 1000, 1, 2, 3];

const count = 0;

`li:nth-child(${count + 1})`;

console.log(arr[3]);

// function

//함수는 이름()으로, 실행결과 확인
// return 값을 뱉어낸다.
const f = new 붕어빵틀(); //class, 사용도가 많지 않긴하다.

function 붕어빵틀(재료) {
  return 재료 + ` 맛 붕어빵`;
}

const 팥붕어빵 = 붕어빵틀('팥');
const 슈크림붕어빵 = 붕어빵틀('슈크림');
const 피자붕어빵 = 붕어빵틀('피자');

console.log(피자붕어빵);
// this
