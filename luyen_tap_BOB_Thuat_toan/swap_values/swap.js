function swap(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}
const result = swap([1, 5, 10, -2]);
console.log(result);
