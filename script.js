let randomNumber = 12; //Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessVal = Number(document.querySelector('.guess').value);
  console.log(guessVal);
  if (!guessVal) {
    document.querySelector('.message').textContent = '⛔️ No Number';
  } else if (guessVal === randomNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number';
    document.querySelector('.number').textContent = guessVal;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessVal > randomNumber) {
    document.querySelector('.message').textContent = 'Big Number';
    score--;
    document.querySelector('.score').textContent = score;
    if (score <= 0) {
      document.querySelector('.message').textContent = 'Game Over!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessVal < randomNumber) {
    document.querySelector('.message').textContent = 'Smaller Number';
    score--;
    document.querySelector('.score').textContent = score;
    if (score <= 0) {
      document.querySelector('.message').textContent = 'Game Over!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.playAgain').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
