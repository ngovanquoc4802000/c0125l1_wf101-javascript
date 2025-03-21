const ao = "M" // hoặc S , L , XL
const sizeS = "S";
const sizeM = "M";
const sizeL = "L";
const sizeXL = "XL";



switch(ao) {
  case sizeS : console.log("40-50 can")
  break;
  case sizeM : console.log("45-55 can");
  break;
  case sizeL : console.log(">55 can");
  break;
  case sizeXL : console.log(">65can");
  break;
  default: 
  console.log("Khong tim thay so ao nao")
}
