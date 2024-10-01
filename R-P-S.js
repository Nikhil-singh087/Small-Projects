let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let a = Math.random();
    if(a<=0.33333333){
        return "rock";
    }
    else if(a<=0.66666666){
        return "paper";
    }
    else{
        return "scisor";
    }
}

function getHumanChoice(){
    let b = prompt();
    return b.toLowerCase();
}

function playRound(computerChoice,humanChoice){
    if(humanChoice=="rock" && computerChoice=="paper"){
        console.log("Computer Wins!");
        computerScore++;
    }
    else if(humanChoice=="rock" && computerChoice=="scisor"){
        console.log("Human Wins!");
        humanScore++;
    }
    else if(humanChoice=="rock" && computerChoice=="rock"){
        console.log("It's a Draw!");
    }
    else if(humanChoice=="paper" && computerChoice=="paper"){
        console.log("It's a Draw!");
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("Human Wins!");
        humanScore++;
    }
    else if(humanChoice=="scisor" && computerChoice=="paper"){
        console.log("Human Wins!");
        humanScore++;
    }
    else if(humanChoice=="paper" && computerChoice=="scisor"){
        console.log("Computer Wins!");
        computerScore++;
    }
    else if(humanChoice=="scisor" && computerChoice=="rock"){
        console.log("Computer Wins!");
        computerScore++;
    }
    else{
        console.log("It's a Draw!");
    }
}


function playGame(){
    for(i = 1; i<=5;i++){
        console.log("Round : "+i)
        let hc = getHumanChoice();
        let cc = getComputerChoice();
        console.log("Computer Chooses : "+cc);
        console.log("Human Chooses : "+hc)
        playRound(cc,hc);
    }
}

playGame();

console.log("Final Score :-");  
console.log("Computer - "+computerScore);
console.log("Human - "+humanScore);
