const RANDOMGAME = setInterval(function () {
  // selects a random number between 0 and 1
  function getRandomNumber() {
    return Math.random();
  }

  let numberOfAttempts = 0;

  let randomNumber = getRandomNumber();
  if (randomNumber > 0.75) {
    clearInterval(RANDOMGAME);
    console.log(`${randomNumber} | Number of atttempts: ${numberOfAttempts}`);
    return;
  } else {
    console.log(randomNumber);
    // add 1 to a counter
    numberOfAttempts++;
  }
}, 1000);
