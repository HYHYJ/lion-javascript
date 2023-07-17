/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log(extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
let slice = message.slice(8, -1);
console.log(slice);

let subString = message.substring(1, 3);
console.log(subString);

//* 시작에서 몇글자
let subStr = message.substr(1, 3);
console.log(subStr);

//* (앞에서부터 찾음)문자열 포함 여부 확인
//* (-1은 없는것 양수는 몇번째 글자인지 알려줌)
let indexOf = message.indexOf('i');
console.log(indexOf);

//* (뒤에서 부터 찾음)특정문자 몇번째에 있어?
let lastIndexOf = message.lastIndexOf('s');
console.log(lastIndexOf);

//*포함의 여부 확인
let includes = message.includes('more');
console.log(includes);

//* 시작단어 물어보기
let startsWith = message.startsWith('Less');
console.log(startsWith);

let endsWith = message.endsWith('more.');
console.log(endsWith);

//! 양쪽 공백 잘라내기
let trimLeft = message.trimLeft();
console.log();

let trimRight;

let str = '          a   bc  de  f     g      ';
let trim = str.trim();
console.log(trim);

console.log(str.split(' ').join(''));

function nomalText(string) {
  return string.replace(/\s*/g, '');
}
nomalText(str);
// 텍스트 반복
let repeat = message.repeat(3);

console.log(repeat);

// 대소문자 변환
//* 소문자 변환
let toLowerCase = message.toLowerCase();
console.log(toLowerCase);

//* 대문자 변환
let toUpperCase = message.toUpperCase();
console.log(toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
