let count = 2;
const array = [];

function addList() {
  const tbody = document.getElementById("tbody");
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += `
      <tr>
          <td id="classis-id-${i}">${array[i].id}</td>
          <td id="classis-name-${i}">${array[i].name}</td>
          <td id="classis-price-${i}">${array[i].price}</td>
          <td id="classis-number-${i}">${array[i].number}</td>
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
  let id = document.getElementById("idCategory").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let number = document.getElementById("number").value;
  let newArray = {
    id: id,
    name: name,
    price: price,
    number,
  };
  array.unshift(newArray);
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
  const input = document.getElementById(`updateInput-${index}`).value;

  if (input !== "") {
    array[index] = input;
    addList();
  }
}

function cancelUpdate() {
  addList();
}

function handleDelete(index) {
  array.splice(index, 1);
  count--;
  addList();
}
