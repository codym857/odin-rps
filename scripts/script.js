function computerPlay(){
    const rnd = Math.floor(Math.random() * 3);
    switch(rnd){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection;
    if(player === computerSelection){
        printResults('Tie');
    }
    else if((player == 'rock' && computer == 'scissors') || 
    (player == 'paper' && computer == 'rock') || (player == 'scissors' && computer == 'paper')){
        printResults(player + ' wins!');
    }else{
        printResults(computer + ' wins, you lose :(');
    }
}

function printResults(results){
    const resDiv = document.querySelector('#results');
    const resP = document.createElement('p');
    
    resP.textContent = results;
    resDiv.appendChild(resP);
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {playRound('rock', computerPlay());});
paperBtn.addEventListener('click', () => {playRound('paper', computerPlay());});
scissorsBtn.addEventListener('click', () => {playRound('scissors', computerPlay());});