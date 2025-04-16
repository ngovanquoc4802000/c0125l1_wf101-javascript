/* 
    Viết một hàm tính tổng tất cả các số chẵn từ 1 đến 1000.
    Gợi ý: Bạn có thể dùng toán tử lấy số dư (%) trong bài tập này.
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