let dice = Math.trunc(Math.random() * 6) + 1;
let num = document.getElementById('num')

function dado() {
    num.innerHTML = dice
}