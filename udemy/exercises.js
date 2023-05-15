
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

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
////////////////////////////////////////////////////////

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends[friends.length - 1]); //Outra maneira de se fazer
//First elemente = 0; Second element = 1...
console.log(friends.length); //Serve para saber a quantidade de elementos

friends[2] = 'Jay'; //Substitui o 'Peter para 'Jay'
console.log(friends)
//Porém não se pode substiruir uma array inteira

const years = new Array(1958, 1962, 1970, 94, 2002);

const firstName = 'Yuki';
const yuki = [firstName, 'São Paulo', 2023 - 2008, friends]
//Em uma array podemos colocar variavei, outras arrays, números, expressões;

const calcuAge = function (birthYear) {
    return 2023 - birthYear;
}
const y = [1990, 1967, 2002, 2010, 2018];
const agee1 = calcuAge(y[0]);
const agee2 = calcuAge(y[1]);
const agee3 = calcuAge(y[4]);
console.log(agee1, agee2, agee3);

const ages = [calcuAge(y[0]), calcuAge(y[1]), calcuAge(y[4])];
//transformando em array a resposta
console.log(ages);

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
////////////////////////////////////////////////////////

// Add Elements
const friend = ['Michael', 'Steven', 'Peter'];
const newF = friend.push('Jay'); //adiociona um valor na array
console.log(friend);
console.log(newF);

friend.unshift('Jhon'); //Coloca o valor em primeiro
console.log(friend);

// Remove Elements
friend.pop(); // Last element
const pop = friend.pop();
console.log(pop);
console.log(friend);

friend.shift(); //First element
console.log(friend)

//Localizar tal elemento
console.log(friend.indexOf('Steven'))
console.log(friend.indexOf('Bob'))

//Maneira mais moderna de se localizar ou saber se tem ou não
console.log(friend.includes('Steven'))
console.log(friend.includes('Bob'))
if (friend.includes('Steven')) {
    console.log('You have a frind called Steven')
} else {
    console.log('You dont have a friend with this name')
}