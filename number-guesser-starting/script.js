let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//step 1
const generateTarget = ( ) => {
    return (Math.floor(Math.random()*9));
}

//step 2
const compareGuesses = (human, computer, secret) =>{
    const userGuess = Math.abs(secret - human);
    const computerGuess = Math.abs(secret - computer);
    return userGuess <= computerGuess
       /*if (userG <= computerG) {
        updateScore('human');
    } else {
        updateScore('computer');
    }*/
}
//step 3
const updateScore = winner => {
    if (winner === 'human'){
        return humanScore += 1;
    }
    else if (winner === 'computer') {
       return computerScore += 1;
    }
}

//step 4
const advanceRound = () => {
    currentRoundNumber += 1;
}