let taskInput = document.querySelector('#taskInput');
let addButton = document.querySelector('#addBtn');
let taskCounter = document.querySelector('#taskCounter');
let taskList = document.querySelector('#taskList');

function updateCounter() {
    let count = taskList.querySelectorAll("li").length;
    taskCounter.textContent = count;
}

function addTask() {
    let text = taskInput.value.trim();

    if (text === "") {
        alert("Enter your task");
        return;
    }

    let li = document.createElement('li');
    li.classList.add('task');

    let span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = text;

    let doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener("click", function () {
        li.classList.toggle('done');
    });

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', function () {
        let newText = prompt('Change your task', span.textContent);

        if (newText === null) {
            return;
        }

        if (newText.trim() === "") {
            alert('invalid ty 2');
            return;
        }

        span.textContent = newText.trim();
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function () {
        let answer = confirm('Are yoy sure you want to delete this?');

        if (answer === true) {
            li.remove();
            updateCounter();
        }
    });

    li.append(span, doneButton, editButton, deleteButton);
    taskList.append(li);

    taskInput.value = '';
    updateCounter();
}

addButton.addEventListener('click', addTask);
