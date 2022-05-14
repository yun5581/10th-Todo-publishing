const form = document.querySelector(".todo-form");
const button = document.querySelector(".popup-button");

const init = () => {
  form.addEventListener("submit", addTodoItem);
};

const displayForm = () => {
  //if (form.stlye.display == "none") form.style.display = "block";
  //else form.style.display == "none";
  form.style.display == "block"
    ? (form.style.display = "none")
    : (form.style.display = "block");
};
button.addEventListener("click", displayForm);

const addTodoItem = () => {
  event.preventDefault();
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};

const printTodoItem = (text) => {
  const newTodo = document.createElement("li");
  const newTodoCircle = document.createElement("img");
  const newTodoText = document.createElement("span");
  const todoDel = document.createElement("button");

  newTodoText.innerText = text;
  newTodoText.className = "todo-item-text";

  newTodoCircle.className = "todo-circle";
  newTodoCircle.setAttribute("src", "images/circle_empty.png");
  newTodoCircle.addEventListener("click", toggleTodoToDone);

  todoDel.innerText = "x";
  todoDel.className = "todo-delete-button";
  todoDel.addEventListener("click", deleteTodoItem);

  newTodo.className = "todo-list-item";
  newTodo.appendChild(newTodoCircle);
  newTodo.appendChild(newTodoText);
  newTodo.appendChild(todoDel);

  document.querySelector(".todo-list").appendChild(newTodo);
  document.querySelector(".todo-input").value = "";
};

const deleteTodoItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".todo-list").removeChild(target);
};

const toggleTodoToDone = (e) => {
  deleteTodoItem(e);
  var li = e.target.parentNode;
  var text = li.childNodes[1];
  printDoneItem(text.innerText);
};

const printDoneItem = (text) => {
  const doneItem = document.createElement("li");
  const doneItemCircle = document.createElement("img");
  const doneItemText = document.createElement("span");
  const doneDel = document.createElement("button");

  doneItemText.innerText = text;
  doneItemText.className = "done-item-text";

  doneItemCircle.className = "done-circle";
  doneItemCircle.setAttribute("src", "images/circle_full.png");
  doneItemCircle.addEventListener("click", toggleDoneToTodo);

  doneDel.innerText = "x";
  doneDel.className = "done-delete-button";
  doneDel.addEventListener("click", deleteDoneItem);

  doneItem.className = "done-list-item";
  doneItem.appendChild(doneItemCircle);
  doneItem.appendChild(doneItemText);
  doneItem.appendChild(doneDel);

  document.querySelector(".done-list").appendChild(doneItem);
};

const toggleDoneToTodo = (e) => {
  deleteDoneItem(e);
  var li = e.target.parentNode;
  var text = li.childNodes[1];
  printTodoItem(text.innerText);
};

const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".done-list").removeChild(target);
};

init();
