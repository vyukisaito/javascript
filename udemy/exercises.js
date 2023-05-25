/*
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
    return juice //with this return, we can return any vallue from the function. So the juice can be used any else in the code
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
    //this function is called, funcrion declaration 
}
const age1 = calAge1(2008)///*this is called argument o que tá dentro do perentese
console.log(age1)

//Function Expression
const calcage2 = function (birthYear2) {
    return 2023 - birthYear2
    // /this one is anonymas function or functio expretion 
}
const age2 = calcage2(2008)
console.log(age1, age2)

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
////////////////////////////////////////////////////////

//Arrow function (short way to write a function expression)
const calcAge3 = birthYear => 2023 - birthYear; ///*com uma linha da função, não é necessário usar o 'return' 
const age3 = calcAge3(2008);
console.log(age3);

const yearsRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    //return retirement; (se tivesse só um parametro, seria isso)
    return `${firstName} retires in ${retirement} years`;
} ///*quando tem mais de uma linha na função, é necessário utilizar o 'return' 
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

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
////////////////////////////////////////////////////////

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    ['Michael', 'Peter', 'Steven']
];

const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schemedtmann',
    age: 2037 - 1991,
    friendsss: ['Michael', 'Peter', 'Steven']
}
console.log(jonasObject, jonasArray) 
const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schemedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonasObject);

console.log(jonasObject.lastName);//its a way to call an specific name
console.log(jonasObject['lastName']);//another way

const nameKey = 'Name';
console.log(jonasObject['first' + nameKey])//we can do a expression in this way
console.log(jonasObject['last' + nameKey])

const interestedIn = prompt('What do you want know about Jonas? firstName, lastName, age, job, friends.')
console.log(jonasObject.interestedIn) // Esse não vai funcionar
console.log(jonasObject[interestedIn])// esse vai pois é o ideal para expressões

if (jonasObject[interestedIn]) {
    console.log(jonasObject[interestedIn])
} else {
    console.log('Wrong request!')
}

jonasObject.location = 'Portugal';
jonasObject['twitter'] = '@jonasschmedtman';
console.log(jonasObject)

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

//calcAge: function(birthYear) {
    //    return 2037 - birthYear;
    //}
        
    //calcAge: function () {
        //    console.log(this); //é como se fosse o object todo
        //    return 2037 - this.birthYear
        //}
            
        calcAge: function () {
            this.age = 2037 - this.birthYear;
            return this.age;
            //Podemos usar o this para add um novo elemento no object
        },
            
            getSummary: function () {
                return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
            }
    
    };
//console.log(jonas.calcAge(1991))
console.log(jonas.calcAge())

console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.getSummary())

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 3; rep++) {
    console.log(`Punch number ${rep}`)
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = []

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i],)

    // Filling types array
    //types[i] = typeof jonas[i]
    types.push(typeof jonas[i])
}
console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i])
}
console.log(ages)

// conrinue and break
console.log('----- Only Strings ---------')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('----- Only BREAK ---------')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
*/

//Loop backwards
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i])

    // Filling types array
    //types[i] = typeof jonas[i]
    //types.push(typeof jonas[i])
}
//console.log(types)

//Loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
}

//While loop
let rep = 1;
while (rep <= 10) {
    console.log(`${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    //se o dado não for 6 ele vai rodar esse console
    console.log(`You rolled a ${dice}`);
    //depois vai pra esse debaixo e volta para o console
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Loop ends`)
    }
}
//teste