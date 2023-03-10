function blue() {
    document.getElementById('container').style.backgroundColor = 'blue';
}

function green() {
    document.getElementById('container').style.backgroundColor = 'green';
}

function yellow() {
    document.getElementById('container').style.backgroundColor = 'yellow';
}

var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão']

var listaUl = document.createElement('ul')

var body = document.getElementsByTagName('body')

body[0].appendChild(listaUl)

var listaNoBody = document.getElementsByTagName('ul')

console.log(listaNoBody[0])

for(var i = 0; i < lista.length; i++) {

    var liFor = document.createElement('li')

    var textoLi = document.createTextNode(lista[i])

    liFor.appendChild(textoLi)

    listaNoBody[0].appendChild(liFor)
}

