let num = document.getElementById('number')
let seln = document.getElementById('selnum')
let res = document.getElementById('resultado')
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function guardar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        seln.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Ou o valor é inválido, ou já foi preenchido')
    }
    num.value = ''
    num.focus()
}

function analisar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        //o primeiro valor é o maior
        let menor = valores[0]
        //o primeiro valor tbm é o menor
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            /* vai somando o 1º valor,2º valor, assim em diante */
            if (valores[pos] > maior)
                maior = valores[pos]
            /**se 'valores' na posição 'pos' for maior do que 
           o maior valor, o maior valor passa a ser valores
           'pos' 
            */
            if (valores[pos] < menor)
                menor = valores[pos]
            /**se 'valores' na posição 'pos' for menos do que 
            o menor valor, o menor valor passa a ser valores 
            'pos'
             */
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menos valor infomado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores inserido é de ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores inserido é de ${media.toFixed(1)} </p>`
    }
}