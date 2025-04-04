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