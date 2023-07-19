/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
//* 나의 부모로 이벤트를 모두 한번에 처리

const container = getNode('.container');

//*e.currentTarget: 현재 대상 (=== this)
// console.log(e.currentTarget); //뭘클릭해도 나를 호출한 대상!!무족권(event가 걸린대상)
// console.log(this);
// console.log(e.target); //내가 누른대상을 가져온다.(처음 만나는 대상이 target)
function handleDelegation(e) {
  let target = e.target;
  //li인 가장 인접한거 찾아주ㅏ
  let li = target.closest('li');
  // let className = target.getAttribute('class');
  // let dataName = target.dataset.name;

  if (!li) return;

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  if (className === 'home') {
    console.log('홈 실행!');
  }
}

//?부모에게 이벤트 걸기
container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
