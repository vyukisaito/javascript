var x = 9
var y = 8
/*escopo global, essa var vai estar em tudo, diferente da local */

console.log(x, y)
function teste(){
    var z = 3
    /**escopo local, essa var só vale dentro dessa função */

    console.log(z)
}
teste()

if(true) {
    var z = 6
    /*Escopo global */
}
console.log(z)