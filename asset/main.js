import storage from "./storage.js";
const todolist = document.querySelector('.todolist-menu');
const addTodo = document.querySelector('.add-todo');
const addInput = document.querySelector('.add-input');
const close = document.getElementsByClassName('trash-icon');

const init = {
    todos:storage.get()
}
console.log(storage.get())

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

function render() {
    const html = init.todos.map(todo =>
        `
        <li class="todolist-item">
        <i class="far fa-trash-alt trash-icon"></i>
        <i class="fas fa-edit edit-icon"></i>
                ${todo}
                </li>
                `
                ).join('');
    todolist.innerHTML = html;
}
render();

function newTask() {
    var myInput = addInput.value.trim();
    if (myInput != '') {
        init.todos.unshift(myInput);
    }
    addInput.value = "";
    addTodo.style.display = 'block';
    addInput.style.display = 'none';
}

var closes = [...close];
closes.forEach((clo, index) => {
    clo.addEventListener('click', function() {
        console.log(index);
        // init.todos.splice(index, 1);
        // storage.set(init.todos);
        // render();
    })
})

addInput.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        newTask();
        storage.set(init.todos);
        render();
    }else{
        return;
    }
})


console.log(init.todos)