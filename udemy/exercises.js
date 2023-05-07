/** 
function logger() {
    console.log('Mu name is Yuki')
}
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice /*with this return, we can return any vallue from the function. So the juice can be used any else in the code/*
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice) 
*/


//Function Declaration
function calAge1(birthYear) {
    return 2023 - birthYear;
    /**this function is called, funcrion declaration */
}
const age1 = calAge1(2008)/*this is called argument o que tá dentro do perentese*/
console.log(age1)

//Function Expression
const calcage2 = function (birthYear2) {
    return 2023 - birthYear2
    /**this one is anonymas function or functio expretion */
}
const age2 = calcage2(2008)
console.log(age1, age2)