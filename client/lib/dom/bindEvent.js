function bindEvent(node, type, handler) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!/mouseenter|click|mousemove|mouseout|mouseover/g.test(type)) {
    throw new TypeError(
      'bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.'
    );
  }

  node.addEventListener(type, handler);
  //! 클로져
  // return () => {
  //   return node.removeEventListener(type, handler);
  // };
  return () => node.removeEventListener(type, handler);
}
