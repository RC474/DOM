let p1button = document.getElementById("p1");
let p2button = document.getElementById("p2");
let resetButton = document.getElementById("reset");
let numinput = document.querySelector("input");
let p = document.querySelector("p");
let winningScoreDisplay = document.querySelector("p span");
let p1Score = 0;
let p2Score = 0;
let p1display = document.querySelector("#p1display");
let p2display = document.getElementById("p2display");
let gameOver = false;
let winningScore = 5;

p1button.addEventListener("click", function() {
  if(!gameOver) {
    p1Score++;  
  p1display.textContent = p1Score;
  
  }
  if(p1Score === winningScore) {
    p1display.classList.add("winner");
      gameOver = true;
      
  }
    
    
});

p2button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;  
    p2display.textContent = p2Score;
      
    }

    if(p2Score === winningScore) {
        p2display.classList.add("winner");
        gameOver = true;
    }
    
  });

  resetButton.addEventListener("click", function() {
    reset();
  });

  function reset(){
    p1Score = 0;
    p2Score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner")
    p2display.classList.remove("winner")
    gameOver = false;
  }

  numinput.addEventListener("change", function() {
    winningScoreDisplay.textContent = numinput.value;
    winningScore = Number(numinput.value);
    
    reset();
  });