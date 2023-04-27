//Challenge 01
var MarkW = 78
var MarkT = 1.69
var JohnW = 95
var JohnT = 1.95
var IMC = (MarkW / (MarkT * MarkT)).toFixed(1)
var IMCJ = (JohnW / (JohnT * JohnT)).toFixed(1)

const markHigherBMI = IMC > IMCJ
console.log(markHigherBMI, IMC, IMCJ)
//---------------------------------------------
//Chalenge 02
if (IMC > IMCJ) {
    console.log(`Mark's BMI (${IMC}) is higher then John's (${IMCJ})!`)
} else {
    console.log(`John's (${IMCJ}) BMI is higher then Mark's (${IMC})!`)
}
//-----------------------------------------------
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

