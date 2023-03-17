// GLOBAL SELECTORS

const completedButton = document.querySelectorAll('li > button');
const removeAllButton = document.querySelector('#removeAllButton');
const taskForm = document.querySelector('#add-task');
const taskInput = document.querySelector('input[type="text"]');
const toDoList = document.querySelector('#todoList');

// EVENT LISTENERS
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  //   console.log(taskInput.value);

  const taskName = taskInput.value.trim();

  createTaskAndButton(taskName);

  taskInput.value = '';
});

toDoList.addEventListener('click', function (e) {
  const target = e.target;
  if (target === 'BUTTON');
  {
    if (target.parentElement.classList.contains('completed-Task')) {
      target.parentElement.remove();
    }
  }
  target.parentElement.classList.add('completed-Task');
  target.innerText = 'Remove';
  console.log(e);

  // Update task in local storage
  let tasks = getTasksFromLocalStorage();
  const taskIndex = tasks.indexOf(target.parentElement.innerText);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
  } else {
    tasks.push(target.parentElement.innerText);
  }
  saveTasksToLocalStorage(tasks);
});

removeAllButton.addEventListener('click', function (e) {
  clearAll();
});

document.addEventListener('DOMContentLoaded', function () {
  let tasks = getTasksFromLocalStorage();
  toDoList.innerHTML = ''; // clear existing tasks
  tasks.forEach((task) => {
    createTaskAndButton(task);
  });
});

// FUNCTIONS
function createTaskAndButton(taskValue) {
  const taskLi = document.createElement('Li');
  const taskBtn = document.createElement('Button');
  const completed = 'Completed';

  taskLi.innerText = taskValue;
  taskBtn.innerText = completed;
  taskLi.append(taskBtn);
  toDoList.append(taskLi);

  // Add task to local storage
  let tasks = getTasksFromLocalStorage();
  if (!tasks.includes(taskValue)) {
    tasks.push(taskValue);
    saveTasksToLocalStorage(tasks);
  }
}

// retrieve tasks from local storage
function getTasksFromLocalStorage() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
}

// function to save tasks to local storage
function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearAll() {
  localStorage.clear();
  toDoList.innerText = '';
  //   toDoList.innerHTML = null;
}
