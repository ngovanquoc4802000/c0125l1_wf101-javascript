function tinhChuViHinhTron(banKinh) {
  if (banKinh < 0) {
    return "Bán kính không thể là số âm.";
  }

  // Tính chu vi hình tròn
  const chuVi = 2 * Math.PI * banKinh;

  // Trả về chu vi
  return chuVi;
}

const banKinhNhap = 7; 

const chuViHinhTron = tinhChuViHinhTron(banKinhNhap);

// Hiển thị kết quả
console.log(`Chu vi hình tròn với bán kính ${banKinhNhap} là: ${chuViHinhTron}`);