function debounce(fn, interval) {
  let timer;
  return function () {
    let context = this;
    if (timer) clearTimeout(timer);
    let args = arguments;
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, interval);
  };
}
let count = 0;
let getData = () => {
  count++;
  console.log("Checking...", count);
};

let debounceDOM = document.querySelector("#app");
debounceDOM.innerHTML = `
  <input id ="test"/>
`;

let test = document.querySelector("#test");
test.addEventListener("keyup", debounce(getData, 300));
