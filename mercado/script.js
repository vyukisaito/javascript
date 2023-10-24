let texto = document.getElementById('texto')
let compra = document.getElementById('compras')
let compras = []

function add() {
    let item = document.createElement("option")
    item.text = `${texto.value}`
    compra.appendChild(item)
    texto.value = ""
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
}
exercise = 1

//While loop
let rep = 1;
while (rep <= 10) {
    console.log(`${rep}`);
    rep++;
}