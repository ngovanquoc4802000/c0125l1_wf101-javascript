let quoc = new Mobile();
let duong = new Mobile();

function quocSendDuong() {
  let value = document.getElementById("quoc").value;
  quoc.writeMessage(value);
  quoc.sendMessage(duong);
  document.getElementById("quoc").value = ""
 document.getElementById("inbox-duong").innerText = duong.inbox.join("")
}

function duongSendQuoc() {
  let valueDuong = document.getElementById('duong').value;
  duong.writeMessage(valueDuong);
  duong.sendMessage(quoc);
  document.getElementById("duong").value = "";
  document.getElementById("inbox-quoc").innerText = quoc.inbox.join("")
}