
//Computer Selection
function computerPlay() {
     const randomNumber=Math.floor(Math.random()*3);
     switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
     }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 'This game is a tie';
    }
    if(playerSelection==='rock') {
        if(computerSelection==='paper') {
            return "Sorry,computer won!";
        } else{
            return "Congratulations,you won!";
        }
     }
     if(playerSelection==='rock') {
      if(computerSelection==='scissor') {
          return "Congratulations,you won!";
      } else{
          return "Sorry,computer won!";
      }
    }
     if(playerSelection==='paper') {
        if(computerSelection==='scissor') {
            return "Sorry,computer won!";
        } else{
            return "Congratulations,you won!";
        }
     }
     if(playerSelection==='paper') {
      if(computerSelection==='rock') {
          return "Congratulations,you won!";
      } else{
          return "Sorry,computer won!";
      }
    }
     if(playerSelection==='scissor') {
        if(computerSelection==='rock') {
            return "Sorry,computer won!";
        } else{
            return "Congratulations,you won!";
        }
     }
     if(playerSelection==='scissor') {
      if(computerSelection==='paper') {
          return "Congratulations,you won!";
      } else{
          return "Sorry,computer won!";
      }
   }
}

//Player input choose
function game() {
    let scoreComputer=0;
    let scorePlayer=0;
    let playerSelection;
    let computerSelection;
    let roundResult;
    for (let i = 0; i < 5; i++) {
      playerSelection = prompt("Do you choose rock, paper or scissor?");
      while (
        !(
          playerSelection.toLowerCase() === "paper" ||
          playerSelection.toLowerCase() === "rock" ||
          playerSelection.toLowerCase() === "scissor"
        )
      ) {
        playerSelection = prompt(
          "Try again please! Do you choose rock, paper or scissors?"
        );
      }
      console.log(`You chose ${playerSelection}`);
      computerSelection = computerPlay();
      console.log("computer chose " + computerSelection);
      roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
      if (roundResult === "Congratulations,you won!") {
        scorePlayer++;
        console.log(scorePlayer,roundResult);
      } else if (roundResult === "Sorry,computer won!") {
        scoreComputer++;
        console.log(scoreComputer,roundResult);
      }
    }
    //Who is the winner

    if (scoreComputer == scorePlayer) {
      console.log("It's a draw!");
    } else if (scoreComputer > scorePlayer) {
      console.log("Computer is the winner!");
    } else {
      console.log("You are the winner!");
    }
    console.log("the score is: computer:" +scoreComputer  + "   you:"+ scorePlayer);
}

game();