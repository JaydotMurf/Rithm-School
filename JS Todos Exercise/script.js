// global selectors

// this is the button beside the li
const completeButtons = document.querySelectorAll("li button");

// this is the form
const form = document.querySelector("#add-task");

// this is the input bar
const input = document.querySelector("#taskSubmission");

// this is the ul
const toDoList = document.querySelector("#todoList");

form.addEventListener("submit", function (e) {
  // Ensure the submission of the form doesn't refresh the page

  e.preventDefault();
  // console.log(input.value);

  // create new tasks/button pair
  const newTask = document.createElement("li");
  const newCompleteBtn = document.createElement("button");

  // update task text, connect the button to the li, add li to list
  newCompleteBtn.innerText = "Completed ";
  newTask.innerText = input.value + " ";
  newTask.appendChild(newCompleteBtn);
  toDoList.appendChild(newTask);

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
