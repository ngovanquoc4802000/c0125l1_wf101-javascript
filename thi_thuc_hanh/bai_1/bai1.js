/* 
câu 1: Nhập từ bàn phím mảng số nguyên gồm n phần tử (n<=50), Hiển thị ra màn hình 
trung bình cộng các số lẻ ở vị trí chẵn
*/

function calculateAverage(numbers) {
  let sum = 0;
  let count = 0;
  let average = 0;
  let oddNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    const isEven = i % 2 === 0;
    const isOdd = number % 2 !== 0;

    if (isEven && isOdd) {
      sum += numbers[i];
      count++;
      oddNumbers.push(number);
    }
  }
  if (count > 0) {
    average = sum / count;
  }
  return {
    sum: sum,
    count: count,
    average: average,
    numbersFound: oddNumbers,
  };
}

function displayResult(calculationResult, resultElement) {
  if (calculationResult.count === 0) {
    resultElement.textContent =
      "Không tìm thấy số lẻ nào ở vị trí chẵn trong mảng.";
  } else {
    const calculationExample = `(${calculationResult.numbersFound.join(
      " + "
    )}) / ${calculationResult.count} = ${calculationResult.average}`;
    resultElement.innerHTML = `Trung bình cộng các số lẻ ở vị trí chẵn là: <strong>${calculationResult.average}</strong><br>Ví dụ: ${calculationExample}`;
  }
}

document.getElementById("calculateBtn").addEventListener("click", function () {
  const inputString = document.getElementById("arrayInput").value;
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("error");

  const numbers = inputString.split(",").map((item) => parseInt(item, 10));

  if (numbers.length > 50) {
    resultDiv.textContent = "Lỗi: Mảng có quá 50 phần tử.";
    return;
  }
  const calculationResult = calculateAverage(numbers);

  displayResult(calculationResult, resultDiv);
});
