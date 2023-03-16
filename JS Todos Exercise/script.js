// global selectors

const completedButton = document.querySelectorAll('li > button');
const taskForm = document.querySelector('#add-task');
const taskInput = document.querySelector('input[type="text"]');
const toDoList = document.querySelector('#todoList');

// global vars
const completed = 'Completed';

// add event listener to taskInput
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(taskInput.value);

  const taskName = taskInput.value.trim();

  createTaskAndButton(taskName);

  taskInput.value = '';
});

function createTaskAndButton(taskValue) {
  const taskLi = document.createElement('Li');
  const taskBtn = document.createElement('Button');

  taskLi.innerText = taskValue;
  taskBtn.innerText = completed;

  taskLi.append(taskBtn);
  toDoList.append(taskLi);
}

// completedButton is a NodeList, which is a collection of elements
// so you need to loop through the completedButton NodeList and add the event listener to each individual button element:

toDoList.addEventListener('click', function (e) {
  //   console.log(e);
  const button = e.target;
  if (button === 'BUTTON');
  {
    if (button.parentElement.classList.contains('completed-Task')) {
      button.parentElement.remove();
    }
  }
  button.parentElement.classList.add('completed-Task');
});
