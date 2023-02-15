function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Vai usar esse não?')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}

function potencia() {
    var numero = document.getElementById('txtn2')
    var pot = document.getElementById('selpot')
    if (numero.value.length == 0) {
        window.alert('Vai calcular esse não?')
    } else {
        var nu = Number(numero.value)
        var x = 1
        pot.innerHTML = ''
        while (x <= 10) {
            var item = document.createElement('option')
            item.text = `${nu}^${x} = ${nu**x}`
            pot.appendChild(item)
            x++
        }
    }
}