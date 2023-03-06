let clock = document.getElementById('clock')
let relogio = setInterval(function time(){
    let dateToday = new Date()
    let hra = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    if (hra < 10) hra = '0' + hra
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec

    clock.innerHTML = `${hra}:${min}:${sec}`
})