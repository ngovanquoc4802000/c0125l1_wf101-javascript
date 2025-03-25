var Images = {
  imgsDB: [
      [
          "funny-cat1_part1x1.jpg",
          "funny-cat1_part2x1.jpg",
          "funny-cat1_part3x1.jpg",
          "funny-cat1_part4x1.jpg",
          "funny-cat1_part5x1.jpg",
      ],
      [
          "monkey_part1x1.jpg",
          "monkey_part2x1.jpg",
          "monkey_part3x1.jpg",
          "monkey_part4x1.jpg",
          "monkey_part5x1.jpg",
      ],
      [
          "panda_swap_part1x1.jpg",
          "panda_swap_part2x1.jpg",
          "panda_swap_part3x1.jpg",
          "panda_swap_part4x1.jpg",
          "panda_swap_part5x1.jpg",
      ],
  ],
  imageElements: [
      document.getElementById("img1"),
      document.getElementById("img2"),
      document.getElementById("img3"),
      document.getElementById("img4"),
      document.getElementById("img5"),
  ],
};

const { imgsDB, imageElements } = Images;
let clickedImages = [];
let clickCount = 0;

function checkWin() {
  // Kiểm tra nếu tất cả ảnh đã được click
  if (clickedImages.length === 5) {
    const firstImage = clickedImages[0]; // lấy ảnh đầu tiên
    const allSame = clickedImages.every((img) => img === firstImage); // kiểm tra tất cả ảnh có giống nhau không
    console.log(allSame);
    if (allSame) {
        // Nếu tất cả ảnh giống nhau, hiển thị thông báo thành công
        document.getElementById("result").style.display = "block";
    }
  }
}

function handleClickOne() {
  clickedImages[0] = changeImage(0, 0);
  clickCount++;
  checkWin();
}

function handleClickTwo() {
  clickedImages[1] = changeImage(1, 1);
  clickCount++;
  checkWin();
}

function handleClickThree() {
  clickedImages[2] = changeImage(2, 2);
  clickCount++;
  checkWin();
}

function handleClickFour() {
  clickedImages[3] = changeImage(3, 3);
  clickCount++;
  checkWin();
}

function handleClickFive() {
  clickedImages[4] = changeImage(4, 4);
  clickCount++;
  checkWin();
}

function changeImage(elementIndex, imagePartIndex) {
  const imageNames = [
      imgsDB[0][imagePartIndex],
      imgsDB[1][imagePartIndex],
      imgsDB[2][imagePartIndex],
  ];

  for (let i = imageNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageNames[i], imageNames[j]] = [imageNames[j], imageNames[i]];
  }

  const newImageSrc = `./image/${imageNames[0]}`;
  imageElements[elementIndex].src = newImageSrc;
  return newImageSrc;
}

function fiveImageMathRandom() {
  for (let i = 0; i < 5; i++) {
      let var1 = Math.floor(Math.random() * 3);
      let var2 = Math.floor(Math.random() * 5);
      const imageSrc = `./image/${imgsDB[var1][var2]}`;
      imageElements[i].src = imageSrc;
      clickedImages[i] = imageSrc;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fiveImageMathRandom();
});