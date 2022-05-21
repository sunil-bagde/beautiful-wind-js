function insertionSort(input) {
  let i;
  let value;
  let index;

  for (i = 1; i < input.length; i++) {
    value = input[i];
    index = i;

    while (index > 0 && input[index - 1] > value) {
      input[index] = input[index - 1];
      index--;
    }
    input[index] = value;
  }
}
/*

need to compare with first elemnt 
so start loop from 1

in inner while loop i compare all
elment with it  prev and prev prev
unitl its proper postion
*/
const arr = [234, 43, 55, 63, 5, 6, 235, 547];
insertionSort(arr);
console.log("insertionSort: ", arr);

// Time     O(n)²
// Space    O(n)
// Auxially O(1)
