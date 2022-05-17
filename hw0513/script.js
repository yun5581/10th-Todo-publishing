const form = document.querySelector("form");
const btn = document.querySelector(".plus");
const date = document.querySelector(".current_date")

// const toDo = document.querySelector(".todoList");
// const done = document.querySelector(".doneList");

const init = () => {
    form.addEventListener("submit", addTodoItem);

}

const addTodoItem = () => {
    event.preventDefault();
    const todoContent = document.querySelector(".todoInput").value;
    if (todoContent) printTodoItem(todoContent);
};

// to do list 
const printTodoItem = text => {
    const newTodo = document.createElement("li");
    const checkBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    checkBtn.innerHTML = '<img src="image/checkbox.png">';
    deleteBtn.innerHTML = '<img src="image/delete.png">';

    checkBtn.className = checkBtn;
    deleteBtn.className = deleteBtn;

    // input -> to do list로 이동
    newTodo.innerText = text;

    // newTodo에 자식 요소 추가
    newTodo.appendChild(deleteBtn);
    newTodo.appendChild(checkBtn);

    // html과 js 연결 과정. newTodo를 html의 todoList의 자식 요소로 추가
    document.querySelector(".todoList").appendChild(newTodo);
    document.querySelector(".todoInput").value = ''; // input content 초기화

    //delete button에 대한 event 추가
    deleteBtn.addEventListener("click", deleteTodoItem);

    //check button에 대한 event 추가
    checkBtn.addEventListener("click", toggleTodo2Done);
};

// to do list의 item 삭제
const deleteTodoItem = e => {
    const target = e.target.parentNode.parentNode; // target: img -> button -> li
    document.querySelector(".todoList").removeChild(target);
};

const deleteDoneItem = e => {
    const target = e.target.parentNode.parentNode; // target: img -> button -> li
    document.querySelector(".doneList").removeChild(target);
}

// to do list -> done List
const toggleTodo2Done = e => {
    // (1) to do list에서 삭제
    deleteTodoItem(e);
    // (2) done list에 추가
    const parent = e.target.parentNode.parentNode; // target: img -> button -> li
    printDoneItem(parent.innerText); // li의 innertext를 done에 대입
}

// done list
const printDoneItem = text => {
    const doneItem = document.createElement("li");
    const checkBtn = document.createElement("button");

    checkBtn.innerHTML = '<img src="image/donebox.png">';

    // to do list -> done list 이동
    doneItem.innerText = text;
    // doneItem에 자식 요소 추가
    doneItem.appendChild(checkBtn);
    // html과의 연결 과정 -> doneList에 doneItem을 자식 요소로 추가
    document.querySelector(".doneList").appendChild(doneItem);

    checkBtn.addEventListener("click",toggleDone2Todo);
}

const toggleDone2Todo = e => {
    // (1) done List에서 삭제
    deleteDoneItem(e);
    /// (2) to do List에 추가
    const parent = e.target.parentNode.parentNode;
    printTodoItem(parent.innerText);
}

// popup box 영역
const displayForm = () => {
    console.log(form.style.disply);
    if(form.style.display == "block"){
        form.style.display = "none";
    } else{
        form.style.display = "block";
    }

};

btn.addEventListener("click",displayForm);

// today date 함수
const currentDate = () => {
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    
    console.log(month);

    switch(month){
        case 1:
            month = "Jan";
            break;
        case 2:
            month = "Feb";
            break;
        case 3:
            month = "Mar";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "Jun";
            break;            
        default:
            month = "어차피 5월일텐데 머.. 어쩔";
        
    }
    date.innerHTML = month + " " + day + ", " + year;
}

init(); // 시작 함수
currentDate();

