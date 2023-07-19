/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

//Document Object Model

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

//* 요소 노드에서만 사용 가능
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName

const first1 = getNode('.first');
const span = getNodes('span'); //

const first = getNode('.first');

const [firstSpan, secondSpan] = document.querySelectorAll('span');
console.log(firstSpan);
console.log(secondSpan);

// - querySelector
// - querySelectorAll
// - closest
//? 가장 인접한 대상 , 부모를 출력
console.log(first.closest('h1'));

/* 문서 대상 확인 */
// - matches : 맞냐?

// 선택자 안에 class | id 를 가지고 있는 대상이 있어?
console.log(first.matches('.first'));
console.log(first.matches('#message'));
// - contains

//선택자의 자식들 중에 해당 element가 있어?
console.log(first.contains(secondSpan));

//클레스를 포함하고 있어?(클레스의 포함여부)
//node.classList.contains()
