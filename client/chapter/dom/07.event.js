/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

// const first = getNode('.first');

//* 실행연산자()은 안씁니다!!
function handler() {
  console.log('HTML 속성에서 이벤트를 실행합니다.');
}

// first.onclick = handler;

//? click, mousemove, mouseover, mouseout, mousedown, mouseup
//? 성능의 부하를 많이 가져온다

// const remove = bindEvent('.first', 'click', handleClick);

// setTimeout(() => {
//   //함수를 어딘가에서 불러와서 써야함.
//   console.log('!!');
//   first.removeEventListener('click', handleClick);
// }, 3000);

//*이벤트 객체 (event object)
//?이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듭니다.
//?객체에 이벤트에 고나한 상세한 정보를 넣고, 핸드러의 인수로 형태를 전달한다.

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClick(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
}

function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

ground.addEventListener('click', handleClick);

//*throttle : 초마다 실행 : 이벤트 시간을 두고 호출하느냐

ground.addEventListener(
  'mousemove',
  debounce((e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `;

    insertLast(ground, template);
  })
);
