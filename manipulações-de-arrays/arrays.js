const produtos = [
    {id: 1, nome: 'detergente', valor: 3.00, categoria: 'limpeza'},
    {id: 2, nome: 'teclado mecânico', valor: 200.00, categoria: 'tecnologia'},
    {id: 3, nome: 'caneta', valor: 2.00, categoria: 'papelaria'},
    {id: 4, nome: 'pão', valor: 4.00, categoria: 'alimento'},
]


const total = produtos.reduce((acumulado, p) => acumulado + p.valor, 0);


console.log(total)