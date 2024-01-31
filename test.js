const game = () => {
    let myScore = 0;
    let computerScore = 0;
  
    const playGame = () => {
      const rock = document.querySelector(".rock");
      const paper = document.querySelector(".paper");
      const scissor = document.querySelector(".scissor");
  
      const myOptions = [rock, paper, scissor];
      // for (let i = 0; i < myOptions.length; i++) {
      //   const option = myOptions[i];
      // }
  
      const computerOptions = ["rock", "paper", "scissors"];
  
      const winner = (me, computer) => {
        const result = document.querySelector(".result");
        const myScoreBoard = document.querySelector(".my-count");
        const computerScoreBoard = document.querySelector(".computer-count");
  
        player = player.toLowerCase();
        computer = computer.toLowerCase();
  
        if (me === computer) {
          result.textContent = "Draw";
        } else if (me == "rock") {
          if (computer == "paper") {
            result.textContent = "Computer Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
          } else {
            result.textContent = "I Won";
            playerScore++;
            myScoreBoard.textContent = myScore;
          }
        } else if (player == "scissors") {
          if (computer == "rock") {
            result.textContent = "Computer Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
          } else {
            result.textContent = "I Won";
            playerScore++;
            myScoreBoard.textContent = myScore;
          }
        } else if (player == "paper") {
          if (computer == "scissors") {
            result.textContent = "Computer Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
          } else {
            result.textContent = "I Won";
            playerScore++;
            myScoreBoard.textContent = myScore;
          }
        }
      };
  
      for (const option of myOptions) {
        option.addEventListener("click", () => {
          const choiceNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[choiceNumber];
          winner(this.innerText, computerChoice);
        });
      }
    };
  
      // Function to run when game is over
      const resetGame = () => {
        const result = document.querySelector(".result");
        const reset = document.querySelector(".reset");
  
        myOptions.forEach((option) => {
          option.style.display = "none";
        });
  
        if (playerScore > computerScore) {
          result.innerText = "I Won";
        } else if (playerScore < computerScore) {
          result.innerText = "Computer Won";
        } else {
          result.innerText = "Draw";
        }
        reset.innerText = "Reset";
        reset.style.display = "flex";
        reset.addEventListener("click", () => {
          window.location.reload();
        });
      };
  
    playGame();
  };
  
  game();
  