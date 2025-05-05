class Book {
  constructor(bookCode, nameBook, yearOfPublication, numberOfBooks, status) {
    if (!Book.isValidBookCode(bookCode)) {
      console.log("Mã số sách không hợp lệ");
      return;
    }
    this.bookCode = bookCode;

    if (typeof nameBook !== "string" || nameBook.trim() === "") {
      console.log("Tên sách không hợp lệ");
      return;
    }
    this.nameBook = nameBook;

    if (
      typeof yearOfPublication !== "number" ||
      !Number.isInteger(yearOfPublication) ||
      String(yearOfPublication).length !== 4
    ) {
      console.log("Năm xuất bản không hợp lệ");
      return;
    }
    this.yearOfPublication = yearOfPublication;

    if (
      typeof numberOfBooks !== "number" ||
      !Number.isInteger(numberOfBooks) ||
      numberOfBooks < 0
    ) {
      console.log("Số quyển sách không hợp lệ");
      return;
    }
    this.numberOfBooks = numberOfBooks;

    if (typeof status !== "boolean") {
      console.log("Tình trạng không hợp lệ");
      return;
    }
    this.status = status;
  }

 static isValidBookCode(bookCode) {
    if (typeof bookCode !== "string" || bookCode.length !== 5) return false;
    const firstChar = bookCode[0];
    if (!["1", "2", "3", "4", "5"].includes(firstChar)) return false;

    const remainingChars = bookCode.substring(1);
    return /^\d{4}$/.test(remainingChars);
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(bookCode, nameBook, yearOfPublication, numberOfBooks, status) {
    const newBook = new Book(
      bookCode,
      nameBook,
      yearOfPublication,
      numberOfBooks,
      status
    );
    if (!newBook || !newBook.bookCode) {
      console.error("Không thêm được sách. Dữ liệu không hợp lệ.");
      return false;
    }

    this.books.push(newBook);
    this.renderTable();
    return true;
  }

  renderTable() {
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";

    this.books.forEach((book) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.bookCode}</td>
        <td>${book.nameBook}</td>
        <td>${book.yearOfPublication}</td>
        <td>${book.numberOfBooks}</td>
        <td>${book.status ? "Còn" : "Hết"}</td>
      `;
      tbody.appendChild(row);
    });
  }
}
const library = new Library();

library.addBook("23456", "HTML & CSS", 2022, 5, true);

document
  .getElementById("add-new-book-btn")
  .addEventListener("click", function () {
    let bookCode;
    while (true) {
      bookCode = prompt("Nhập mã sách (5 ký tự, bắt đầu bằng 1-5):");
      if (Book.isValidBookCode(bookCode)) break;
      alert("Mã sách không hợp lệ. Vui lòng nhập lại");
    }
    let nameBook;
    while (true) {
      nameBook = prompt("Nhập tên sách:");
      if (typeof nameBook === "string" && nameBook.trim() !== "") break;
      alert("Tên sách không hợp lệ. Vui lòng nhập lại.");
    }
    let year;
    while (true) {
      year = parseInt(prompt("Nhập năm xuất bản 4 chữ số :"));
      if (!isNaN(year) && Number.isInteger(year) && String(year).length === 4)
        break;
      alert("Năm xuất bản không hợp lệ. Vui lòng nhập lại ");
    }
    let number;
    while (true) {
      number = parseInt(prompt("Nhập số lượng sách:"));
      if (!isNaN(number) && Number.isInteger(number) && number >= 0) break;
      alert("Số lượng sách không hợp lệ. Vui lòng nhập lại.");
    }
    let status;
    while (true) {
      const statusInput = prompt(
        "Sách còn hay hết? (true/fals e):"
      ).toLowerCase();
      if (statusInput === "true" || statusInput === "false") {
        status = statusInput === "true";
        break;
      }
      alert("Giá trị tình trạng không hợp lệ. Chỉ nhập true hoặc false.");
    }
    library.addBook(bookCode, nameBook, year, number, status);
  });
