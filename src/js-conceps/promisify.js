function promisify(fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      function cb(result) {
        resolve(result);
      }
      fn.apply(this, args.concat(cb));
    });
  };
}

// Creating a custom setTimeout that takes callback at the end
function testFn(...args) {
  console.log(args);
}
// Promisfy in action - using customSetTimeout
let setTimeOutPromise = promisify(testFn);

// Promise chain
setTimeOutPromise("Ok").then((a) => {
  console.log(a);
});
