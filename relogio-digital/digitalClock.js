let clock = document.getElementById('clock')
let calender = document.getElementById('calender')
let relogio = setInterval(function time(){
    let dateToday = new Date()
    let hra = dateToday.getHours()
    let min = dateToday.getMinutes()
    let seg = dateToday.getSeconds()
    let smn = dateToday.getDay()
    let mes = dateToday.getMonth()
    let day = dateToday.getDate()
    let ano = dateToday.getFullYear()

    if(hra < 10) hra = '0' + hra
    
    if(min < 10) min = '0' + min
    
    if(seg < 10) seg = '0' + seg

    switch(smn) {
        case 0:
            calender.innerHTML = 'domingo, '
            break
        case 1:
            calender.innerHTML = 'segunda-feira, '
            break
        case 2:
            calender.innerHTML = 'terça-feira, '
            break
        case 3:
            calender.innerHTML = 'quarta-feira, '
            break
        case 4:
            calender.innerHTML = 'quinta-feira, '
            break
        case 5:
            calender.innerHTML = 'sexta-feira, '
            break
        case 6:
            calender.innerHTML = 'sábado, '
            break
    }
    calender.innerHTML += `${day} `

    switch(mes) {
        case 0:
            calender.innerHTML += 'de janeiro'
            break
        case 1:
            calender.innerHTML += 'de fevereiro '
            break
        case 2:
            calender.innerHTML += 'de março'
            break
        case 3:
            calender.innerHTML += 'de abril'
            break
        case 4:
            calender.innerHTML += 'de maio'
            break
        case 5:
            calender.innerHTML += 'de junho'
            break
        case 6:
            calender.innerHTML += 'de julho'
            break
        case 7:
            calender.innerHTML += 'de agosto'
            break
        case 8:
            calender.innerHTML += 'de setembro'
            break
        case 9:
            calender.innerHTML += 'de outubro'
            break
        case 10:
            calender.innerHTML += 'de novembro'
            break
        case 11:
            calender.innerHTML += 'de dezembro'
            break
    }

    clock.innerHTML = `${hra}:${min}:${seg}`
    calender.innerHTML += ` de ${ano}`

}) 