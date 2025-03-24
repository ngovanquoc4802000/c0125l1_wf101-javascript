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

function handleClickOne() {
  const imageNames = [
    imgsDB[0][0], // "funny-cat1_part1x1.jpg"
    imgsDB[1][0], // "monkey_part1x1.jpg"
    imgsDB[2][0], // "panda_swap_part1x1.jpg"
  ];
  for (let i = imageNames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageNames[i], imageNames[j]] = [imageNames[j], imageNames[i]];
  }
  for (let i = 0; i < 3; i++) {
    imageElements[0].src = `./image/${imageNames[i]}`;
  }
}
function handleClickTwo() {
  const imageNamesTwo = [
    imgsDB[0][1], // "funny-cat1_part2x1.jpg"
    imgsDB[1][1], // "monkey_part2x1.jpg"
    imgsDB[2][1], // "panda_swap_part2x1.jpg"
  ];
  for (let i = imageNamesTwo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageNamesTwo[i], imageNamesTwo[j]] = [imageNamesTwo[j], imageNamesTwo[i]];
  }
  for (let i = 0; i < 3; i++) {
    imageElements[1].src = `./image/${imageNamesTwo[i]}`;
  }
}
function handleClickThree() {
  const imageNamesThree = [imgsDB[0][2], imgsDB[1][2], imgsDB[2][2]];
  for (let i = imageNamesThree.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageNamesThree[i], imageNamesThree[j]] = [
      imageNamesThree[j],
      imageNamesThree[i],
    ];
  }
  for (let i = 0; i < 3; i++) {
    imageElements[2].src = `./image/${imageNamesThree[i]}`;
  }
}
function handleClickFour() {
  const imageNamesFour = [imgsDB[0][3], imgsDB[1][3], imgsDB[2][3]];
  for (let i = imageNamesFour.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageNamesFour[i], imageNamesFour[j]] = [
      imageNamesFour[j],
      imageNamesFour[i],
    ];
  }
  for (let i = 0; i < 3; i++) {
    imageElements[3].src = `./image/${imageNamesFour[i]}`;
  }
}
function handleClickFive() {
  const imageNamesFive = [imgsDB[0][4], imgsDB[1][4], imgsDB[2][4]];
  for (let i = imageNamesFive.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageNamesFive[i], imageNamesFive[j]] = [
      imageNamesFive[j],
      imageNamesFive[i],
    ];
  }
  for (let i = 0; i < 3; i++) {
    imageElements[4].src = `./image/${imageNamesFive[i]}`;
  }
}
function fiveImageMathRandom() {
  for (let i = 0; i < 5; i++) {
    let var1 = Math.floor(Math.random() * 3);
    let var2 = Math.floor(Math.random() * 5);
   const imageSrc = `./image/${imgsDB[var1][var2]}`
    imageElements[i].src = imageSrc;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  fiveImageMathRandom();
});
