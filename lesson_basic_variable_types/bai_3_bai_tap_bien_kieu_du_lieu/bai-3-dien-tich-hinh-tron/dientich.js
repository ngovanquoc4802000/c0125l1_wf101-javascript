function tinhDienTichHinhTron(banKinh) {
  if (banKinh < 0) {
    return "Bán kính không thể là số âm.";
  }

  const dienTich = Math.PI * banKinh * banKinh; // 3.14 * 5 * 5

  return dienTich;
}

const banKinhNhap = 5;

const dienTichHinhTron = tinhDienTichHinhTron(banKinhNhap);

console.log(`Diện tích hình tròn với bán kính ${banKinhNhap} là: ${dienTichHinhTron}`);