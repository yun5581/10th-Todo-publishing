//월 가져오기 
let date = new Date();   
let month = document.querySelector(".month");
month.innerText = date.getMonth() + 1;  

//일 가져오기
let day = document.querySelector(".day");
day.innerText = date.getDate(); 

//요일 가져오기 Date().getDay() 반환값 0~6 (일~토)에 맞는 요일 반환하는 getToday 함수
let today = document.querySelector(".today");
today.innerText = getToday();
function getToday(){ 
    var week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']; 
    var dayOfWeek = week[date.getDay()];
        return dayOfWeek;
};

const init = () => {
    form.addEventListener("submit", addTodoItem);
};
//할 일 입력창을 숨겨두었다가 popup 버튼 누르면 나타나게 하기
const form = document.querySelector(".todo-form");
const displayForm = ()=>{ 
    if (form.style.display == "block")
        form.style.display = "none";
    else form.style.display = "block";
};
const button = document.querySelector(".popup-button");
button.addEventListener("click",displayForm);

// 입력된 값을 todo list에 추가
const addTodoItem = () => {
    event.preventDefault(); //새로 고침 방지
    const todoContent = document.querySelector(".todo-input").value;
    if (todoContent) printTodoItem(todoContent);
};

// 화면에 todo item을 추가
const printTodoItem = text => {
    const newTodo = document.createElement("li");
    const todoCheck = document.createElement("button");
    const newTodoText = document.createElement("span");
    const todoDel = document.createElement("IMG");
    todoDel.setAttribute("src", "delete.svg");
    
    // todo item 텍스트 추가
    newTodoText.innerText = text;
    newTodoText.className = "todo-item-text";
    newTodoText.addEventListener("click", toggleTodoToDone); //toggleTodoToDone 아래에서 만들기

    // todo check 버튼 추가
    todoCheck.className = "todo-check-button";
    todoCheck.addEventListener("click", checkTodo);
    // checkIcon.addEventListener("click",checkTodoItem);

    // todo item 삭제 버튼 추가
    todoDel.className = "todo-delete-button";
    todoDel.addEventListener("click", deleteTodoItem); //deleteTodoItem 아래에서 만들기
    // li에 item 추가
    newTodo.className = "todo-list-item"; //todo li 태그에 class명 부여
    newTodo.appendChild(newTodoText); //todo li에 자식요소로 span태그 넣기
    newTodo.appendChild(todoDel); //todo li에 자식요소로 삭제버튼 넣기 
    newTodo.appendChild(todoCheck);

    document.querySelector(".todo-list").appendChild(newTodo); //ul에 자식 요소로 li 넣기
    document.querySelector(".todo-input").value = ""; //input 받는 곳에 계속 남아있지 않도록 비우기
};

// check 누르면, check icon 추가, 글자색 변경
const checkTodo = () =>{
    //chekc icon 생성
    const checkIcon = document.createElement("IMG");
    checkIcon.setAttribute("src","check.png");
    checkIcon.className = "todo-check-icon";
    //todo-list-item li에 자식 요소로 icon 넣기
    listItem = document.querySelector(".todo-list-item");
    listItem.appendChild(checkIcon);
    //todo-item-text 색상 변경
    listText = document.querySelector(".todo-item-text");
    listText.style.color = "#0200764A";
    //check-icon 누르면, check 해제
    checkIcon.addEventListener("click",uncheckTodo);
};
//check-icon 누르면, 삭제, todo-item-tex 색상변경
const uncheckTodo = e =>{
    const checkIcon = e.target;
    document.querySelector(".todo-check-icon").remove(checkIcon);
    listText = document.querySelector(".todo-item-text");
    listText.style.color = "#020076";
};

//todo 삭제 버튼 누르면, list 삭제
const deleteTodoItem = e => { 
    const target = e.target.parentNode; //클릭된 삭제 버튼의 parent인 li 태그로 올라감
    document.querySelector(".todo-list").removeChild(target); //li 태그의 하위, span, button 삭제
};

//todolist에 있는 것을 클릭하면 donelist로 옮겨줌
const toggleTodoToDone = e => { //e는 함수 생성에 이용되는 매개변수
    // todo List 에서 item 삭제
    deleteTodoItem(e);
    // done list에 item 추가
    printDoneItem(e.target.innerText);  //printDoneItem 아래에서 만들기
}; //e.target == 이벤트가 발생한 태그(클릭 받은 태그)

//done list 만들기
const printDoneItem = (text) => {
    //ul 자식요소인 li, span 추가함
    const newDone = document.createElement('li');
    const newTodoText = document.createElement('span'); //todo li에서 span 안에 들어간 text를 받아옴

    newTodoText.innerText = text; //todo의 inner text를 받아옴
    newTodoText.className = 'done-item-text'; //done으로 class명 지정
    newTodoText.addEventListener('click', toggleDoneToTodo); //done list 클릭하면 done->todo로 옮겨주는 함수 만들기

    // done-list의 li에 text 넣어줌 (span)
    newDone.className = 'done-list-item';
    newDone.appendChild(newTodoText);

    //done-list에 만들어준 newdone(li)를 넣어줌 
    document.querySelector('.done-list').appendChild(newDone);
    };

    //done 목록 누르는 event가 있으면 done에서 삭제하고, todo에서 나타나게함
    const toggleDoneToTodo = (e) => { 
        deleteDoneItem(e);
        printTodoItem(e.target.innerText); //눌러진 (이벤트 발생) 목록의 innertext를 todo에 넣음
    };

    //done 목록 누르는 event 있으면 done에서 삭제
    const deleteDoneItem = (e) => {
        const target = e.target.parentNode; //눌러진 target (span)의 부모 요소(Li)로 올라감 
        document.querySelector('.done-list').removeChild(target); // li의 자식요소인 span 삭제
    };

init();