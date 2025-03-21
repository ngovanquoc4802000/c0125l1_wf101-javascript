var year = parseInt(prompt("Enter a year"));
var isLapYear = false;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  isLapYear = true;
}

if (isLapYear) {
  alert(year + " là năm nhuần");
} else {
  alert(year + " không phải là năm nhuần");
}