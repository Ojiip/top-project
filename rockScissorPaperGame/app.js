
function getComputerChoice() {
    const choices = ['Rock', 'Scissors', 'Paper'];
    let random = Math.floor(Math.random() * choices.length);
    switch(random) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Scissors';
            break;
        case 2:
            return 'Paper';
    }
}

computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'tie!'
        
    } else if(computerSelection == 'Rock') {
        if(playerSelection == 'Scissors') {
            return `You Lost ${computerSelection} beat's ${playerSelection}`
        } else {
            return `You Won ${playerSelection} beat's ${computerSelection}`
        }
        
    } else if(computerSelection == 'Scissors') {
        if(playerSelection == 'Paper') {
            return `You Lost ${computerSelection} beat's ${playerSelection}`
        } else {
             return `You Won ${playerSelection} beat's ${computerSelection}`
        }
            
    } else {
        if(playerSelection == 'Rock') {
            return `You Lost ${computerSelection} beat's ${playerSelection}`
        }else {
            return `You Won ${playerSelection} beat's ${computerSelection}`
           }
    }
        
}

function game() {
    for(i = 0; i < 5; i++) {
        playerSelection = prompt('Choose? ')
        console.log(playRound(playerSelection, computerSelection))
    }
}


game()

