function Fahrenheit(input) {
  const C = (input - 32) / 1.8;
  return C;
}

const number = document.getElementById("numberFahrenhEit");
number.addEventListener("change", (e) => {
    const text = document.getElementById("text");
    const result = Fahrenheit(e.target.value);
    text.innerHTML = `<p>${result}</p>`;
});
