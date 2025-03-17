const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.getElementById("result");


button.addEventListener("click",() => {
    const value = parseFloat(input.value)
    const Fahrenheit = (9 * value / 5 ) + 32;
    return result.innerHTML = `<p>result: ${Fahrenheit}</p>`; 
})