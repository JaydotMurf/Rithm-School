// Global selectors
const button = document.getElementById("countdown-button");
const input = document.getElementById("countdown-input");

// retrieve the value of the text box and convert it to an integer using parseInt.
function countDown() {
  let time = parseInt(input.value);

  const countdownInterval = setInterval(function () {
    if (time <= 0) {
      // clear the interval if it has reached 0
      clearInterval(countdownInterval);
      input.value = "Done!";
      return;
    }
    input.value = time;
    time--;
  }, 1000);
}

button.addEventListener("click", countDown);
