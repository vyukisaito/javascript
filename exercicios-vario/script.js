const cores = ['red', 'blue', 'green', 'yellow', 'gray', 'black', 'brown', 'orange', 'white', 'lightgray'];



document.querySelector('.cor').addEventListener('click', function() {
    const aleatorio = Math.trunc(Math.random() * cores.length) + 1;
    document.querySelector('.aleatorio').style.backgroundColor = cores[aleatorio]
    console.log(aleatorio); 
})
