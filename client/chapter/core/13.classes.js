/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

//Animal => tiger =>  호돌이

//나는 Animal이 라는것을 생성할꺼야!!\

/* class Animal {
  legs = 4;
  tail = true;
  stomach = [];
//{name, age}는 구조분해할당을 인자에서 한다
  constructor({name, age}) {
    this.name = name;
  }
  set eat(food) {
    this.stomach.push(food);
  }
  get eat() {
    return this.stomach;
  }
}
 */

class Animal {
  legs = 4;
  tail = true;
  stomach = [];

  constructor(name) {
    this.name = name;
    console.log('최초 1회 실행');
  }
  set eat(food) {
    this.stomach.push(food);
  }
  get eat() {
    return this.stomach;
  }
}

//animal로 부터 확장시켜준다.
class Tiger extends Animal {
  //  ⭐앞에 #을 붙이면 숨김처리 된다! ⭐
  //(밖에 사용자가 해당속성에 접근 못함, 안에서는 접근 가능)
  #prey = '';

  constructor(name, pattern) {
    super(name);
    // ⭐super 내 부모(상위)의 프로퍼티를 가져오겠다 => 위에 animal네임을 쓴다
    this.pattern = pattern;
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  attack() {
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`;
  }
  //⭐static method⭐ : 누구나 다 쓸수있다 .
  // 본래의 class에서 가져와 쓰는것
  // beom.sleep('aa') XX 생성자가 쓸수 있는게 아님
  // Tiger.sleep('아무거나') OO 상위에서 쓰는 것임!!
  static sleep(name) {
    console.log(name + '이 잠을 잔다');
  }
}

const boem = new Tiger('범', '호랑이 무늬');
const boem1 = new Tiger('hoho', '호피 무늬');
// const tiger = new Animal('호돌이');

//instanch Method 생성자 함수를 ㅌㅇ해 생성된 객체만 사용할 수 있는 능력
//static Method

class Champion {
  q = '';
  w = '';
  d = '';
  f = '';

  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }
  pressD() {
    console.log(this.d + '발동!');
  }
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});
