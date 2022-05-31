
const form = document.querySelector('.todo-form');

var todoNum = 0;
var doneNum = 0;
const printTodonum = () => {
  document.querySelector('.v93_469').innerHTML = '(' + todoNum + ')';
};
const printdonenum = () => {
  document.querySelector('.done-num').innerHTML = '(' + doneNum + ')';
};
const init = () => {
  form.addEventListener('submit', addTodoItem);
  printTodonum();
  printdonenum();
};
const open = () => {
  document.querySelector('.modal').classList.remove('hidden');
};

const close = () => {
  document.querySelector('.modal').classList.add('hidden');
};

const addTodoItem = (color) => {
  event.preventDefault();
  const todoContentTitle = document.querySelector('.todo-input').value;
  const todoContentDetail = document.querySelector('.todo-detail-input').value;
  var a = document.getElementById('a').value;
  console.log(a);
  var todoCate = '';
  if (a == 1) {
    todoCate = '#0032B4';
  } else if (a == 2) {
    todoCate = '#FFC700';
  } else if (a == 3) {
    todoCate = '#3C924A';
  } else if (a == 4) {
    todoCate = '#FF5C00';
  } else {
    todoCate = 'black';
  }

  if (todoContentTitle)
    printTodoItem(todoContentTitle, todoContentDetail, todoCate);
  todoCate = '';
};

// 화면에 todo item을 추가
const printTodoItem = (title, detail, color) => {
  console.log(title, detail, color);
  const newTodo = document.createElement('div');
  const newTodoCate = document.createElement('div');
  const newTodoText = document.createElement('div');
  const newTodoBtn = document.createElement('div');
  const newTodoTitle = document.createElement('span');
  const newTodoDetail = document.createElement('span');
  const br = document.createElement('br');
  const todoCheck = document.createElement('input');
  const todoDel = document.createElement('img');

  // todo item 텍스트 추가
  newTodoTitle.innerText = title;
  newTodoTitle.className = 'todo-item-text';
  newTodoTitle.style.cssText = 'font-size:30px;font-weight: bold;';

  // todo item detail 텍스트 추가
  newTodoDetail.innerText = detail;
  newTodoDetail.className = 'todo-item-detail-text';
  newTodoDetail.style.cssText =
    'color: #8b8b8b;font-weight: Regular;font-size: 20px;';

  // todo item checkbox 버튼 추가
  todoCheck.type = 'checkbox';
  todoCheck.className = 'todo-check-box';
  todoCheck.style.cssText =
    'width: 30px;height: 30px;margin-left:40%;margin-right:10%;margin-top:10%;';
  todoCheck.addEventListener('click', function () {
    const is_checked = todoCheck.checked;
    if (is_checked) {
      newTodoTitle.style.cssText +=
        'text-decoration:line-through;color: #8b8b8b;';
      printDoneItem(title, detail);
      doneNum += 1;
      printdonenum();
    } else {
      newTodoTitle.style.cssText = 'font-size:30px;font-weight: bold;';
      newTodoDetail.style.cssText =
        'color: #8b8b8b;font-weight: Regular;font-size: 20px;';
    }
  });

  // todo item 삭제 버튼 추가
  todoDel.src = 'delete 3.png';
  todoDel.className = 'todo-delete-button';
  todoDel.addEventListener('click', deleteTodoItem);

  newTodoText.appendChild(newTodoTitle);
  newTodoText.appendChild(br);
  newTodoText.appendChild(newTodoDetail);

  newTodoBtn.appendChild(todoCheck);
  newTodoBtn.appendChild(todoDel);
  // li에 item 추가
  newTodo.className = 'todo-list-item';
  newTodo.appendChild(newTodoCate);
  newTodo.appendChild(newTodoText);
  newTodo.appendChild(newTodoBtn);

  //style

  console.log('background-color:' + color);
  newTodo.style.cssText =
    'display: grid;grid-template-columns: 10% 65% 25%;border-radius: 13px;background:#FFFFFF;height:15%;margin-bottom:5%;';
  newTodoCate.style.cssText = 'background-color:' + color;
  newTodoCate.style.cssText +=
    ' margin-top:10%; height: 80%;width: 6%;margin-left: 60%;';

  newTodoText.style.cssText = ' height: 80%;';
  newTodoBtn.style.cssText = 'margin-top:5%;';

  document.querySelector('.todo-list').appendChild(newTodo);
  todoNum += 1;
  printTodonum();
  document.querySelector('.todo-input').value = '';
  document.querySelector('.todo-detail-input').value = '';
};

const deleteTodoItem = (e) => {
  const target = e.target.parentNode.parentNode;
  document.querySelector('.todo-list').removeChild(target);
  todoNum -= 1;
  printTodonum();
};

const printDoneItem = (title, detail) => {
  event.preventDefault();
  const newDone = document.createElement('div');
  const newdoneCate = document.createElement('div');
  const newdoneText = document.createElement('div');
  const newdoneBtn = document.createElement('div');
  const newdoneTitle = document.createElement('span');
  const newdoneDetail = document.createElement('span');
  const brdone = document.createElement('br');
  const donemore = document.createElement('img');

  newdoneTitle.innerText = title;
  newdoneTitle.className = 'done-item-text';

  // todo item detail 텍스트 추가
  newdoneDetail.innerText = detail;
  newdoneDetail.className = 'done-item-detail-text';

  donemore.src = 'dots 1.png';
  donemore.className = 'done-more-button';

  newdoneText.appendChild(newdoneTitle);
  newdoneText.appendChild(brdone);
  newdoneText.appendChild(newdoneDetail);
  newdoneTitle.addEventListener('click', toggleDoneToTodo);

  newdoneBtn.appendChild(donemore);
  // li에 item 추가
  newDone.className = 'done-list-item';
  newDone.appendChild(newdoneCate);
  newDone.appendChild(newdoneText);
  newDone.appendChild(newdoneBtn);

  newDone.style.cssText =
    'display: grid;grid-template-columns: 10% 65% 25%;border-radius: 13px;background:#FFFFFF;height:15%;margin-bottom:5%;';
  newdoneCate.style.cssText =
    ' margin-top:25%; background-color: #0032B4;height: 80%;width: 12%;margin-left: 60%;';
  newdoneText.style.cssText = ' height: 80%;margin-left:4%;';
  newdoneTitle.style.cssText = 'font-size:30px;font-weight: bold;';
  newdoneDetail.style.cssText =
    'color: #8b8b8b;font-weight: Regular;font-size: 20px;';
  newdoneBtn.style.cssText = 'margin-top:30%;';
  donemore.style.cssText = 'margin-left:50%;';

  document.querySelector('.done-list').appendChild(newDone);
};

const toggleDoneToTodo = (e) => {
  deleteDoneItem(e);
};

const deleteDoneItem = (e) => {
  const target = e.target.parentNode.parentNode;
  document.querySelector('.done-list').removeChild(target);
  doneNum -= 1;
  printdonenum();
};

init();

document.querySelector('.todo-input-items').addEventListener('click', open);
document.querySelector('.close-area').addEventListener('click', close);
document.querySelector('.bg').addEventListener('click', close);