
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    console.log("J'ai cliqué !");
    singleRound(computerPlay());
});


function computerPlay(){
    const play = Math.floor(Math.random()*3);
    coupPossible = ["rock", "paper", "scissors"];
    return coupPossible[play];
}

function singleRound(computer){
    let player = prompt("Qu'est-ce que tu joues BG ?");
    if (String(player) != "rock" && String(player) != "paper" &&  String(player) != "scissors"){
        console.log(String(player) != "rock" && String(player) != "paper" &&  String(player) != "scissors")
        singleRound(computer); 
    }

    player = player.toLowerCase()
    console.log(`player : ${player}, computer : ${computer}`);
    if(player == computer){
        console.log("Egalité on recommence !")
    } else if ((player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper") || (player == "rock" && computer == "scissors")){
        console.log("Player win !");
    } else {
        console.log("Player loose !");
    }
}


