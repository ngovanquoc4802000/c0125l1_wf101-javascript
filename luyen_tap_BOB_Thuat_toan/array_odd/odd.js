/* 
   Array odd 
   Viết một hàm trả về một mảng gồm các phần từ là các số lẻ từ 1 đến 50. Ví dụ. [1,3,5, ...., 47,49]. Gợi ý: Sử dụng hàm push().
*/
function oddNumbers(arrNumbers) {
  const arr = [];
  for(let i = 1; i < 50;i++) {
    if(i % 2 === 1) {
      arr.push(i)
    }
  }
  return arr;
}
const result = oddNumbers();
console.log(result);