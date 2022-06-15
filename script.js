
//On rajoute un peu de style pour centrer les boutons au moins 
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.gap = "30px";



//const btn = document.querySelector("button");

const btns = document.querySelectorAll("button")

btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(e.target.id);
        singleRound(String(e.target.id), computerPlay());
    });
});
/*
btn.addEventListener("click", () => {
    console.log("J'ai cliqué !");
    singleRound(computerPlay());
});
*/


function computerPlay(){
    const play = Math.floor(Math.random()*3);
    coupPossible = ["rock", "paper", "scissors"];
    return coupPossible[play];
}

function singleRound(player, computer){
    if (String(player) != "rock" && String(player) != "paper" &&  String(player) != "scissors"){
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

//Je rajoute un commentaire pour tester la fonctionnalité branch.

