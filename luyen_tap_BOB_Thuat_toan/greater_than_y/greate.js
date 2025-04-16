/* 
 Greater than Y
 Viết một hàm, truyền vào hai tham số, tham số đầu là một mảng các số nguyên, tham số thứ hai là một số nguyên, Ví dụ tham số thứ nhất arr = [1, 3, 5, 7], tham số thứ 2 Y = 3, hàm sẽ trả về giá trị là 2.
 Vì có hai số nguyên trong mảng lớn hơn 3 là 5 và 7.
*/

function greaterY(arr, Y) {
  var count = 0;
  for(let i = 0 ; i < arr.length;i++) {
      if(arr[i] > Y ){
          count++
      }
  }
   return count; 
}
const result = greaterY();
console.log(result);