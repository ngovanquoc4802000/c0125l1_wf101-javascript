/* 
    Viết một hàm tính tổng tất cả các số trong mảng array [1,2,4,5,45] .
    */
function sum_enven_numbers() {
  var sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
const result = sum_enven_numbers();
console.log(result)