const convert = document.getElementById('convert');
const text = document.getElementById('text')

convert.addEventListener("click", () => {
  let amount = document.getElementById("Amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("To").value;

  if(from === "VND" && to === "USD") {
    return text.textContent = "result: " + parseFloat(amount * 23000)
  } else if(from === "USD" && to === "VND") {
    return text.textContent = "result: " + parseFloat(amount / 23000)
  } else if(from === "VND") {
    return text.textContent = "result: " + amount
  }
})
