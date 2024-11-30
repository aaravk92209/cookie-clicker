if (!sessionStorage.scoreIncrease) {
  sessionStorage.scoreIncrease = 1;
}

if (!sessionStorage.score) {
  sessionStorage.score = 0;
}

if (!sessionStorage.scorePerSecond) {
  sessionStorage.scorePerSecond = 0;
}

const scoreText = document.getElementById("score");
let score = parseInt(sessionStorage.score);
let scoreIncrease = parseInt(sessionStorage.scoreIncrease);
let scorePerSecond = parseInt(sessionStorage.scorePerSecond);
scoreText.textContent = score;

function increaseScore() {
  score += scoreIncrease;
  scoreText.textContent = score;
  sessionStorage.score = score;
}

function perClick(increase, cost) {
  if (score > cost - 1) {
    score -= cost;
    scoreIncrease += increase;
    sessionStorage.score = score;
    sessionStorage.scoreIncrease = scoreIncrease;
    scoreText.textContent = score;
  }
}

function perSec(increase, cost) {
  if (score > cost - 1) {
    score -= cost;
    scorePerSecond += increase;
    sessionStorage.score = score;
    sessionStorage.scorePerSecond = scorePerSecond;
    scoreText.textContent = score;
  }
}

function Reset() {
  if (window.confirm("Press OK to reset your progress.")) {
    sessionStorage.scorePerSecond = 0;
    sessionStorage.scoreIncrease = 1;
    sessionStorage.score = 0;
    score = parseInt(sessionStorage.score);
    scoreIncrease = parseInt(sessionStorage.scoreIncrease);
    scorePerSecond = parseInt(sessionStorage.scorePerSecond);
    scoreText.textContent = score;
  }
}

function increasePerSec() {
  score += scorePerSecond;
  sessionStorage.score = score;
  scoreText.textContent = score;
}

setInterval(increasePerSec, 1000);
