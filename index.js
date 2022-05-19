const form = document.querySelector(".todo-form");

const init = () => {
  form.addEventListener("submit", addTodoItem);
};

// 입력된 타이틀을 todo list에 추가
const addTodoTitle= () => {
  event.preventDefault();
  const todoTitle = document.querySelector(".todo-input-title").value;
  if (todoTitle) printTodoItem(todoTitle);
};

// 입력된 내용을 todo list에 추가
const addTodoContent= () => {
  event.preventDefault();
  const todoContent = document.querySelector(".todo-input-content").value;
  if (todoContent) printTodoItem(todoContent);
};

// 화면에 todo item을 추가
const printTodoItem = text => {
    const newTodo = document.createElement("li");
    const newTodoTitle = document.createElement("span");
    const newTodoContent = document.createElement("span");
    const todoDel = document.createElement("button");

  // todo item 텍스트 추가
  newTodoTitle.innerText = text;
  newTodoTitle.className = "todo-item-title";
  newTodoTitle.addEventListener("click", toggleTodoTitleToDone);

  newTodoContent.innerText = text;
  newTodoContent.className = "todo-item-content";
  newTodoContent.addEventListener("click", toggleToContentToDone);

  // todo item 삭제 버튼 추가
  todoDel.innerText = "-"; 
  todoDel.addEventListener("click", deleteTodoItem);

  // li에 item 추가
  newTodo.className = "todo-list-item";
  newTodo.appendChild(newTodoTitle);
  newTodo.appendChild(newTodoContent);
  newTodo.appendChild(todoDel);

  document.querySelector(".todo-list").appendChild(newTodo);
  document.querySelector(".todo-input-title").value = "";
  document.querySelector(".todo-input-content").value = "";
};

const deleteTodoItem = e => {
  const target = e.target.parentNode;
  document.querySelector(".todo-list").removeChild(target);
};

const toggleDoneToTodo = e => {
  deleteDoneItem(e);
  printTodoItem(e.target.innerText);
};


init();