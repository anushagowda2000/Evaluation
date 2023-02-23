const options = ["rock","paper","scissors"];

game();

function game(){
    let scorePlayer=0;
    let scoreComputer=0;
    console.log("welcome");
    for(let i=0; i<5; i++){
        const playerSelection=getPlayerChoice();
       const computerSelection=getComputerChoice();
       console.log(playRound(playerSelection,computerSelection));
       console.log("-----")
       if(checkWinner(playerSelection,computerSelection)=="player"){
        scorePlayer++;
       }
       else if(checkWinner(playerSelection,computerSelection)=="computer"){
        scoreComputer++;
       }
    }
    console.log("Game Over")
    if(scorePlayer>scoreComputer){
        console.log("player was the winner");
    }
    else if(scorePlayer<scoreComputer){
        console.log("Computer was the winner");
    }
    else{
        console.log("We have a tie!");
    }
}

function getPlayerChoice(){
    let validatedInput=false;
    while(validatedInput==false){
        const choice=prompt("select any one value Rock, Paper or Scissors");
        if(choice==null){
            continue;
        }
        const choiceInLower=choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput=true;
            return choiceInLower;
        }
    }
}

function getComputerChoice(){
    
const choice=options[Math.floor(Math.random()*3)];
return choice;
}

function playRound(playerSelection, computerSelection){
    const result=checkWinner(playerSelection,computerSelection);
    if(result=="Tie"){
        return "It's a Tie!"
    }
    else if(result=="player"){
        return `you Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function checkWinner(playerSelection,computerSelection){
    if(playerSelection==computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection=="rock" && computerSelection=="scissors")||
        (playerSelection=="scissors"&& computerSelection=="paper")||
        (playerSelection=="paper"&&computerSelection=="rock")
    ){
        return "player";
    }
    else{
        return "computer";
    }
}



