function footNumber(inputFoot) {
  let result = inputFoot * 0.305;
  return result.toFixed(3);
}
function meetersNumber(inputMeeters) {
  let result = inputMeeters * 3.279;
  return result.toFixed(3);
}
function display() {
  let valueA = parseInt(prompt("Nhập foot: ", 0));
  let valueB = parseInt(prompt("Nhập meter: ", 0));
  const promptA = footNumber(valueA);
  const promptB = meetersNumber(valueB);
  document.writeln(`${valueA} foot = ${promptA} meter` + "<br>");
  document.writeln(`${valueB} meter = ${promptB} foot`);
}
display();
