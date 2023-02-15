let roupas = [
    {produto: 'Camisa', preco: 25, cor: 'Amarelo'},
    {produto: 'Calça', preco: 80, cor:'Azul'}, 
    {produto: 'Jaqueta', preco: 100, cor:'Preto'},
    {produto: 'Camiseta', preco: 15, cor:'Vermelho'},
    {produto: 'Meia', preco: 10, cor:'Azul'},
]

let precoMaiorQue50 = roupas.filter((roupa) => {
    return roupa.preco >= 50
}) 

console.log(precoMaiorQue50)

setTimeout(() => {
    console.log('Deu tempo')
}, 150)