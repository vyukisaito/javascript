

let num = document.getElementById('resNum')

//let imagemAção = Math.random(imagem)
let resIm = document.getElementById('resIm')

function dado() {
    let dice = Math.trunc(Math.random() * 6) + 1;
    num.innerHTML = dice
}


let letras = 'POADML';

function imagemF() {
    let indiceSorteado = Math.floor(Math.random() * letras.length);
    let letraSorteada = letras[indiceSorteado];

    return resIm.innerHTML = `${letraSorteada}`
}

/*
let cronometro = document.getElementById('cro')
let mil = 00
let sec = 00
let min = 00
let hra = 00
let isRunning = false
let intervalo

function digits(digit) {
    if(digits < 10) {
        return ('0' = digit)
    } else {
        return (digit)
    }
}

function start() {
    if (isRunning === false) {
        watch();
        intervalo = setInterval((watch), 10)
    }
    isRunning = true
}

function pause() {
    clearInterval(intervalo)
    isRunning = false
}

function restart() {
    clearInterval(intervalo)
    mil = 0
    sec = 0
    min = 0
    hra = 0
    cronometro.innerHTML = '00:00:00;00'
    isRunning = false
}

function watch() {
    mil++
    if (mil == 100) {
        sec++
        mil = 0
    } else if (sec == 60) {
        min++
        sec = 0
    } else if (min = 60) {
        hra++
        min = 0
    }

    cronometro.innerHTML = digits(hra) + ':' + digits(min) + ':' + digits(sec) + ';' + digits(mil)
}
*/

let mil = 0
let sec = 0
let min = 0
let hra = 0
let isRunning = false
let intervalo

function digits(digit) {
    if (digit<10) {
        return('0'+ digit )
    } else {
        return (digit)
    }
}

function start() {
    if (isRunning === false) {
        watch();
        intervalo = setInterval((watch), 10);
    }
    isRunning = true
}

function pause() {
    clearInterval(intervalo)
    isRunning = false
}

function restart() {
    clearInterval(intervalo)
    mil = 0
    sec = 0
    min = 0
    hra = 0
    document.getElementById('cro').innerHTML = '00:00:00,00'
    isRunning = false
}

function watch() {
    mil++
    if (mil == 100) {
        sec++
        mil = 0
    } else if (sec == 60) {
        min++
        sec = 0
    } else if (min == 60) {
        hra++
        min = 0
    }
    document.getElementById('cro').innerHTML = digits(hra) + ':' + digits(min) + ':' + digits(sec) + ',' + digits(mil)
}