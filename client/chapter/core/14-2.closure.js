//호랭이의 지구 추방 외계인 납치 사건
//closure ===폐쇠  : 가비지 컬렉터로 수집이 안되게!!

function earth() {
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };
  let gravity = 10;

  /*  return function (value) {
    // console.log( apple );
    gravity = value;
  }; */

  return (value) => {
    // console.log( apple );
    gravity = value;
  };
  // return tiger
}

const ufo = earth();

ufo(5);

const button = document.querySelector('button');

// let isClicked = true; // 전역 오염 ...

function handleClick() {
  let isClicked = true;

  return function () {
    if (isClicked) {
      document.body.style.backgroundColor = 'orange';
    } else {
      document.body.style.backgroundColor = 'transparent';
    }

    isClicked = !isClicked;
  };
}

button.addEventListener('click', handleClick());

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(overValue) {
    value = overValue;
  }

  return [read, write];
}

// setClick()
// const [click,setClick] = useState(true);
