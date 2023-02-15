function verificar() {
    let start = document.getElementById('start')
    let end = document.getElementById('end')
    let pass = document.getElementById('pass')
    let res = document.getElementById('d5')

    if (start.value.length == 0 || end.value.length==0||pass.value.length==0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados!')
    }else {
        res.innerHTML = 'Contando: <br> '

        let s = Number(start.value)
        let e = Number(end.value)
        let p = Number(pass.value)
        if (p <= 0) {
            window.alert('Passo inválido!')
        }
        if (s < e)
            //contagem crescente
            {for(let c = s; c <=e ; c +=p) {
            res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += '\u{1F3C1}'
         }else {
            //contagem regressiva
            for(let c = s; c>=e; c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += '\u{1F3C1}'
         }
    }
       
    
    
}
