/* 

Max/Min/Avg
Cho một mảng với nhiều phần tử, 
viết một hàm trả về một mảng mới mà chỉ 3 phần tử
 có các giá trị : lớn nhất, nhỏ nhất, 
 giá trị trung bình của mảng ban đầu. (Ví dụ: [1,5,10, -2] sẽ trả về [10, -2,3.5]).

*/
function maxMinAvg(arr) {
  const newArr = [];
  let max = arr[0];
  let min = arr[0];
  let count = 0;
  arr.map((item) => {
    if (item > max) {
      max = item;
    }
    if (item < min) {
      min = item;
    }
    count += item;
  });
  newArr.push(max, min, count / arr.length);
  return newArr;
  //your code here
}
const result = maxMinAvg([1, 2, 3, -2]);
console.log(result);
