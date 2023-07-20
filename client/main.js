//* 모듈 프로그래밍 => js 어려운 문법은 x 방법론
//? 내뱉으면 받는 능력이 모듈프로그래밍
// 자바스크립트 파일을 type = "module" 탄탄 캡슐화, 아무나 들어가지 못함
// 브라우저창에서 디버깅 불가하다. 코드안에서만!!

//!⭐getNode 가져오기
import { getNode, clearContents, insertLast } from './lib/index.js';

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const clear = getNode('#clear');
const result = getNode('.result');

// 1. input value 값 가져오기

// 2. 두 수의 합 더하기

// 3. result 출력 하기

function handleInput() {
  let firstValue = +first.value;
  let lastValue = second.value / 1;
  let total = firstValue + lastValue;

  clearContents('.result');
  insertLast('.result', total);
}

//!2
//clear 버튼을 누르면 모든 글자가 초기화 될수 있도록 만들어주기

function handleClear(e) {
  e.preventDefault();

  clearContents(first);
  clearContents(second);
  clearContents(result);

  result.textContent = '-';
}

//!3
function page2() {
  const calculator = getNode('.calculator');
  const clear = getNode('#clear');
  const result = getNode('.result');
  const numberInputs = Array.from(getNodes('input:not(#clear)'));

  console.log(numberInputs);

  function handleInput() {
    const total = numberInputs.reduce(
      (total, input) => total + Number(input.value),
      0
    );

    console.log();

    clearContents(result);
    insertLast(result, total);
  }

  function handleClick() {
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClick);

  // [page-3]
  // 위 내용을 이벤트 위임으로 변경
  // .calculator 이벤트 input
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
