const btn_diminuir = document.getElementById('dim')
const btn_resetar = document.getElementById('res')
const btn_aumentar = document.getElementById('aum')
const resultado = document.getElementById('resultado')

let contador = 0

resultado.innerHTML = contador

btn_diminuir.addEventListener('click', function(){
    resultado.innerHTML = --contador
})

btn_aumentar.addEventListener('click', function(){
    resultado.innerHTML = ++contador
})

btn_resetar.addEventListener('click', function(){
    resultado.innerHTML = contador = 0
})