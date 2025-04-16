/* 
Sum odd 5000
Viết một hàm trả về tổng của tất cả các số lẻ từ 1 đến 5000. (ví dụ 1 + 3 + 5 + ... + 4997 + 4999)
*/
function sum_odd_5000() {
  var sum = 0;
  for(let i = 0 ; i <= 5000; i++) {
    if(i % 2 === 1) {
      sum += i
    }
  }
  return sum
};
sum_odd_5000()