const game = () => {
  var myScore = 0;
  var computerScore = 0;

  const playGame = () => {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const myOptions = [rock, paper, scissors];
    const computerOptions = ["rock", "paper", "scissors"];

    const winner = (you, computer) => {
      const result = document.querySelector(".result");
      const myScoreBoard = document.querySelector(".my-count");
      const computerScoreBoard = document.querySelector(".computer-count");

      you = you.id.toLowerCase();
      computer = computer.toLowerCase();

      if (you === computer) {
        result.textContent = "Draw";
      } else if (you == "rock") {
        if (computer == "paper") {
          result.textContent = "Computer Won";
          computerScore++;
          computerScoreBoard.textContent = computerScore;
        } else {
          result.textContent = "You Won";
          myScore++;
          myScoreBoard.textContent = myScore;
        }
      } else if (you == "scissors") {
        if (computer == "rock") {
          result.textContent = "Computer Won";
          computerScore++;
          computerScoreBoard.textContent = computerScore;
        } else {
          result.textContent = "You Won";
          myScore++;
          myScoreBoard.textContent = myScore;
        }
      } else if (you == "paper") {
        if (computer == "scissors") {
          result.textContent = "Computer Won";
          computerScore++;
          computerScoreBoard.textContent = computerScore;
        } else {
          result.textContent = "You Won";
          myScore++;
          myScoreBoard.textContent = myScore;
        }
      }
    };

    for (let i = 0; i < myOptions.length; i++) {
      const option = myOptions[i];

      option.addEventListener("click", () => {
        const randomOption = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[randomOption];
        winner(option, computerChoice);

        const myOpt = document.querySelector(".my-option");
        const compOpt = document.querySelector(".comp-option");
        

        myOpt.textContent = `You: ` + option.id.toUpperCase();
        compOpt.textContent = `Computer: ` + computerChoice.toUpperCase();
       
      });
    }
  };

  const resetGame = () => {
    const result = document.querySelector(".result");
    const reset = document.querySelector(".reset");

    reset.innerText = "Reset";
    reset.computedStyleMap.display = "flex";
    reset.addEventListener("click", () => {
      if (myScore > computerScore) {
        // alert("I won this game! Let's play again!");
        Swal.fire({
          title: "You won this game!",
          text: "Let's play again!",
        }).then(() => {
          window.location.reload();
        });

        result.textContent = "You won this game!";
      } else if (myScore < computerScore) {
        // alert("Computer won this game! Let's play again!");
        Swal.fire({
          title: "Computer won this game!",
          text: "Let's play again!",
        }).then(() => {
          window.location.reload();
        });
        result.textContent = "Computer won this game!";
      } else {
        // alert("Draw!");
        Swal.fire({
          title: "Draw!",
          text: "Let's play again!",
        }).then(() => {
          window.location.reload();
        });
        result.textContent = "Draw!";
      }
      // window.location.reload();
    });
  };

  playGame();
  resetGame();
};
game();
