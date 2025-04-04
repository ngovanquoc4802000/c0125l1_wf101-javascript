function checkNguyenTo(input) {
  if (input <= 1) return false;
  for (let i = 2; i < Math.sqrt(input); i++) {
    // Nếu n chia hết cho i thì không phải là số nguyên tố
    if (input % i === 0) {
      return false;
    }
  }
  return true;
}
function display() {
  let value = parseInt(prompt("Nhập số vào đây: ", 0));
  const result = checkNguyenTo(value);
  if (result) {
    alert(value + " Là số nguyên tố");
  } else {
    alert(value + " Không phải là số nguyên tố");
  }
}
display();

