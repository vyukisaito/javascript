let mil = 00
let sec = 00
let min = 00
let hra = 00
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

function stop() {
    clearInterval(intervalo)
    mil = 0
    sec = 0
    min = 0
    hra = 0
    document.getElementById('num').innerHTML = '00:00:00,00'
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
    document.getElementById('num').innerHTML = digits(hra) + ':' + digits(min) + ':' + digits(sec) + ',' + digits(mil)
}