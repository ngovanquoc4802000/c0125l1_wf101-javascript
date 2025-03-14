const form = document.getElementById("wufoo");
const text = document.getElementById("text");

form.addEventListener("submit", (event) => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const radioButtons = document.querySelectorAll('input[name="gender"]');
  event.preventDefault();
  let gender = "";

  for (const radio of radioButtons) {
    /* nếu radio click vào checked thì trỏ đến value đó */
    if (radio.checked) {
      gender = radio.value;
      break;
    }
  }
 /* nếu không phải là name thì phải nhập lại */
  if (!name) {
    text.innerHTML = "<p style='color: red'>Vui lòng nhập họ và tên.</p>";
    return;
  }

  text.innerHTML = `
      <p>Họ và tên: ${name}</p>
      <p>Email: ${email}</p>
      <p>Số điện thoại: ${phone}</p>
      <p>Giới tính: ${gender}</p>
    `;
});
