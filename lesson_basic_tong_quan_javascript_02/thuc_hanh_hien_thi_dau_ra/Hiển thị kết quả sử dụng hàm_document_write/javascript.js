const selectElement = document.getElementById("select");
const text = document.getElementById("text");


const showSelect = () => {

  const selectedValue = selectElement.value;
  
  text.innerHTML =`<h4 class="show-text">${selectedValue}</h4>` ;
  
  console.log(selectedValue); 
}

selectElement.addEventListener("change",() => {
   showSelect();
});