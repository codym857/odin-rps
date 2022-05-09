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
        return 'Tie!';
    }else if(player === 'null'){
        return 'No Contest!'
    }
    else if((player == 'rock' && computer == 'scissors') || 
    (player == 'paper' && computer == 'rock') || (player == 'scissors' && computer == 'paper')){
        return player + ' wins!';
    }else{
        return computer + ' wins, you lose :(';
    }
}