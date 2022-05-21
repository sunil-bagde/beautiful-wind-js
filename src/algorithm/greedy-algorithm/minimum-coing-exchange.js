function findMinsCoin(coins, size, value) {
  let count = 0;
  const ans = {
    coins: []
  };
  for (let i = 0; i < size; i++) {
    let currentValue = coins[i];
    while (value >= currentValue) {
      value -= currentValue;
      ans["coins"].push(currentValue);
      count++;
    }
    if (value === 0) {
      break;
    }
  }
  console.log("Coins: ", ans.coins);
  return count;
}
const coins = [25, 20, 10, 5];
let result = findMinsCoin(coins, coins.length, 105);
console.log("Result: ", result, 5);

result = findMinsCoin(coins, coins.length, 80);
console.log("Result: ", result, 4);
