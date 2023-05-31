let dice = Math.trunc(Math.random() * 6) + 1;
let imagem = "POADML"
let imagemAção = Math.random(imagem)
let num = document.getElementById('resNum')
let resIm = document.getElementById('resIm')

function dado() {
    num.innerHTML = dice
}

function imagem() {
    resIm.innerHTML = imagemAção
}
