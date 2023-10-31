let texto = document.getElementById('texto')
let numero = document.getElementById('compras')
let res = document.getElementById('res')
let num = []

function add() {
    num.push(Number(texto.value))
    let item = document.createElement("option")
    item.text = `O ${texto.value} foi adicionado`
    numero.appendChild(item)
    texto.value = ""
    console.log(num)
}

function analisar() {
    if (num == 0) {
        window.alert("Adicione Valores")
    } else {
        let total = num.length
        let maior = num[0]
        let menor = num[0]

        for (let pos in num) {
            if (num[pos] > maior) 
            maior = num[pos]
            if (num[pos] < menor)
            menor = num[pos]
        }
        
        res.innerHTML = `<p>O maior valor é o ${maior} </p>`
        res.innerHTML += `<p>O menor valor é o ${menor} </p>`
    }
    }



