/* ---------------- */
/* Condition        */
/* ---------------- */

/* if ('0') {
  console.log('이 조건은 항상 실행됩니다.');
} else {
  console.log('조건에 부합하지 않습니다.');
}

let result = prompt('자바스크립트의 공식 이름은 무엇일까요?').toLowerCase();

if (result === 'ecmascript') {
  console.log('정답입니다!');
} else {
  console.log('모르셨나요? 정답은 ECMAScript 입니다!');
} */

/* let result = prompt('숫자를 입력하세요', 0); //0 은 기본값!!

if (value > 0) {
  console.log(1);
} else if (value < 0) {
  console.log(-1);
} else {
  console.log(0);
} */

/* let a = 1;
let b = 2;

let result = a + b < 4 ? '미만' : '이상';

console.log(result); */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
/* let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?', '');

// 영화 볼거니?
let goingToWatchMovie = 'yes';

if (!didWatchMovie) {
  let willWatch = confirm('그럼 볼꺼니..?');

  if (willWatch) {
    let who = prompt('누구랑 볼거니?');

    if (who === '여자친구') {
      console.log('굿');
    } else {
      console.log('그래!');
    }
  }

  console.log('안봤어');
} else {
  let alone = confirm('너 혼자 봤니?');

  if (alone) {
    let didCry = confirm('너 울었니...?');

    if (didCry) {
      console.log('찌지리');
    } else {
      console.log('너 T야?');
    }
  }

  console.log('봤어');
} */

// if 문(statement)
/* if (didWatchMovie === 'yes') {
  console.log('무슨 영화 봤어?');
} else if (goingToWatchMovie === 'yes') {
  console.log('나랑 영화보러 갈래?');
} else {
  console.log('그래...');
} */

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
