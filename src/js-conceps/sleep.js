function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
sleep(100);
console.log("1");
sleep(100);
sleep(100);
console.log("1");
