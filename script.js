let humanScore = 0;
let computerScore = 0;


function round() {
    function computerPlay() {
        const options = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * options.length);
        const chosen = options[random];
        return chosen;
    }
    const computer = computerPlay();
    let choice = prompt("enter your decision");
    const playerchoice = choice.toLowerCase();

    if (playerchoice === "rock"){
        if(computer === "rock"){
            return "Tie";
        } else if(computer === "paper"){
            computerScore ++;
            return "Paper beats rock, you lose";
        }else {
            humanScore ++;
            return "Rock beats scissors, you win";
        }

    } else if(playerchoice === "scissors"){
        if(computer === "scissors"){
            return "Tie";
        } else if(computer === "paper"){
            humanScore ++;
            return "You win, scissors beat paper";
        } else {
            computerScore ++;
            return "You lose, scissors are defeated by rock";
        }
    } else{
        if (computer === "paper"){
            return "Tie";
        }else if (computer === "rock"){
            humanScore++;
            return "You win, paper beats rock"
        } else{
            computerScore++;
            return "You lose, scissors beat paper";
        }
    }

}

function game() {
    humanScore = 0;
    computerScore = 0;

    while (humanScore < 5 && computerScore < 5){
        round();
    }
    if (computerScore === 5){
        return "You lost the game";
    } else {
        return "You have won the game. Congrats"
    }
}

