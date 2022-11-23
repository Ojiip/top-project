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
        console.log('tie!')
        
    } else if(computerSelection == 'Rock') {
        if(playerSelection == 'Scissors') {
            console.log(`You Lost ${computerSelection} beat's ${playerSelection}`)
        } else {
            console.log(`You Won ${playerSelection} beat's ${computerSelection}`)
        }
        
    } else if(computerSelection == 'Scissors') {
        if(playerSelection == 'Paper') {
            console.log(`You Lost ${computerSelection} beat's ${playerSelection}`)
        } else {
             console.log(`You Won ${playerSelection} beat's ${computerSelection}`)
        }
            
    } else {
        if(playerSelection == 'Rock') {
            console.log(`You Lost ${computerSelection} beat's ${playerSelection}`)
        }else {
            console.log(`You Won ${playerSelection} beat's ${computerSelection}`)
           }
        
}}

playRound('Paper', computerSelection)