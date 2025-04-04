function checkNumberMin(array) {
    let min = array[0];
    for(let i =0; i < array.length;i++) {
      if(array[i] < min) {
         min = array[i]
      }
    }
    return min;
}

function display() {
  const array = [129,23,54,57,23,12,11,4,25,2];
  const result = checkNumberMin(array);
  document.write(result);
}
display();

/* function swap(a, b) {
var temp = a;
a = b;
b = temp;
}

var a = 5;
var b = 10;
swap(a, b);
document.write("a = " + a + ", b = " + b); 
====> nếu là tham trị thì sẽ không hoán đổi ngược được
====> nếu là tham chiếu sẽ hoán đổi được
*/
