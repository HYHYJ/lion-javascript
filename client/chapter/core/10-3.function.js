/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
//                   rest parameter: 나머지 파라미터
let calcAllMoney = (a, b, ...args) => {
  console.log(args);
  // let total = 0;
  // args.forEach((item) => {
  //   total += item;
  // });

  //배열안에 수 모두 더하기
  // return args.reduce(function (acc, item) {
  //   return acc + item;
  // }, 0);
  // return total;

  return args.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

const result = calcAllMoney(1000, 500, 200, 2000);

// console.log(result);

// nav.forEach(button)=> {
//   button.addEventListener('click',function){

//   }
// }

// 화살표 함수와 this

//This :
//일반 호출한 대상을 this로 삼는다
//화살표 함수는 this를 바인딩하지 않는다. 무조건 내 부모꺼

//함수선언문
function normalFunction() {
  // console.log(this);
}

window.normalFunction();

//normalFunction은 window가 호출해줘서 window ===this

//함수표현식
const expressionFunction = function () {
  // console.log(this);
};
expressionFunction();
//normalFunction은 window가 호출해줘서 window ===this

//화살표함수식

const arrowFunction = () => {
  // console.log(this);
};
arrowFunction();
//this를 안찾고 부모한테 '내 this 있어?? 그거 줘~!' 이런 느낌!!
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;

//객체 안에서 this

//메서드 안에서 함수를 호출할때는 화살표 함수가 더 좋냐? yes

// 1. 객체지향 프로그래밍
const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrade: function () {
    // const sayHi = () => {
    //   console.log(this);
    // }
    // sayHi(); //누가 호출한게 아니라 totalGrade실행되서 그냥 된거라서 this = window

    this.grades.forEach(())

  },
};

function aa() {
  function bb() {}

  bb(); //내가 알아서 실행된거라 this = window
}

// 2. 함수지향 프로그래밍
