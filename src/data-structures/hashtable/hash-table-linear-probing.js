function hashTable(size = 5) {
  const arr = Array.from({ length: size }, () => -1);
  function insert(value) {
    const key = value % size;
    let index = key;
    while (arr[index] !== -1) {
      index = (index + 1) % size;
      if (index === key) {
        console.log("Hash table full");
        return false;
      }
    }
    arr[index] = value;
    return true;
  }
  function del(value) {
    const key = value % size;
    let index = key;
    while (arr[index] !== value) {
      index = (index + 1) % size;
      if (index === key) {
        return false;
      }
    }
    arr[index] = -1;
    return true;
  }
  function search(value) {
    const key = value % size;
    let index = key;
    while (arr[index] !== value) {
      index = (index + 1) % size;
      if (index === key) {
        return false;
      }
    }
    return true;
  }
  return {
    insert,
    del,
    search,
    value: arr
  };
}

const hash = hashTable();

hash.insert(10);
hash.insert(15);
hash.insert(2);
hash.insert(5);
hash.insert(4);
hash.insert(20); //
hash.del(4);

const isDel = hash.del(211); // present
console.assert(isDel === false, "Value not found");
console.log("Found: ", hash.search(2));
console.log("Not found: ", hash.search(1112));

console.log("hash", hash.value);
