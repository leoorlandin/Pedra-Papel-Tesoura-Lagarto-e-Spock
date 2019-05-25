let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".placar");
const result_p = document.querySelector(".resultado>p");
const pedra_div = document.getElementById("pe");
const papel_div = document.getElementById("pa");
const tesoura_div = document.getElementById("te");

/*FUNÇÃO PARA GERAR UM NÚMERO ALEATÓRIO COM MATH.RANDOM DE 0 A 2 (*3). MATH.FLOOR PARA ARREDONDAR,
DESTA MANEIRA: RETORNANDO APENAS 0,1,2 DE MANEIRA QUE, CASO RETORNE 0 ATRIBUIRÁ AO VALOR "PE" QUE SE
ENCONTRA NA POSIÇÃO 0 DO ARRAY CHOICES, 1 ATRABUIRÁ "PA" E 2 "TE".
random randomNumber é atribuido como valor da posição do array, logo retorna posição 0,1,2 = pe,pa,te.

*/

function getComputerChoice(){
    const choices = ['pe', 'pa', 'te'];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

//FUNÇÃO PARA CONVERTER PALAVRAS "PA""PE""TE" EM PEDRA, PAPEL E TESOURA, RESPECTIVAMENTE.
function converterPalavra(letras){
    if(letras==='pe') return "Pedra";
    if(letras==='pa') return "Papel";
    if(letras==='te') return "Tesoura";
}

/*FUNÇÃO QUE PEGA DOIS ATRIBUTOS, A ESCOLHA DO USUÁRIO E A ESCOLHA DO COMPUTADOR 
(GERADA ALEATÓRIMENTE ATRAVÉS DA FUNCÃO getComputerChoice) adiciona ao contador de vitórios do usuário
caso o mesmo tenha vencido
*/
function venceu(escolhaDoUsuario, escolhaDoComputador){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = converterPalavra(escolhaDoUsuario)+ smallUserWord + " vence " + converterPalavra(escolhaDoComputador) + smallCompWord+". Portanto: você venceu!"
    document.getElementById(escolhaDoUsuario).classList.add('green-glow');
    setTimeout(function() {document.getElementById(escolhaDoUsuario).classList.remove('green-glow') },1000);
}

function perdeu(escolhaDoUsuario, escolhaDoComputador){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = converterPalavra(escolhaDoUsuario)+ smallUserWord + " perde para" + converterPalavra(escolhaDoComputador) + smallCompWord+". Portanto: você perdeu!"
    document.getElementById(escolhaDoUsuario).classList.add('red-glow');
    setTimeout(function() {document.getElementById(escolhaDoUsuario).classList.remove('red-glow') },1000);
}

function empatou(escolhaDoUsuario, escolhaDoComputador){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = converterPalavra(escolhaDoUsuario)+ smallUserWord + " é igual a  " + converterPalavra(escolhaDoComputador) + smallCompWord+". Portanto: é um empate!"
    document.getElementById(escolhaDoUsuario).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(escolhaDoUsuario).classList.remove('gray-glow') },1000);
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
