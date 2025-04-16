/* 
  Find average 
  Cho một mảng có nhiều phần tử là các chữ số, viết một hàm trả về giá trị trung bình trong mảng. (Ví dụ: mảng [1,3,5,7,20] 
  có giá trị trung bình là 7.2)
*/

function findAverage(arr) {
  let avg = 0;
  for(let i = 0 ; i < arr.length;i++) {
     avg += arr[i]
  }
  return avg / arr.length;
}
findAverage();