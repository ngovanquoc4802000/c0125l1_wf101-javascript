/* 
 Squares
 Cho một mảng với nhiều phần tử, 
 hãy viết một hàm để thay thế mỗi phần tử
trong mảng bằng một phần tử có giá trị bằng bình phương của giá trị ban đầu.
 (Ví dụ: [1,5,10, -2] sẽ trở thành [1,25,100,4])
*/

function squareVal(arr) {
  return arr.map((item) => item * item); 
}