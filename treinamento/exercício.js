function multa() {
    var km = document.getElementById('km')
    var km = (km.value)
    var res = document.getElementById('res')
    if (km > 100 && km < 300) {
        res.innerHTML = 'Você foi multado!'
    }else if (km > 300) {
        res.innerHTML = 'Acho que você tá mentindo, deve ser um avião ou um foguete isso aí'
    }else if (km <0) {
        res.innerHTML = 'E tem como isso?'
    }else {
        res.innerHTML = 'Muito bem, você está dirigindo com segurança!'
    }
}

function nacionalidade() {
    var nas = document.getElementById('nas')
    var nas = (nas.value)
    var nac =  document.getElementById('nac')
    if (nas == 'Brasil' || nas ==  'brasil' ) {
        nac.innerHTML = 'Você é brasileiro!'
    }else {
        nac.innerHTML = 'Você é estrangeiro!'
    }}

    function verificar() {
        var palpite = document.getElementById('palpite')
        var palpite = (palpite.value)
        var resu = document.getElementById('resu')
        if (palpite == 'Brasil' ||palpite== 'brasil' || palpite=='BRASIL') {
            resu.innerHTML='O Brasil tem 15,17% de vencer a Copa. O Hexa vem?'
        }else if (palpite == 'inglaterra' ||palpite== 'Inglaterra' || palpite=='INGLATERRA') {
            resu.innerHTML = 'A Inglaterra tem 12,83% de vencer a Copa.'

        }else if (palpite == 'França' || palpite == 'frança'|| palpite == 'FRANÇA') {
            resu.innerHTML = 'A França tem 11,92% de vencer a Copa.'

        }else if (palpite == 'espanha'|| palpite== 'ESPANHA'|| palpite == 'Espanha') {
            resu.innerHTML = 'A Espanha tem 9,27% de vencer a Copa'

        }else if (palpite == 'Argentina'|| palpite== 'ARGENTINA'|| palpite == 'argentina') {
            resu.innerHTML = 'A Argentina tem 9,27% de vencer a Copa'

        }else if (palpite == 'alemanha'|| palpite== 'Alemanha'|| palpite == 'ALEMANHA') {
            resu.innerHTML = 'A Alemanha TINHA 6,95% de vencer a Copa.'

        }else if (palpite == 'BÉLGICA'|| palpite== 'bélgica'|| palpite == 'Bélgica') {
            resu.innerHTML = 'A Bélgica TINHA 6,42% de vencer a Copa'
            
        }else if (palpite == 'Holanda'|| palpite== 'HOLANDA'|| palpite == 'holanda') {
            resu.innerHTML = 'A Holanda tem 6,42% de vencer a Copa'

        }else if (palpite == 'Portugal'|| palpite== 'PORTUGAL'|| palpite == 'portugal') {
            resu.innerHTML = 'O Portugal tem 6,42% de vencer a Copa'

        }else if (palpite == 'Dinamarca'|| palpite== 'DINAMARCA'|| palpite == 'dinamarca') {
            resu.innerHTML = 'A Dinamarca TINHA 2,88% de vencer a Copa'

        }else if (palpite == 'Croácia'|| palpite== 'CROÁCIA'|| palpite == 'croácia'|| palpite=='croacia'||palpite =='Croacia') {
            resu.innerHTML = 'A Croácia tem 1,64% de vencer a Copa'

        }else if (palpite == 'Uruguai'|| palpite== 'URUGUAI'|| palpite == 'uruguai') {
            resu.innerHTML = 'O urugia TINHA 1,64% de vencer a Copa.'

        }else if (palpite == 'Senegal'|| palpite== 'SENEGAL'|| palpite == 'senegal') {
            resu.innerHTML = 'O Senegal TINHA 1,03% de vencer a Copa'

        }
    }

    
