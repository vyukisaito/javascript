const stringCounter = (letter, string) => {
    var counter = 0
    for(var i in string){
        if (letter == string[i]) {
            counter++
        }
    }
    if (counter === 1) {
        console.log(`Essa letra aparece um total de ${counter} vez`)
    } else if (counter === 0){
        console.log(`Essa letra não aparece`)
    } else {
        console.log(`Essa letra aparece um total de ${counter} vezes`)
    }
    
}

stringCounter('u', 'Yuuki')