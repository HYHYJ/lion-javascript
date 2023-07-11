/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let htmlCode = /* html*/ `
<ul>

</ul>

`;
let cssCode = /*css*/ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser;

//authorization : 권한
//authentication : 인증

authUser = {
  uid: 'user-id-zQsadkq%1231',
  name: 'hyo',
  email: 'hyo@naver.com',
  isSianIn: true,
  Permission: 'paid', // free | paid
};

// console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uid);
// console.log(authUser.Permission);
// console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['uid']);
// console.log(authUser['Permission']);
// console.log(authUser['email']);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

//class로 객체
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user3 = new User('동혁');

//함수로 객체 만들기

/* shorthand property (단축 프로퍼티) */
function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
) {
  return {
    name,
    email,
    [computedProp]: number, //[computedProp]기능 <- 'tel'
  };
}

const user1 = createUser('효윤', 'ㅇㄹㅇㄹㅇㄹㅇ', 'tel', '010-0000');
const user2 = createUser('차뉴', 'ㄹㅇㄹㅇㄹㅇㄹ');
// 프로퍼티 포함 여부 확인

//key in user1

//자신(own)의 속성(property)을 가지고(has)있는지

// Object.prototype.hasOwnProperty..
for (let key in user1) {
  if (Object.prototype.hasOwnProperty.call(user1, key)) {
    console.log(key);
  }
}

// 프로퍼티 나열

//key만 모아놓은 배열 만들어주세요.Object.keys()
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

function getProp(object) {
  if (typeof object !== 'object') {
    throw new Error('getProp함수의 매개변수는 객체 타입 이어야 합니다.');
  }
  return Object.keys(object);
}

function getP(object) {
  let result = [];

  for (let key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
}

getProp(authUser);

console.log(keyArray);

//          null    없앰.
// 프로퍼티 제거 or 삭제

authUser.name = null;

delete authUser.uid;

console.log(authUser);
//제거
function removeProperty(object, key) {
  if (key === 'all') {
    for (let key of Object.keys(object)) {
      object[key] = null;
    }
    return object;
  }
  object[key] = null;
  return object;
}
//삭제
function deleteProperty(object, key) {
  if (isEmptyObject(object)) {
    return;
  }
  delete object[key];
  return object;
}

// object[key]와 object.key 차이가 뭔가요...
removeProperty(authUser, 'all');
deleteProperty(authUser, 'name');

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

console.log(student);
// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  return Object.keys(object).length === 0 ? true : false;
  // return !Object.keys(object).length;
}

isEmptyObject(authUser); //false

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
// 구조를 다 분해해서 원하는 곳에 할당하는것!
// 배열 구조 분해 할당 : 순서가 정해져있다. 변수 이름을 바꿀 수 있다.
// 객체 구조분해할당 : 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있다.

let color = ['#ff0000', '#2b00ff', '#300ff2f'];

let [, , green] = color;

for (let [key, Value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let value = keyValue[1];
  console.log(key);
}

// let red = color[0];
// let blue = color[1];
// let grean = color[2];

console.log(green);

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
};
const { 권혜미: 미미 = 'mimi', 이수연, 강예나, 김태일 } = salaries;
// const 권혜미 = salaries.권혜미;
// const 권혜미 = salaries.권혜미;
// const 권혜미 = salaries.권혜미;
// const 권혜미 = salaries.권혜미;

console.log(권혜미);

//

/* function setCss(width, height, overflow, color) {
  console.log(width);
} */
function setCss(options) {
  const { width: w, height: h, overflow: o, color: c } = options;
  //options 객체가된다. 객체로 받음
  console.log(w, c);
}

const defaults = {
  overflow: false,
  height: 200,
  width: 100,
  color: 'red',
};

setCss(defaults);
