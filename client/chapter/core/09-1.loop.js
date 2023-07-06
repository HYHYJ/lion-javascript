/* --------------- */
/* While Loop      */
/* --------------- */
/* 
let repeat = 0;
while (repeat < 10) {
  console.log(repeat);
  repeat++;
} */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

//while 문 (순환 : 순방향)
// let z1 = performance.now();

let i = 0;
while (i < frontEndDev.length) {
  let value = frontEndDev[i]; //항상 변수에 담아서 쓰기!

  // console.log(value);

  i++;
}

// let z2 = performance.now();
// console.log(z2 - z1);

//while 문 (역순환 : 역방향) /성능상 더 좋음!!!!
let z1 = performance.now();

let l = frontEndDev.length - 1;
while (l >= 0) {
  let value = frontEndDev[l];

  // console.log(value);

  l--;
}

let z2 = performance.now();
console.log(z2 - z1);

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/* console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]);
console.log(frontEndDev[6]); */

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

//원본 파괴
//배열의 깊은 복사

//let copyArray = frontEndDev.slice(); //배열 통째로 복사하기! (old)
let copyArray = [...frontEndDev]; //new 복사방법

/* while (frontEndDev.length) {
  console.log(frontEndDev.pop()); //뒤에서부터 빼기
} */
while (frontEndDev.length) {
  console.log(frontEndDev.shift()); //앞에서부터 빼기
}

// 성능 진단 : 순환 vs. 역순환
