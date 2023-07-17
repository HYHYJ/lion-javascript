/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

//? Array.isArray

// Array.isArray([]) -> true

const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

function nomalIsArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
  );
}

const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

/* 요소 순환 ---------------------------- */

//! forEach : 값을 반환하지 않는다. 각각 반복을 돈다. 아이템을 다 순회할 수 있다.
//! 인덱스 순서로 뽑아낼수있어서 편하다.
//?콜백함수는 에로우 함수
// const arr = [10, 100, 1000, 10000];

arr.forEach((item, index) => {
  console.log(item, index);
});

people.forEach((item) => {
  console.log(item.name);
});

const span = document.querySelectorAll('span');

//?이벤트 처리 할때 이방식이 제일 좋은가요? no
//?이벤트 위임 event delegation

span.forEach((item, index) => {
  item.addEventListener('click', function () {
    console.log(this, index);
  });
});
/* 원형 파괴 ----------------------------- */

//?실제 원형 회손된다.
// push
// pop
// unshift
// shift
//?
//! reverse = 값을 뒤집어버리고, 원형 파괴
//? arr.reverse();

// console.log(arr);
//! splice :멕가이버 칼 / 넣거나 추가 제거 가능
//? arr.splice(1, 2, 'javascript', 'css');
arr.splice(1, 0, 5, 13);
console.log(arr); //[10, 'javascript', 'css', 10000]

//! sort : 컴페어 펑션
//반환 값 < 0 : a가 b 보다 앞에 있어야한다.
//반환 값 == 0 : a가 b 의 순서를 바꾸지 않는다.
//반환 값 > 0 : b가 a 보다 앞에 있어야한다.

arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
/* 새로운 배열 반환 ------------------------ */

//!concat
//! concat 배열 합치기!! : 원본 파괴 안함
const user = ['선범', '효윤', '준석'];
// const newArray = arr.concat(user);
const newArray = [...arr, ...user, 'javascript', 'css'];
console.log(newArray);

//! slice : 원본 회손 하지않고 복제해줌
const slice = arr.slice(2, 5); //[13, 100, 1000] 5전까지 내보내기
console.log(slice);

//! 원본 파괴 ㄴㄴ
//? ⭐toSorted
const toSorted = arr.toSorted((a, b) => {
  return a - b;
});

console.log(toSorted);

// toReversed
const toReversed = arr.toReversed();
console.log(toReversed);

// toSpliced
const toSpliced = arr.toSpliced(2, 0, 'javascript', 'react');
console.log(toSpliced);

//!⭐ map : 확실히게 내뱉는 값 getter  값을 가져옴
//! 새로운 무언가를 만들어야하는데 그게 배열이어야 할때!
//! forEach는 값을 퉤하지 않는다 . 그냥 setter 인 느낌

// const job = people.map((item, index) => {
//   return `
//   <div>${item.profession}</div>`;
// });

const job = people.map((item, index) => {
  return /* html */ `
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `;
});

//피플 자료구조에서 나이만 모아놓은 배열이 필요하다. =>가공처리 나이 -1 내보내고 싶다.

const newAge = people.map((item) => {
  return item.age - 1;
});

console.log(newAge);

job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

// function render(){

//   return (
//     <div>
//       {
//         people.map((item,index)=>`<div>${item.profession}</div>`)
//       }
//     </div>
//   )
// }

/* 요소 포함 여부 확인 ---------------------- */

//! indexOf : 몇번째에 있어..?
console.log(arr.indexOf(100)); //3
//! lastIndexOf : 뒤에서 몇번쨰인지
console.log(arr.lastIndexOf(10)); //3
//! includes :포함하고 있어?
console.log(arr.includes(100)); //true

/* 요소 찾기 ------------------------------ */

// find : 해당 아이템을 반환
const find = people.find((item) => {
  return item.name === '김희소';
});

console.log(find);
// findIndex : 인뎃스

const findIndex = people.findIndex((item) => {
  return item.id === 3;
});

console.log(findIndex);

/* 요소 걸러내기 --------------------------- */

//! ⭐filter : 조건에 부합하는 모든 애들을 배열로 담아서 반환
const filter = people.filter((item) => {
  return item.id > 2;
});

console.log(filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

//! ⭐reduce
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

// console.log(totalAge);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
  ''
);

document.body.insertAdjacentHTML('beforeend', template);
// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

// split : 문자 -> 배열
const stringToArray = str.split(' ');

console.log(stringToArray);
// join
const join = stringToArray.join('-');

console.log(join);
