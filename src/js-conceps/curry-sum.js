let sum = (a) => (b) => (b ? sum(a + b) : a);

let r = sum(1)(3)();
console.log(r);

let multiply = (x) => (y) => (y ? multiply(x * y) : x);

console.log(multiply(1)(2)(3)());
