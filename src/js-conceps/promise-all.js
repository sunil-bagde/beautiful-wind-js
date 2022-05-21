function promiseAll(values = []) {
  return new Promise((resolve, reject) => {
    let completed = 0;
    let results = [];
    values.forEach((value, index) => {
      Promise.resolve(value) // non-promise -> promise
        .then((result) => {
          completed++;
          results[index] = result;
          if (completed === values.length) {
            // all done
            resolve(results);
          }
        })
        .catch((err) => reject(err)); // fails
    });
  });
}
let r = promiseAll([1, Promise.resolve("Ok")]);
r.then(console.log).catch(console.error);
r = promiseAll([1, Promise.reject("Error 1")]);
r.then(console.log).catch(console.error);
