"use strict";

// let secretNumber = Math.trync(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const x=function(){
//   console.log(document.querySelector('.guess').value);
// }

let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = '?';

let currentScore = 20;
let highScore = 0;
const winVideo = document.getElementById("winVideo");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no imput
  if (!guess) {
    document.querySelector(".message").textContent = "⛔No Number Entered";

    //when player wins
  } else if (guess === secretNumber) {
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".message").textContent = "🥳🎉Correct Number!";
    highScore = currentScore;
    // document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("h1").style.border = "1px";

    winVideo.style.display = "none";

    //when number is too high
  } else if (guess > secretNumber) {
    if (currentScore > 1) {
      document.querySelector(".message").textContent = "☹️Too High";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      document.querySelector(".message").textContent = "🥴You Lost The Game";
      document.querySelector(".score").textContent = 0;
      winVideo.style.display = "block";
      winVideo.play();
    }

    //when number is too low
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      document.querySelector(".message").textContent = "☹️Too Low";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      document.querySelector(".message").textContent = "🥴You Lost The Game";
      document.querySelector(".score").textContent = 0;
      winVideo.style.display = "block";
      winVideo.play();
    }
  }
});

document
  .querySelector(".again")
  .addEventListener(".click", function myFunction() {
    console.log("hii");
    currentScore = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector(".message").textContent = "Start Guessing 🧐👀";
    document.querySelector(".score").textContent = currentScore;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "18rem";

    // Hide and reset the win video
    winVideo.style.display = "none";
    winVideo.pause();
    winVideo.currentTime = 0;
  });

function myFunction() {
  // Your code here
  alert("Button was clicked!");
  console.log("hui");
}
