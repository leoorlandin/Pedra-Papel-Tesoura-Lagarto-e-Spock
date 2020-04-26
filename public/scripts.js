let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".placar")
const result_p = document.querySelector(".resultado>p")
const pedra_div = document.getElementById("pe") //atribuindo a uma variavel ao elemento de imagem "pedra/pe"
const papel_div = document.getElementById("pa") //atribuindo a uma variavel ao elemento de imagem "papel/pa"
const tesoura_div = document.getElementById("te") //atribuindo a uma variavel ao elemento de imagem "tesoura/te"
const lagarto_div = document.getElementById("la") //atribuindo a uma variavel ao elemento de imagem "lagarto/la"
const spock_div = document.getElementById("sp") //atribuindo a uma variavel ao elemento de imagem "spock/sp"

/*FUNÇÃO PARA GERAR UM NÚMERO ALEATÓRIO COM MATH.RANDOM DE 0 A 2 (*3). MATH.FLOOR PARA ARREDONDAR,
DESTA MANEIRA: RETORNANDO APENAS 0,1,2 DE MANEIRA QUE, CASO RETORNE 0 ATRIBUIRÁ AO VALOR "PE" QUE SE
ENCONTRA NA POSIÇÃO 0 DO ARRAY CHOICES, 1 ATRABUIRÁ "PA" E 2 "TE".
random randomNumber é atribuido como valor da posição do array, logo retorna posição 0,1,2 = pe,pa,te.

*/

function getComputerChoice() {
    const choices = ['pe', 'pa', 'te', 'la', 'sp']
    const randomNumber = (Math.floor(Math.random() * 5))
    return choices[randomNumber]
}

//FUNÇÃO PARA CONVERTER PALAVRAS "PA""PE""TE" EM PEDRA, PAPEL E TESOURA, RESPECTIVAMENTE.
function converterPalavra(letras) {

    switch (letras) {
        case 'pe': return "Pedra"
            break
        case 'pa': return "Papel"
            break
        case 'te': return "Tesoura"
            break
        case 'la': return "Lagarto"
            break
        case 'sp': return "Spock"
            break
    }
}

/*FUNÇÃO QUE PEGA DOIS ATRIBUTOS, A ESCOLHA DO USUÁRIO E A ESCOLHA DO COMPUTADOR 
(GERADA ALEATÓRIMENTE ATRAVÉS DA FUNCÃO getComputerChoice) adiciona ao contador de vitórios do usuário
caso o mesmo tenha vencido
*/
function venceu(escolhaDoUsuario, escolhaDoComputador) {
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "usuário".fontsize(3).sub()
    const smallCompWord = "máquina".fontsize(3).sub()
    result_p.innerHTML = `${converterPalavra(escolhaDoUsuario)}${smallUserWord} vence ${converterPalavra(escolhaDoComputador)}${smallCompWord}. Portanto: você venceu!`
    document.getElementById(escolhaDoUsuario).classList.add('green-glow')
    setTimeout(function () { document.getElementById(escolhaDoUsuario).classList.remove('green-glow') }, 1000) //cria o brilho verde ao vencer
}

function perdeu(escolhaDoUsuario, escolhaDoComputador) {
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "usuário".fontsize(3).sub()
    const smallCompWord = "máquina".fontsize(3).sub()
    result_p.innerHTML = `${converterPalavra(escolhaDoUsuario)}${smallUserWord} perde para ${converterPalavra(escolhaDoComputador)}${smallCompWord}. Portanto: você perdeu!`
    document.getElementById(escolhaDoUsuario).classList.add('red-glow')
    setTimeout(function () { document.getElementById(escolhaDoUsuario).classList.remove('red-glow') }, 1000) //cria o brilho vermelho ao perder
}

function empatou(escolhaDoUsuario, escolhaDoComputador) {
    const smallUserWord = "usuário".fontsize(3).sub()
    const smallCompWord = "máquina".fontsize(3).sub()
    result_p.innerHTML = converterPalavra(escolhaDoUsuario) + smallUserWord + " é igual a  " + converterPalavra(escolhaDoComputador) + smallCompWord + ". Portanto: é um empate!"
    document.getElementById(escolhaDoUsuario).classList.add('gray-glow')
    setTimeout(function () { document.getElementById(escolhaDoUsuario).classList.remove('gray-glow') }, 1000) //cria o brilho cinza ao empatar
}




function game(escolhaUsuario) {
    const computerChoice = getComputerChoice()
    switch (escolhaUsuario + computerChoice) {
        case "pete":
        case "pape":
        case "tepa":
        case "spte":
        case "sppe":
        case "lasp":
        case "lapa":
        case "pela":
        case "pasp":
        case "tela":
            venceu(escolhaUsuario, computerChoice)
            break
        case "tepe":
        case "pepa":
        case "pate":
        case "tesp":
        case "pesp":
        case "spla":
        case "pala":
        case "lape":
        case "sppa":
        case "late":
            perdeu(escolhaUsuario, computerChoice)
            break
        case "pepe":
        case "papa":
        case "tete":
        case "lala":
        case "spsp":
            empatou(escolhaUsuario, computerChoice)
            break
    }
}



function main() {

    pedra_div.addEventListener('click', function () {
        game("pe")
    })

    papel_div.addEventListener('click', function () {
        game("pa")
    })

    tesoura_div.addEventListener('click', function () {
        game("te")
    })

    lagarto_div.addEventListener('click', function () {
        game("la")
    })

    spock_div.addEventListener('click', function () {
        game("sp")
    })


}

main()
