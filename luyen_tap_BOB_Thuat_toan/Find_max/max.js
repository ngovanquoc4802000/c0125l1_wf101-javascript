/* 
  Find max
   Cho một mảng với nhiều giá trị, viết một hàm trả về số lớn nhất trong mảng. (Ví dụ: các [-3,3,5,7] tối đa là 7)
*/

function findMax(arr) {
  const max = arr[0];
  for(let i = 0; i < arr.length;i++) {
    if(arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}
findMax()