function getParam(x) {
  x += "";
  document.querySelector(".display").value += x;
}

function calculator() {
  let x = document.querySelector(".display").value;
  let result = eval(x);
  document.querySelector(".display").value = result;
}

function handleClear() {
   document.querySelector(".display").value = "";
}