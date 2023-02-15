function exibir(num) {
    console.log('A operção resultou em: ' + num)
}

function soma(a, b, callback) {
    var operação = a + b
    callback(operação)
}

function multiplicação(a,b, cb) {
    var operação = a * b
    cb(operação)
}

soma(2, 2, exibir)

multiplicação(2, 4, exibir)