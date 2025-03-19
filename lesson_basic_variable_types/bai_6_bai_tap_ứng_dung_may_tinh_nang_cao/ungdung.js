/* begin:
input : (string) và (+/-*) và (string)
  tính : + - * / 
  logic : vòng lặp qua từng number và sử dụng witch case 
   + nếu trường hợp + thì = ra kết quả
   + nếu trường hợp - thì = ra kết quả
   + nếu trường hơpk * thì = ra kết quả
   + nếu trường hợp ÷ thì = ra kết quả
   + nếu trường hợp  / thì = ra kết quả
   */

const number = document.querySelectorAll(".number");
const equals = document.querySelector(".equals");
const display = document.querySelector(".display");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtraction = document.querySelector(".subtraction");
const addition = document.querySelector(".addition");
const percent = document.querySelector(".percent");
const AC = document.querySelector(".AC");


/* đầu vào */
let operand1 = "";
let operator = "";
let operand2 = "";

/* logic */
const checkInput = () => {
  for (const item of number) {
    item.addEventListener("click", () => {
      if (operator === "") {
        operand1 += item.textContent;
        display.textContent = operand1;
      } else {
        operand2 += item.textContent;
        display.textContent = operand2;
      }
    });
  }
};
checkInput();

addition.addEventListener("click", () => {
  if (operand1 !== "") {
    operator = "+";
  }
});
divide.addEventListener("click", () => {
  if (operand1 !== "") {
    operator = "/";
  }
});
multiply.addEventListener("click", () => {
  if(operand1 !== "") {
    operator = "x";
  }
})
percent.addEventListener("click",() => {
  if(operand1 !== "") {
    operator = "%"
  }
})

equals.addEventListener("click", () => {
  if (operand1 !== "" && operator !== "" && operand2 !== "") {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    if (operator === "+") {
      const result = num1 + num2;
      display.textContent = result;
      operator = "";
      operand2 = "";
      operand1 = result.toString();
    } else if (operator === "/") {
      const result = num1 / num2;
      display.textContent = result;
      operator = "";
      operand2 = "";
      operand1 = result.toString();
    } else if(operator === "x") {
      const result = num1 * num2;
      display.textContent = result;
      operator = "";
      operand2 = "";
      operand1 = result.toString();
    } else if (operator === "%") {
      const result = num1 % num2;
      display.textContent = result;
      operator = "";
      operand2 = "";
      operand1 = result.toString();
    }
  }
});

AC.addEventListener("click", () => {
  operand1 = "";
  operator = "";
  operand2 = "";
  display.textContent = "";
});
