/* 
 Number to string
 Viết một hàm có chức năng thay thế các phần tử 
 có giá trị âm trong mảng với chuỗi 
 'Dojo'. Ví dụ nếu mảng = [-1, -3,2],
  hàm của bạn sẽ trả lại [ 'Dojo', 'Dojo', 2].
*/

/* function numberToString(arr) {
  let string = "Dojo";
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      arr[i] = string
    }
  }
  return arr;
}
const result = numberToString([-2, -4, -1, 2, 4]);
console.log(result); */

function compareTriplets(a, b) {
  const newArr = [];
  let alice = 0;
  let bob = 0;
  for(let i = 0 ; i < a.length;i++) {
    if(a[0] > b[0]) {
      alice++;
      console.log(alice)
    } else if(a[1] < b[1]) {
        bob++;
      console.log(alice)

    } else {
        return "no points are earned."
    }
   
  }
  newArr.push(alice)
  newArr.push(bob)
  return newArr;
}
const result = compareTriplets([1, 2, 3],[3, 2, 1]);
console.log(result)