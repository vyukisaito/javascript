let inputNum = document.getElementById('inputNum')
let selNum = document.getElementById('selectNum')
let res = document.getElementById('resultado')
let valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
    /*irá verificar se 'n' é um número */
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        /*-1 -> valor que não está na lista */
        return true
    } else {
        return false
        /*se o valor não foi encontrado na lista */
    }
}

function adicionar () {
    if(isNumber(inputNum.value) && !inList(inputNum.value, valores)) {
        valores.push(Number(inputNum.value))
        let item = document.createElement('option')
        item.text = `O valor ${inputNum.value} foi adicionado.`
        selNum.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Ou o valor é inválido, ou já foi preenchido.')
    }
    inputNum.value = ''
    inputNum.focus()
}

function analisar() {
    if (valores.length == 0) {
        window.alert('Adicione valores para analisar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos] 
            if (valores[pos] < menor)
            menor = valores[pos]  
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Total de valores: ${total} </p>`
        res.innerHTML += `<p>Maior valor informado: ${maior} </p>`
        res.innerHTML += `<p>Menos valor informado: ${menor} </p>`
        res.innerHTML += `<p>Soma de todos os valores: ${soma} </p>`
        res.innerHTML += `<p>Média dos valores: ${media} </p>`
    }
}