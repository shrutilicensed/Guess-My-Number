'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';

// console.log(document.querySelector('.guess').value);

// const x = function () {
//   console.log(23);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1; //generating a secret number
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//function to check if guess matches secret number or not
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  //if guess is not made
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  }

  //if guess made is correct
  else if (guess == secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    //setting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayContent(guess > secretNumber ? 'Too high!' : 'Too Low');
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high!' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game :(');
      // document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   //if guess made is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   //if guess made is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//resetting the game except highscore function
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; //generating new secret number
  displayContent('Start Guessing... !');
  // document.querySelector('.message').textContent = 'Start Guessing!'; //replacing too high or too low etc
  document.querySelector('.score').textContent = '20'; //setting initial score back to 20
  document.querySelector('.guess').value = ''; //emptying the input field
  document.querySelector('.number').textContent = '?'; //resetting the placeholder of secret number
  document.querySelector('body').style.backgroundColor = '#222'; //resetting background color
  document.querySelector('.number').style.width = '15rem'; // resetting placeholder's width
});
