let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".placar");
const result_p = document.querySelector(".resultado>p");
const pedra_div = document.getElementById("pe");
const papel_div = document.getElementById("pa");
const tesoura_div = document.getElementById("te");

function getComputerChoice(){
    const choices = ['pe', 'pa', 'te'];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}


function converterPalavra(letras){
    if(letras==='pe') return "Pedra";
    if(letras==='pa') return "Papel";
    if(letras=='te') return "Tesoura";
}


function venceu(escolhaDoUsuario, escolhaDoComputador){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = converterPalavra(escolhaDoUsuario) + " vence " + converterPalavra(escolhaDoComputador) + ". Portanto: você venceu!"
}

function perdeu(){
    console.log("Perdeu!");
}

function empatou(){
    console.log("Empatou!");
}




function game(escolhaUsuario){
    const computerChoice = getComputerChoice();
    switch(escolhaUsuario + computerChoice){
        case "pete":
        case "pape":
        case "tepa":
            venceu(escolhaUsuario, computerChoice);
            break;
        
        case "tepe":
        case "pepa":
        case "pate":
            perdeu(escolhaUsuario, computerChoice);
            break;
        case "pepe":
        case "papa":
        case "tete":
            empatou(escolhaUsuario, computerChoice);
            break;    
    } 
}



function main(){

pedra_div.addEventListener('click', function(){
    game("pe");
})

papel_div.addEventListener('click', function(){
    game("pa");
})

tesoura_div.addEventListener('click', function(){
    game("te");
})

}

main();