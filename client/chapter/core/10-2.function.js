/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

/* function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}
 */
/* const resultX = calcTotal(10000, 8900, 1360, 2100);
const result */ /* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

/* function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
} */
/* 
const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900); */

/* console.log(resultX);
console.log(resultY);
console.log(resultZ); */

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 이것은? : arguments
  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총함을 구하기!

  let total = 0;

  //for 문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  //2. for..of 문
  // for (let key of arguments) {
  //   total += key;
  // }

  //3. forEach 빌려쓰기
  /* Array.prototype.forEach.call(arguments, function (item) {
    total += item;
  }); */

  //4.배열로 만들기

  // let realArray = Array.prototype.slice.call(arguments);

  // console.log(realArray);

  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // 5. Array.from() : 다 배열로 변환해줌
  // let realArray = Array.from(arguments);
  // console.log(realArray);

  // realArray.forEach(function (item) {
  //   total += item;
  // });
  let arr = [10, 50, 100];

  // 6. spread syntax
  let realArray = [...arguments];
  // console.log(realArray);

  // forEach : 배열만 사용가능, 전달된 것 정해져있다.(item)
  // 값을 누적해서 더해지는것
  //(item, index)  값과 순서 번호
  // realArray.forEach(function (item, index) {
  //   total += item;
  // });
  //7. reduce
  //acc 누적값, item 순회 값 , 맨마지막 0 = 최초값!
  return realArray.reduce((acc, item) => {
    return acc + item;
  }, 0);
  return total;
};

const result = calculateTotal(1000, 500, 200, 6500, 100);

// console.log(result);

const user = {
  name: 'tiger',
};

user.name;
// 익명(이름이 없는) 함수 (표현)식

let anonymousFunctionExpression = function hello() {};

// 유명(이름을 가진) 함수 (표현)식
//함수라는 객체에 hello라는 이름만 붙여준거임
//hello() 하면 못씀
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
//중요합!!!
let callbackFunctionExpression = function (callback) {
  callback();
};
callbackFunctionExpression(function () {
  console.log('콜백 함수 실행!');
});

//콜백함수 어려운부분

const movePage = function (url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    success(url);
  } else {
    fail();
  }
};

movePage(
  'www.naver.com',
  function (url) {
    console.log('성공 몇초 뒤 해당 페이지로 이동합니다.');

    setTimeout(() => {
      window.location.href = url;
    }, 3000);
  },
  function () {
    console.log('올바르지 않은 주소입니다.');
    // ????
  }
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식(이피 페턴) : 즉시실행시키고 값을 담는다!
// Immediately Invoked Function Expression
//변수의 보호를 위해 탄생
let IIFE;

//함수 인캡슐레이션(캡슐화: 아무도 못들어옴 변수 보호)
//함수를 통해서만 접근할수있어!!
const MASTER = (function () {
  var x = 10;
  let uid = 'ajtwk123';

  return {
    getKey() {
      return uid;
    },
    setKey(value) {
      uid = value;
    },
  };
})();

console.log(MASTER.setKey('새로운 비밀번호'));

// let IIFE;
// Y = calcTotal(21500, 3200, 9800, 4700);
// const resultZ = calcTotal(9000, -2500, 5000, 11900);

/* console.log(resultX);
console.log(resultY);
console.log(resultZ); */

// 함수 선언 → 일반 함수 (표현)식
// let calculateTotal;

// 익명(이름이 없는) 함수 (표현)식
// let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
// let namedFunctionExpression;

// 콜백 함수 (표현)식
// let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
