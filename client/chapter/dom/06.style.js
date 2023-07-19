/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// console.log((first.className = 'box second')); //setter
console.log(first.className); //getter
// console.log((first.className = 'box')); //setter

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

//add
//remove
//toggle
//contains

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active'); //boolean 값 반환

//class에 가지고 있어?? 없어??
console.log(first.classList.contains('is-active')); //boolean 값 반환

function addClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass 함수의 두번째 인수는 문자 타입 이어야 합니다.'
    );
  }
  node.classList.add(className);
}
addClass('.first', 'ㅁㅁㅁ');

function removeClass(node, className) {
  if (typeof node === 'string') node = getNode(node);

  if (!className) {
    node.className = '';
    return;
  }
  if (typeof className !== 'string') {
    throw new TypeError(
      'removeClass 함수의 두번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  node.classList.remove('className');
}

// toggleClass

// const toggleClass = (node, className) => {
//   if (typeof node === 'string') node = getNode(node);
//   if (typeof className !== 'string') {
//     throw new TypeError(
//       'toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
//     );
//   }

//   return node.classList.toggle(className);
// };
// first.className = '';

// attr(first, 'class', '');

/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; //setter
// console.log(first.style.backgroundColor); //getter

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first).backgroundColor);
console.log(getComputedStyle(first).getPropertyValue('pink'));

//글자에 핑크색 주기

function setCss(node, prop, value) {
  if (typeof node === 'string') node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'setCss 함수의 두번째 인자인 prop은 유효한 css속성이 아닙니다.'
    );
  }
  if (!value) {
    throw new SyntaxError('setCss 함수의 세번째 인수는 필수값 입니다.');
  }

  node.style[prop] = value;
}

setCss('.first', 'color', 'pink');

console.log(css('.first', 'font-size'));
console.log(css('.first', 'background-color'));
