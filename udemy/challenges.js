//Challenge 01

var MarkW = 78
var MarkT = 1.69
var JohnW = 95
var JohnT = 1.95
var IMC = (MarkW / (MarkT * MarkT)).toFixed(1)
var IMCJ = (JohnW / (JohnT * JohnT)).toFixed(1)

const markHigherBMI = IMC > IMCJ
console.log(markHigherBMI, IMC, IMCJ)


/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
///////////////////////////////////////////////////////

//Chalenge 02

if (IMC > IMCJ) {
    console.log(`Mark's BMI (${IMC}) is higher then John's (${IMCJ})!`)
} else {
    console.log(`John's (${IMCJ}) BMI is higher then Mark's (${IMC})!`)
}

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
///////////////////////////////////////////////////////

//Challenge 03
var dolphinsAverage = (96 + 108 + 89) / 3
var koalasAverage = (88 + 91 + 110) / 3
if (dolphinsAverage > koalasAverage) {
    console.log(`Dolphins wins (${dolphinsAverage.toFixed(1)}) Koalas (${koalasAverage.toFixed(1)}) `)
} else if (dolphinsAverage === koalasAverage) {
    console.log(`We have a draw, whit Dolphins scoring: ${dolphinsAverage.toFixed(1)} and koalas: ${koalasAverage.toFixed(1)} `)
} else {
    console.log(`Koalas wins (${koalasAverage.toFixed(1)}) Dolphins (${dolphinsAverage.toFixed(1)}) `)
}

var dolphinsAverage2 = (97 + 100 + 90) / 3
var koalasAverage2 = (100 + 95 + 100) / 3

console.log(dolphinsAverage2.toFixed(1), koalasAverage2.toFixed(1))

if (dolphinsAverage2 > koalasAverage2 && koalasAverage2 >= 100) {
    console.log('Dolphins win')
} else if (koalasAverage2 > dolphinsAverage2 && koalasAverage2 >= 100) {
    console.log('Koalas win')
} else if (dolphinsAverage2 === koalasAverage2) {
    console.log("It's a draw")
} else {
    console.log("The teams din't did 100 or more points")
}

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
///////////////////////////////////////////////////////

//Challenge 04

var bill = 430

console.log(`The bill is: ${bill} the tip is: ${bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2} the total is: ${bill >= 50 && bill <= 300 ? bill * 0.15 + bill : bill * 0.2 + bill}`)

//Jeito do outro cara
const bill2 = 275;
const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.2;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value is ${bill2 + tip2}`)

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
///////////////////////////////////////////////////////

//Challenge 05

const calcAverage = (dolphin, koala) => {
    return `Dolphins scored ${dolphin} points and Koalas ${koala} points`;
}
console.log(calcAverage((44 + 23 + 71) / 3, (65 + 54 + 49) / 3))

function chekWinner(dolphinAveragee, koalasAveragee) {
    if (dolphinAveragee >= koalasAveragee * 2) {
        calcAverage
    }
}