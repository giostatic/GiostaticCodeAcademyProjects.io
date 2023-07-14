const monster = 'Jehrico';
let monsterHealth = 1000;
let playerAttack = 100;
let playerName = 'Bandit';

let attack = parseInt('How many times do you want to attack?');

for (let i = attack; i < monsterHealth; i++){
    console.log(`${playerName} has hit the monster ${attack}`)
}


if (playerAttack === monsterHealth){
    console.log(`${playerName} has defeated the monster!`)
}