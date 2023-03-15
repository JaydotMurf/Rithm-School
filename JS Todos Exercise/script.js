// global selectors

const completeButtons = document.querySelectorAll("li button");
const form = document.querySelector("#add-task");
const input = document.querySelector("#taskSubmission");
const toDoList = document.querySelector("#todoList");

form.addEventListener("submit", function (e) {
  // Ensure the submission of the form doesn't refresh the page
  e.preventDefault();

  let taskValue = input.value.trim();

  //   console.log(taskValue);

  // console.log(input.value);

  // create new tasks/button pair and append to the list
  createAndAppendTask(input.value.trim());

  // Save the task to local storage
  if (input.value.trim !== "") {
    // stringify tasks
    localStorage.setItem("tasks", JSON.stringify(taskValue));
    // const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // tasks.push(input.value.trim());
  }
  // reset input value
  input.value = "";
});

// crosss out the li once task completed, if task completed, remove
toDoList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    if (e.target.parentElement.classList.contains("completed-Task")) {
      e.target.parentElement.remove();
    } else {
      e.target.parentElement.classList.add("completed-Task");
      e.target.innerText = "Remove";
    }
  }
});

window.addEventListener("DOMContentLoaded", function () {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  // check if tasks is not null or undefined before calling forEach()
  tasks.forEach((task) => createAndAppendTask(task));
});

// Function to create and append tasks
function createAndAppendTask(taskText) {
  const newTask = document.createElement("li");
  const newCompleteBtn = document.createElement("button");

  newCompleteBtn.innerText = "Completed ";
  newTask.innerText = taskText + " ";

  newTask.appendChild(newCompleteBtn);
  toDoList.appendChild(newTask);
}
