let count = 2;
const array = ["Sony Xperia", "Samsung Galaxy"];

function addList() {
  const tbody = document.getElementById("tbody");
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += `
      <tr>
        <td id="classis-${i}">${array[i]}</td>
        <td>
          <button onClick="startUpdate(${i})" class="edit">Sửa</button>
          <button onClick="handleDelete(${i})" class="delete">Xóa</button>
        </td>
      </tr>
    `;
  }
  tbody.innerHTML = result;
  document.getElementById("countPrice").textContent = count;
}

addList();

function createList() {
  let text = document.getElementById("textCreate").value;
  array.unshift(text);
  count++;
  addList();
  return text;
}

function startUpdate(index) {
  const cell = document.getElementById(`classis-${index}`);
  const currentValue = array[index];
  cell.innerHTML = `
    <input id="updateInput-${index}" type="text" value="${currentValue}" />
    <button onClick="saveUpdate(${index})">Save</button>
    <button onClick="cancelUpdate()">Cancel</button>
  `;
}

function saveUpdate(index) {
  const input = document.getElementById(`updateInput-${index}`).value.trim(); // Lấy giá trị và loại bỏ khoảng trắng

  if (input !== "") {
    array[index] = input;
    addList();
  }
}

function cancelUpdate() {
  addList(); // Re-render the list to cancel the update
}

function handleDelete(index) {
  array.splice(index, 1);
  count--;
  addList();
}