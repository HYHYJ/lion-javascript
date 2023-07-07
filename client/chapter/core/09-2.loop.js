/* -------------------- */
/* Do While Loop        */
/* -------------------- */

/* let i = 0;

do {
  if (i === 0) {
    console.log('최초실행');
  } else {
    console.log(`${i}번째 실행`);
  }

  i++;
} while (i < 10);
 */
// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단
/* let i1 = prompt('원하는 순환 횟수를 적어주세요', '0');
do {
  console.log(i1);

  if (i1 < 0) {
    console.log(
      '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
    );
    break;
  } else {
    console.log(+i1);
  }
  i1--;
} while (i1 > 0); */ //i1로 해도된 짜피 0이되면 false여서 본인이 멈춤!!
// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector('.first');
// let second = document.querySelector('.second');

// first = first.nextSibling;
//comment는 주석 노드
//element는 요소 노드
//text는 글자 노드

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== document.ELEMENT_NODE);
//퍼스트 노드타입이 엘리멘트 노드가 아니면 실행해랑( 앨리멘트 찾아죠!)
//퍼스트는 text 노드이다.

// console.log(first);
// console.log(second);

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
}

const second = next(first);

console.log(second);

function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

const first1 = prev(second);

console.log(first1);
