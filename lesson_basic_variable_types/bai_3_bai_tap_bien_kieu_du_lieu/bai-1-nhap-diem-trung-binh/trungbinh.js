let inputToan;
let inputHoahoc;
let inputSinhHoc;

inputToan = prompt("nhập điểm Toán");
inputHoahoc = prompt("nhập điểm Hoahoc");
inputSinhHoc = prompt("nhập điểm SinhHoc");


let diemToan = parseFloat(inputToan);
let diemHoaHoc = parseFloat(inputHoahoc);
let diemSinhHoc = parseFloat(inputSinhHoc);

const sum = diemToan + diemHoaHoc + diemSinhHoc;
const trungbinh = sum / 3;
document.writeln(trungbinh)
