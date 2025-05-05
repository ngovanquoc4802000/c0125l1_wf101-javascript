function calculateInteger(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
    return false;
  }
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

function isPositiveInteger(a, b) {
  if (
    typeof a !== "number" ||
    !Number.isInteger(a) ||
    a < 0 ||
    typeof b !== "number" ||
    !Number.isInteger(b) ||
    b < 0
  ) {
    return false;
  }
  const sumPositiveIntegerOne = calculateInteger(a);
  const sumPositiveIntegerTwo = calculateInteger(b);

  return sumPositiveIntegerOne === b && sumPositiveIntegerTwo === a && a !== b;
}

function display(a,b,isAmicable) {
  if(isAmicable) {
    alert(`Cặp số ${a}, ${b} là cặp số thân thiết`);
  } else {
    alert(`Cặp số ${a}, ${b} là không phải là cặp số thân thiết`);
  }
}

const result = document.writeln;

const number1 = 220;
const number2 = 284;
/* 
const number1 = 123;
const number2 = 456;
*/
/* tinhs toasn */
const result1 = isPositiveInteger(number1, number2);
/* hien thi */ 
display(number1, number2, result1); 