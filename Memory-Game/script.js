// * Global Selectors
// TODO: Impement the reset button functionality

const gameContainer = document.getElementById('game');
const timer = document.querySelector('#timer');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
// const flipped = document.querySelector('.flipped');

// * Global Vars

let cardFlipCounter = 0;
let clockCounter = 0;
let flipCounter = 0;
let card1 = null;
let card2 = null;

const backgroundImageUrl = 'div-background.png';

const COLORS = [
  'red',
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'blue',
  'green',
  'orange',
  'purple',
];

// * Creating a shuffle helper function based on the Fisher-Yates algorithm
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// * Creating a createDivsForColors function that creates a new div element for each color in the shuffledColors array, gives it a class based on the color, and adds an event listener for the click event.
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement('div');

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // set the background image of the div
    // newDiv.style.backgroundImage = `url(${backgroundImageUrl})`;

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener('click', handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!

// * Game wont start until start button is clicked
gameContainer.style.pointerEvents = 'none';

// * Adding a click event listener to the start button that enables pointer events on the gameContainer and sets the timer to increment by 1 second.
start.addEventListener('click', function () {
  gameContainer.style.pointerEvents = 'auto';
  // set the the timer to increment by 1 sec
  // ! Set setInterval as a global var inorder to use clearInterval after game is won
  setInterval(function () {
    timer.innerHTML = 'Timer : ' + clockCounter++;
  }, 1000);
});

// * Create a handleCardClick function that flips cards and checks for matches.
function handleCardClick(event) {
  flipCounter++;

  // * you can use event.target to see which element was clicked
  console.log('you just clicked', event.target);

  // * If it's the first card flipped, set it to card1 and remove the event listener.
  if (flipCounter === 1) {
    card1 = event.target;
    card1.style.backgroundColor = event.target.classList[0];
    card1.classList.add('flipped');
    card1.removeEventListener('click', handleCardClick);
  }
  // * If it's the second card flipped, set it to card2 and remove the event listener.
  else {
    document.getElementById('game').style.pointerEvents = 'none';
    card2 = event.target;
    card2.style.backgroundColor = event.target.classList[0];
    card2.classList.add('flipped');
    card2.removeEventListener('click', handleCardClick);

    // * If the two cards match, add the match class, increment cardFlipCounter, and add back the event listeners to the cards.
    if (card1.className === card2.className) {
      cardFlipCounter += 2;
      card1.classList.add('match');
      card2.classList.add('match');
      console.log(card1, card2);
      card1.addEventListener('click', handleCardClick);
      card2.addEventListener('click', handleCardClick);

      // * Then set card1 and card2 to null, flipCounter to 0, and enable pointer events on the gameContainer.
      card1 = null;
      card2 = null;
      flipCounter = 0;
      document.getElementById('game').style.pointerEvents = 'auto';
    }
    // * If the two cards don't match, remove the flipped class, set card1 and card2 to null, flipCounter to 0, and enable pointer events on the gameContainer.
    else {
      setTimeout(function () {
        card1.style.backgroundColor = '';
        card2.style.backgroundColor = '';
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1 = null;
        card2 = null;
        document.getElementById('game').style.pointerEvents = 'auto';
        flipCounter = 0;
      }, 500);
      card1.addEventListener('click', handleCardClick);
      card2.addEventListener('click', handleCardClick);
    }
  }
  // * If all cards have been flipped, display a congratulatory message and set the timer to 0.
  if (cardFlipCounter === 10) {
    setTimeout(function () {
      alert(`You've matched all the cards. Congratulations!`);
      timer = 0;
    }, 200);
  }
}

// * When the DOM loads, call the createDivsForColors function to set up the game.
createDivsForColors(shuffledColors);
