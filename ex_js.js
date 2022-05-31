const form = document.querySelector(".todo-form");

const init = () => {
  form.addEventListener("submit", addTodoItem);
};

const addTodoItem = () => {
  event.preventDefault();
  const todoTitle = document.querySelector(".todo-input-title").value;
  const todoContent = document.querySelector(".todo-input-content").value;
  if (todoTitle) printTodoItem(todoTitle, todoContent);
};

const printTodoItem = (title, content) => {
  event.preventDefault();
  const br = document.createElement("br");
  const newTodoBtn = document.createElement('div');

  const newTodoTitle = document.createElement("div");
  newTodoTitle.className = "todobox-title";
  newTodoTitle.innerText = title;

  const newTodoContent = document.createElement("div");
  newTodoContent.className = "todobox-content";
  newTodoContent.innerText = content;
   
  const todoDel = document.createElement('div');
  todoDel.className = 'tododel-button';

  // todo item checkbox 버튼 추가
  const todoCheck = document.createElement('input');
  todoCheck.type = 'checkbox';
  todoCheck.className = 'todoTodone-button';
  todoCheck.addEventListener('click', function () {
    const is_checked = todoCheck.checked;
    if (is_checked) {
      newTodoTitle.style.cssText= 'color: #8b8b8b;';
      newTodoTitle.style.cssText = 'color: #8b8b8b;'
      printDoneItem(title, content);
    } else {
      newTodoTitle.style.cssText = 'color: #8b8b8b;';
      newTodoContent.style.cssText ='color: #8b8b8b;';
    }
    });

  newTodoBtn.appendChild(todoCheck);
  newTodoBtn.appendChild(todoDel);
  // newTodoContent.appendChild(newTodoTitle);
  newTodoTitle.appendChild(newTodoContent);
  
  
  document.querySelector(".todo-list-big").appendChild(newTodoBtn);
  document.querySelector(".todo-list").appendChild(newTodoTitle);
  document.querySelector(".todobox").appendChild(newTodoContent);

  document.querySelector(".todo-input-title").value = "";
  document.querySelector(".todo-input-content").value = "";
};

const printDoneItem = (title, content) => {
  event.preventDefault();
  const newDoneBtn = document.createElement('div');
  const doneCheck = document.createElement('input');
  doneCheck.type = 'checkbox';
  doneCheck.className = 'doneTotodo-button';
  //   const is_checked = todoCheck.checked;
  //   if (is_checked) {
  //     newTodoTitle.style.cssText= 'color: #8b8b8b;';
  //     newTodoTitle.style.cssText = 'color: #8b8b8b;'
  //     printDoneItem(title, content);
  //   } else {
  //     newTodoTitle.style.cssText = 'color: #8b8b8b;';
  //     newTodoContent.style.cssText ='color: #8b8b8b;';
  //   }
    // });


  const doneDel = document.createElement('div');
  doneDel.className = 'donedel-button'

  const newdoneTitle = document.createElement('div');
  newdoneTitle.className = "donebox-title";
  newdoneTitle.innerText = title;

  const newDoneContent = document.createElement('div');
  newDoneContent.className = "donebox-content";
  newDoneContent.innerText = content;


  newDoneBtn.appendChild(DoneCheck);
  newDoneBtn.appendChild(doneDel);

  newdoneTitle.appendChild(newDoneContent);

  document.querySelector('.done-list-big').appendChild(newDoneBtn);
  document.querySelector('.done-list').appendChild(newdoneTitle);

}


init();
