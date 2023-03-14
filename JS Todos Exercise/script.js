// global selectors

const completeButtons = document.querySelectorAll("li button");
const form = document.querySelector("#add-task");
const input = document.querySelector("#taskSubmission");
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

// cross out the li once task completed, if task completed, remove
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
