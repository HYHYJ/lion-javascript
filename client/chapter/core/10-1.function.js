/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

/* console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900); */

function getRamdomValue() {}

// 함수 선언
function calcPrice(priceA, priceB, priceC = 0, priceD = 0) {
  /*  if (typeof priceC === 'undefined') {
    priceC = 0;
  } */

  // if (!priceC) priceC = 0;
  // priceC ||= 0; // 10을 넣으면 10출럭
  // priceC ??= 0; //10을 넣으면 10

  if (!priceA || !priceB) {
    throw new Error('calcPrice 함수의 첫 번째 매개변수는 필수 입력 값 입니다.');
  }

  return priceA + priceB + priceC + priceD;
}

const result = calcPrice(10, 30); // 함수 호출

console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(pxValue, base = 16) {
  // let result = parseFloat(pxValue) / base;
  // return (result += 'rem');

  /*  if (typeof pxValue === 'string') {
    pxValue = parseInt(pxValue, 10);
  } */
  if (!pxValue)
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값입니다.');
  typeof pxValue === 'string' && (pxValue = parseFloat(pxValue, 10));
  return `${pxValue / base}rem`;
}

console.log(rem('30px', 16));

console.assert(rem(20) === '1.25rem');

// rem(20) === '1.25rem';
// rem('30px', 16) === '1.875rem';
// rem('56px', 16) === '5.6rem';

// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
