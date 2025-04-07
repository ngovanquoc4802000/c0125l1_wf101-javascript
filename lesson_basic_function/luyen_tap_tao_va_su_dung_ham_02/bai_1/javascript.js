/* 
  bài 1.Tính bình phương:
  Viết hàm tính bình phương của một số bất kỳ được đưa vào.
  Gọi và kiểm tra hàm vừa viết.
*/
function checkGiaiThua(input) {
  let count = 1;
  if (input < 0) {
    return false;
  }
  if (input === 0) {
    return 1;
  }
  for (let i = 1; i <= input; i++) {
    count *= i;
  }
  return count;
}

function display() {
  const value = parseInt(prompt("Nhập số nguyên:", 0));
  const result = checkGiaiThua(value);
  document.writeln("Giai thua của một số là: " + result);
}
display();

/* 
2. Tính diện tích và chu vi hình tròn:
  Viết hàm tính diện tích hình tròn.
  Viết hàm tính chu vi hình tròn.
  Gọi và kiểm tra các hàm vừa viết.
*/
function dienTichHinhTron(inputDientich) {
  const result = Math.PI * Math.pow(inputDientich, 2);
  return result.toFixed(3);
}
function chuViHinhTron(inputChuvi) {
  const result = 2 * Math.PI * inputChuvi;
  return result.toFixed(3);
}
function display() {
  const valueA = parseInt(
    prompt("Hãy nhập bao nhiêu cm để tính diện tích hình tròn", 0)
  );
  const valueB = parseInt(
    prompt("Hãy nhập bao nhiêu cm để tính chu vi hình tròn", 0)
  );
  let dientich = dienTichHinhTron(valueA);
  let chuvi = chuViHinhTron(valueB);
  document.writeln(`Kết quả diện tích hình tròn là : ${dientich} cm` + "<br>");
  document.writeln(`Kết quả chu vi hình tròn là : ${chuvi} cm`);
}

/* 
3.Tính giai thừa:

Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.
Gọi và kiểm tra hàm vừa viết.
*/
function tinhGiaithua(input) {
  let giaithua = 1;
  if (input < 0) {
    return false;
  }
  if (input === 0) {
    return 1;
  }
  for (let i = 1; i <= input; i++) {
    giaithua *= i;
  }
  return giaithua;
}

function display() {
  const valueA = parseInt(prompt("Hãy nhập số vào đây", 0));
  const result = tinhGiaithua(valueA);
  document.writeln("Giai thừa của số:" + result);
}

/* 
   4.Kiểm tra ký tự số:
  Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số hay không.  
 Nếu là ký tự số, hàm trả về true; ngược lại trả về false.
*/
function checkNumber(input) {
  if (input === "") {
    alert("Yêu cầu bạn nhập vào");
    return;
  }
  if ((typeof input === "string" && input.length >= 1) || input.length <= 10) {
    return input >= "0" && input <= "9";
  }
  return false;
}
function display() {
  let value = prompt("Nhập số vào đây: ");
  const result = checkNumber(value);
  if (result) {
    document.writeln("Kí tự nhập là số");
  } else {
    document.writeln("Kí tự nhập không phải là số");
  }
  return result;
}
display();

/* 
bài 5: Tìm số nguyên nhỏ nhất:
Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
*/
function checkFind(input) {
  let min = input[0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] < min) {
      min = input[i];
    }
  }
  return min;
}

function display() {
  const array = [];
  for (let i = 1; i <= 3; i++) {
    const value = parseInt(prompt("Nhập số nguyên thứ:" + i));
    array.push(value);
  }
  const result = checkFind(array);
  document.writeln(result);
}
display();

/* 
6.Kiểm tra số nguyên dương:
Viết hàm nhận vào một số, kiểm tra xem số đó có phải là số nguyên dương không.
Nếu là nguyên dương, trả về true; ngược lại trả về false.
*/
function kiemTraSoNguyenDuong(prompt) {
  if (!Number.isInteger(prompt)) {
    document.writeln(prompt + " không phải là số");
    return;
  }
  if (prompt > 0) {
    return document.writeln("đây là số nguyên dương " + prompt);
  } else {
    return false;
  }
}
function display() {
  const value = parseInt(prompt("Nhập vào số nguyên dương", 0));
  const result = kiemTraSoNguyenDuong(value);
  return result;
}
display();

/* 
bài 7: Đổi chỗ hai số nguyên:
Viết hàm truyền vào 2 số nguyên bất kỳ và thực hiện đổi chỗ hai số đó.
*/
function checkArray(arrA, arrB) {
  const array = [];
  array.push(arrA, arrB);
  let temp;
  temp = array[0];
  array[0] = array[1];
  array[1] = temp;
  return array;
}

function display() {
  const valueA = parseInt(prompt("Nhập số đầu tiên : ", 0));
  const valueB = parseInt(prompt("Nhập số thứ 2 ", 0));
  const result = checkArray(valueA, valueB);
  return document.writeln(result);
}
display();

/* 
 Bài 8: Đảo ngược mảng:
Viết hàm nhận vào một mảng số nguyên bất kỳ và đảo ngược mảng đó.
*/

function reverseArray(input) {
  const array = [];
  for (let i = input.length - 1; i >= 0; i--) {
    array.push(input[i]);
  }
  return array;
}

function display() {
  const array = [];
  for (let i = 1; i < 5; i++) {
    const value = prompt("Nhập vào : " + i);
    array.push(value);
  }
  const result = reverseArray(array);
  document.writeln("Các dãy số đã đảo ngược: " + result);
}
display();

/* 
Bài 9 :Kiểm tra ký tự trong mảng:

Viết hàm nhận vào một mảng ký tự và một ký tự bất kỳ.
Kiểm tra xem ký tự đó có nằm trong mảng hay không.
Nếu có, trả về số lần xuất hiện; nếu không, trả về -1.
*/
function checkKiTuArray(array, valueB) {
  let solanxuathien = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valueB) {
      solanxuathien++;
    }
  }
  if (solanxuathien > 0) {
    document.writeln(solanxuathien);
  } else {
    return -1;
  }
}
function display() {
  const array = [];
  for (let i = 0; i < 4; i++) {
    const valueA = prompt("Nhập vào 1 mảng kí tự " + i);
    array.push(valueA);
  }
  const valueB = prompt("Nhập vào 1 kí tự");
  const result = checkKiTuArray(array, valueB);
  return result;
}
display();
