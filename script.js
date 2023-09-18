const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list");
function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    todoList.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  saveData();
}
todoList.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("todoList", todoList.innerHTML);
}
function loadData() {
  todoList.innerHTML = localStorage.getItem("todoList");
}
loadData();
