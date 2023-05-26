let numberInput = document.getElementById('num')
let numberSelect = document.getElementById('selNum')
let num = []

function checar(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}



function adicionar() {
    num.push(numberInput.value)
    console.log(num)
    if (Number(num) >= 1 && Number(num) <= 100 || Number(num) <= 0) {
        alert('Valor não pode')
    } else {
        alert("Funcionando")
    }

}

