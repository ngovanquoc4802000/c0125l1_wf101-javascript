var Images = {
  imgsDB:
    [
      ["funny-cat1_part1x1.jpg",
        "funny-cat1_part2x1.jpg",
        "funny-cat1_part3x1.jpg",
        "funny-cat1_part4x1.jpg",
        "funny-cat1_part5x1.jpg"],
      ["monkey_part1x1.jpg",
        "monkey_part2x1.jpg",
        "monkey_part3x1.jpg",
        "monkey_part4x1.jpg",
        "monkey_part5x1.jpg"],
      ["panda_swap_part1x1.jpg",
        "panda_swap_part2x1.jpg",
        "panda_swap_part3x1.jpg",
        "panda_swap_part4x1.jpg",
        "panda_swap_part5x1.jpg"]
    ],
  imgpos: [0, 0, 0, 0, 0],
  imageElements : [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3'),
    document.getElementById('img4'),
    document.getElementById('img5')
  ]
}
const { imgsDB, imgpos,imageElements } = Images;

function fiveImage() {
  for (let i = 0; i < 5; i++) {
    let var1 = Math.floor(Math.random() * 3);
    let var2 = Math.floor(Math.random() * 5);
    /* console.log(imgsDB[var1][0]) */
    imageElements[i].src = `./image/${imgsDB[var1][var2]}`;
   /*  console.log(imageElements[i]) */
  }
}

function shuffle() {
    for(let i = imgsDB.length; i > 0 ;i--) {
       const j = Math.floor(Math.random() * (i + 1));
      [imgsDB[i],imgsDB[j]] = [imgsDB[j],imgsDB[i]];
    } 
}

function display() {
  for(let i = 0; i < imageElements.length;i++) {
    imageElements[i].addEventListener('click',() => {
      imageElements[i].src = shuffle()
    })
  }
}
display()

document.addEventListener('DOMContentLoaded',fiveImage)