/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(String(YEAR)); //명시적 형변환
console.log(YEAR + ' '); //암시적 형변환

// undefined, null
let days = null;
console.log(String(days));
console.log(days + '');

let undef = undefined;
console.log(typeof String(undefined));
console.log(undefined + '');

// boolean
let isClick = true;
console.log(typeof String(isClick)); //string

console.log(isClick + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); //NaN

// null
let bankBook = null;
console.log(Number(bankBook)); //0

// boolean
let cutie = false;
console.log(Number(cutie)); //0

// string
let num = '250';
console.log(Number(num)); //숫자
console.log(+num); //숫자
console.log(num * 1); //숫자
console.log(num / 1); //숫자

// numeric string
let width = '105.3px';
console.log(Number(width));

// let w = parseFloat(width);
//parseInt(값, 진수값);
let w = parseInt(width, 10);

console.log(w);

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend)); //false undefined
console.log(Boolean(bankBook)); //false null
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('')); //false
console.log(Boolean(1)); //true

console.log('암시적 형 변환 : ' + !false); //true
