const todolist = document.querySelector('.todolist-menu');
const addTodo = document.querySelector('.add-todo');
const addInput = document.querySelector('.add-input');
const close = document.getElementsByClassName('trash-icon');
const TODOS_STORAGE_KEY = "TODOS-APPS";

const init = {
    todos:[]
}


var i = 0;
for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
        var div = this.parentElement;
        div.style.display = 'none';
    })
}

todolist.addEventListener('click', function (event) {
    if (event.target.className === 'todolist-item'){
        event.target.className = 'todolist-item checked';
    }
    else if(event.target.className === 'todolist-item checked'){
        event.target.className = 'todolist-item';
    }
}, false);

addTodo.addEventListener('click', function() {
    addTodo.style.display = 'none';
    addInput.style.display = 'block';
})

function newTask() {
    var myInput = addInput.value.trim();
    const html = `
        <li class="todolist-item">
            <i class="far fa-trash-alt trash-icon"></i>
            ${myInput}
        </li>
    `
    if (myInput === '') {
        addTodo.style.display = 'block';
        addInput.style.display = 'none';
    }
    else {
        todolist.innerHTML = html + todolist.innerHTML;
        localStorage.setItem(TODOS_STORAGE_KEY, addInput.value);
        init.todos.push(localStorage.getItem(TODOS_STORAGE_KEY));
    }
    addInput.value = "";
    addTodo.style.display = 'block';
    addInput.style.display = 'none';
    var i = 0;
    for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
        var div = this.parentElement;
        div.style.display = 'none';
    })
}
}

addInput.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        newTask();
    }else{
        return;
    }
})

console.log(init.todos)