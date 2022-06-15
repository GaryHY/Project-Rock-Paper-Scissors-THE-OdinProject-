
//On rajoute un peu de style pour centrer les boutons au moins
document.body.style.minHeight = "100vh";

const container = document.querySelector(".container");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.gap = "30px";
container.style.minHeight = "80vh";


let scorePlayer = 0;
let scoreComputer = 0;


const btns = document.querySelectorAll("button")

btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(e.target.id);
        singleRound(String(e.target.id), computerPlay());
        if (scorePlayer == 5){
            scorePlayer = 0;
            scoreComputer = 0;
            console.log("On recommence la séquence de 5 games!"); 
        } else if(scoreComputer==5){
            scorePlayer = 0;
            scoreComputer = 0;
            console.log("On recommence la séquence de 5 games!"); 
        }
    });
});

//On crée la div qui va apparaitre avec le résultat du bail 
let respDiv = document.createElement("div");
let scoreDiv = document.createElement("div");
//On stylise un petit peu que ça ait l'air de quelque chose : 
respDiv.style.textAlign = "center";
respDiv.style.marginTop = "10px";
scoreDiv.style.textAlign = "center";
scoreDiv.style.marginTop = "10px";


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
        console.log("Egalité on recommence !");
        respDiv.innerText = "Egalité on recommence!";
    } else if ((player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper") || (player == "rock" && computer == "scissors")){
        console.log("Player win !");
        respDiv.innerText = "Player win!";
        scorePlayer+=1;
    } else {
        console.log("Player loose !");
        respDiv.innerText = "Player loose!";
        scoreComputer+=1;
    }
    scoreDiv.innerText = `Player : ${scorePlayer} | Computer : ${scoreComputer}`;

    document.body.appendChild(respDiv);
    document.body.appendChild(scoreDiv);

}

//Je rajoute un commentaire pour tester la fonctionnalité branch.

