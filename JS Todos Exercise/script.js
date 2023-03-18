const form = document.querySelector('#taskForm');
const input = document.querySelector('#taskInput');
const submit = document.querySelector('#submitButton');
const list = document.querySelector('#taskList');
const completeAll = document.querySelector('#completeAllButton');

// I have to refactor code get this to work porperly
window.addEventListener('load', function (e) {
  // Retrieve all the task items from Local Storage and create task elements
  const taskItems = getTaskItemsFromLocalStorage();
  if (taskItems) {
    console.log(taskItems);
    // taskItems.forEach((taskItem) => {
    //   createTaskElement(taskItem.name, taskItem.completed);
    // });
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // console.log(e);
  const taskName = input.value.trim();

  const taskObject = {
    name: `${taskName}`,
    completed: 'false',
  };

  // Generate a unique key name for the task item
  const taskId = `task_${taskName}`;

  createTaskElement();

  // Save task item to Local Storage with the generated key name
  localStorage.setItem(taskId, JSON.stringify(taskObject));
});

list.addEventListener('click', function (e) {
  if ((e.target = 'LI')) {
    if (!e.target.classList.contains('completed')) {
      console.log(e);
      e.target.classList.add('completed');

      // Get the task object for the clicked list item from Local Storage
      // console.log(
      //   JSON.parse(localStorage.getItem(`task_${e.target.innerText}`))
      // );

      // Get the task object for the clicked list item from Local Storage
      const taskId = `task_${e.target.innerText}`;
      // console.log(taskId);
      const taskObject = JSON.parse(
        localStorage.getItem(`task_${e.target.innerText}`)
      );

      // Update the completed value in the task object
      taskObject.completed = 'true';

      // Save the updated task object to Local Storage
      localStorage.setItem(taskId, JSON.stringify(taskObject));
    } else {
      // Remove a key/value pair from Local Storage
      localStorage.removeItem(`task_${e.target.innerText}`);

      // this will remove the element from the document.
      // support for all browers, including IE
      e.target.parentNode.removeChild(e.target);
    }
  }
});

completeAll.addEventListener('click', function (e) {
  list.innerHTML = '';
  localStorage.clear();
});

function createTaskElement() {
  // create core elements
  const task = document.createElement('Li');
  const taskText = input.value.trim();

  // modify Li and Button
  task.innerText = taskText;
  task.classList.add('listItem');

  //   add task to list
  list.append(task);

  input.value = '';
}

function getTaskItemsFromLocalStorage() {
  const taskItems = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('task_')) {
      const taskObject = JSON.parse(localStorage.getItem(key));
      taskItems.push(taskObject);
    }
  }
  return taskItems;
}
