let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Function will be called at the start of a new round in order to generate the new secret target number
const generateTarget = x => {
    let x = (Math.floor(Math.random()*9))
}

/*function will be called each round to determine which guess is closest to the target number created
in the previous step */
const compareGuesses = (human, computer, secret) =>{
    let secret = x;
    if (computer === secret){
        return false;
    };
    if (computer === secret && human === secret) {
        return true;
    };
    if (human === secret) {
        return true;
    }
}