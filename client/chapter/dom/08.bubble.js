/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */
//* p에 버튼이 있는데 모달창 띄움 , 확인취소버튼, 버튼을 눌러서 모달창해서 해주고싶어도, 제일큰 부모의 이벤트가 걸림.
//! e.stopPropagation() : 나의 대한것만 누르게 만들기

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener(
  'click',
  () => {
    console.log('%c section', 'color:orange');
  },
  true
);

article.addEventListener(
  'click',
  (e) => {
    // e.stopPropagation();
    console.log('%c article', 'color:dodgerblue');
  },
  true
);

p.addEventListener(
  'click',
  (e) => {
    //! 같이 눌러지는거 멈춰!!
    // e.stopPropagation();
    console.log('%c p', 'color:hotpink');
  },
  true
  //* 캡처링 :순서가 바뀜 section, article, p
);
/* 캡처링 ----------------------------------------------------------------- */
