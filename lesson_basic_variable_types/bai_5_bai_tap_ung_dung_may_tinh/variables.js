  const addition = document.querySelector(".addition");
  const subtraction = document.querySelector(".subtraction");
  const multiplication = document.querySelector(".multiplication");
  const division = document.querySelector(".division");
  const result = document.querySelector(".result");
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");
  
  const calculator = param => rum => {
    /* high order function */
      const num1 = parseFloat(text1.value);
      const num2 = parseFloat(text2.value);
      /* Chỗ này nếu num1 và num2 nếu user nhập là chữ thì báo lỗi */
      if(isNaN(num1) || isNaN(num2)) {
        result.innerHTML = `<p style="color: red">Please, input</p>`;
        return
      }
      switch (param) {
        case "+":
        result.textContent = num1 + num2;
          break;
        case "-":
         result.textContent =  num1 - num2;
          break;
        case "*":
         result.textContent =  num1 * num2;
          break;
        case "/":
         result.textContent = num1 / num2;
         default: 
         result.innerHTML = `<p style="color: red>Error</p>`
      }
    return rum;
  };
  
  addition.addEventListener("click", calculator("+"));
  subtraction.addEventListener("click", calculator("-"));
  multiplication.addEventListener("click", calculator("*"));
  division.addEventListener("click", calculator("/"));
