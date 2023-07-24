import { jujeobData } from './data/data.js';
import {
  clearContents,
  copy,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  shake,
  showAlert,
} from './lib/index.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');

// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
// 2. nameField에 있는 값을 가져와 주세요.
// 3. jujeob 데이터 가져오기
// 4. jujeobData에서 랜덤한 주접 한개를 가져와야함.
// 5. pick 항목을 result에 랜더링해 주세요.

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리
// 2. 공백 문자를 받았을 때 예외처리  replace => regEXP
// 3. 숫자형 문자를 받았을 때 (e.g  123, 기안84)

//replace => regEXP

// [phase-3]
// [phase-3]
// 1. 잘못된 정보를 입력 받으면 사용자에게 알려주세요.
// 2. 재사용 가능한 함수 (showAlert)
// 3.

function handleSubmit(e) {
  e.preventDefault();

  let name = nameField.value;
  //data.js 에서 함수 데이터값을 name 인풋값을 넣어주기
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  //만약 입력값이 없다면 실행을 멈춰주세요.
  // 규식이형 모든 빈문자를 빈문자일때 오류

  //에러창 나왔다가 들어가게하기 addClass,removeClass,setTimeout
  if (!name || name.replace(/\s*/g, '') === '') {
    showAlert('.alert-error', '이름을 입력해주세요!!', 2000);

    //!⭐GREENSOCK 애니메이션 엔진
    //애니메이션을 다시 실행해야해서
    shake.restart();

    return;
  }
  //nan 이야? 아니면 숫자인지 아닌지
  if (!isNumericString(name)) {
    console.log('숫자 타입입니다.');
    showAlert('.alert-error', '제대로 된 이름을 입력해주세요!!', 2000);
    return;
  }

  //글자 result 내부 내용 지워주기
  clearContents(resultArea);
  insertLast(resultArea, pick);
}

//*클립보드 복사가 완료되면 그때 alert를 띄워!! promise 약속해!!

// 이름을 제대로 입력 했을 때 클립보드에 복사가 될 수 있도록.
// let state = false;

// state = true;

// if(state){  ...logic }

//!!⭐⭐⭐🔥클립보드 복사
function handleCopy() {
  const text = resultArea.textContent;
  //* 클립보드 복사
  //? 클립보드가 성공했다면 (.then) alert 실행시켜죠

  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!');
  });
}

submit.addEventListener('click', handleSubmit);
resultArea.addEventListener('click', handleCopy);
