let numberInput = document.getElementById('num')
let numberSelect = document.getElementById('selNum')
let res = document.getElementById('res')
let num = []

function checar(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        //indexOf serve para encontrar um valor especifico na array
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (checar(numberInput.value) && !inList(numberInput.value, num)) {
        num.push(Number(numberInput.value))
        let item = document.createElement('option')
        item.text = `O valor ${numberInput.value} foi adicionado`
        numberSelect.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Ou o valor é inválido, ou já foi preenchido')
    }

    numberInput.value = ''
    numberInput.focus()
}

function analisar() {
    if (num.length == 0) {
        window.alert('Adiocione valores antes de finalizar')
    } else {
        let total = num.length
        let maior = num[0]
        let menor = num[0]
        let soma = 0
        let media = 0

        for (let pos in num) {
            soma += num[pos]
            if (num[pos] > maior)
                maior = num[pos]

            if (num[pos] < menor)
                menor = num[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menos valor infomado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores inserido é de ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores inserido é de ${media.toFixed(1)} </p>`
        console.log(num[0])
    }
}
