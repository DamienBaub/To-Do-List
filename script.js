const inputTextBox = document.getElementById("input-text-box");
const listContainer = document.getElementById("list-container");

function addTodo() {
  if(inputTextBox.value === '') {
    alert("Please add a To-Do");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputTextBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputTextBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData(); // Save the data when a to-do is checked/unchecked
  } else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData(); // Save the data after deleting a to-do
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

loadData();
