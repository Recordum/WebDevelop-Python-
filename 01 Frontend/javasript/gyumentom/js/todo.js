const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

let toDos = [];

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();

}


function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newToDoObj.id;
    span.innerText = newToDoObj.text;
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function saveToDos() {
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function handleToDoForm(event) {
    event.preventDefault();

    const newToDoObj={
        text : toDoInput.value,
        id : Date.now(),
    }
    paintToDo(newToDoObj);
    toDos.push(newToDoObj);
    saveToDos();
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoForm);
const savedToDos = localStorage.getItem("todos");
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

