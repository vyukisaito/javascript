
function logger() {
    console.log('Mu name is Yuki')
}
logger()
logger()
logger()

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
///////////////////////////////////////////////////////

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice /*with this return, we can return any vallue from the function. So the juice can be used any else in the code*/
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
////////////////////////////////////////////////////////

//Function Declaration
function calAge1(birthYear) {
    return 2023 - birthYear;
    /**this function is called, funcrion declaration */
}
const age1 = calAge1(2008)/*this is called argument o que tá dentro do perentese
console.log(age1)*/

//Function Expression
const calcage2 = function (birthYear2) {
    return 2023 - birthYear2
    /**this one is anonymas function or functio expretion */
}
const age2 = calcage2(2008)
console.log(age1, age2)

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
////////////////////////////////////////////////////////

//Arrow function (short way to write a function expression)
const calcAge3 = birthYear => 2023 - birthYear; /*com uma linha da função, não é necessário usar o 'return' */
const age3 = calcAge3(2008);
console.log(age3);

const yearsRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    //return retirement; (se tivesse só um parametro, seria isso)
    return `${firstName} retires in ${retirement} years`;
} /*quando tem mais de uma linha na função, é necessário utilizar o 'return' */
console.log(yearsRetirement(2008, 'Yuki'));
console.log(yearsRetirement(1992, 'João'))

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
////////////////////////////////////////////////////////

//Function callin other function
function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3))