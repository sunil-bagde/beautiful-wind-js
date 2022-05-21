function bind(fn, context) {
  let args = arguments;
  return function () {
    fn.apply(context, args);
  };
}
