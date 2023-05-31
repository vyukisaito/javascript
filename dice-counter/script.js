let dice = Math.trunc(Math.random() * 6) + 1;
let num = document.getElementById('resNum')

let imagem = "POADML"
let imagemAção = Math.random(imagem)
let letrasArray = letras.split('');
let resIm = document.getElementById('resIm')

function dado() {
    num.innerHTML = dice
}

function imagemF() {
    return Math.random() - 0.5
}

letrasArray.sort(compararAleatorio);
let letrasEmbaralhadas = letrasArray.join('');

console.log(letrasEmbaralhadas);