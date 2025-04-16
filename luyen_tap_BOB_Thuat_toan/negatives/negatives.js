/* 
 Negatives
 Cho một mảng nhiều phần tử, 
 hãy viết một hàm có chức năng thay thế các phần tử
có giá trị âm (nhỏ hơn 0) trong mảng bằng môt phần tử có giá trị bằng 0. Khi chương trình được thực hiện,
 mảng sẽ không còn phần tử có giá trị âm. (Ví dụ: [1,5,10, -2] sẽ trở thành [1,5,10,0])
*/

function noNeg(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}
const result = noNeg([1, 2, 4, 7, -3]);
console.log(result);
