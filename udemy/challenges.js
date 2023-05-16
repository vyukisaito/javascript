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

const calcAvarege = (a, b, c) => (a + b + c) / 3;
//const dolphinAv = (44 + 23 + 71) / 3
//const koalaAv = (65 + 54 + 49) / 3
let scoreDolphin = calcAvarege(44, 23, 71).toFixed(1)
let scoreKoala = calcAvarege(65, 54, 49).toFixed(1)
console.log(`Dolphin scored: ${scoreDolphin}. Koalas scored: ${scoreKoala}`)

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        var winner = console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        var winner = console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
    } else {
        var winner = console.log('Its a draw');
    }
}
checkWinner(scoreDolphin, scoreKoala);
console.log('------------')

console.log('Test 2')
scoreDolphin = calcAvarege(85, 54, 41).toFixed(1);
scoreKoala = calcAvarege(23, 34, 27).toFixed(1);
console.log(scoreDolphin, scoreKoala);
checkWinner(scoreDolphin, scoreKoala);

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
///////////////////////////////////////////////////////

const bills = [125, 555, 44]

const calcTip = function (a, b, c) {
    const tip1 = a <= 300 && a >= 50 ? a * 0.15 : a * 0.2
    const tip2 = b <= 300 && b >= 50 ? b * 0.15 : b * 0.2
    const tip3 = c <= 300 && c >= 50 ? c * 0.15 : c * 0.2
    const tips = [tip1, tip2, tip3]
    const total = [tip1 + a, tip2 + b, tip3 + c]
    console.log(`The tip value: ${tips.join(", ")}; The bill values: ${bills.join(", ")}; The total value: ${total.join(", ")}`);
    //console.log(`The tip value:${tips}; The bill values: ${bills}; The total value: ${total}`)


    //console.log(`The bills was ${bills}, the tip was ${tips}, and the total value is `)
}
calcTip(bills[0], bills[1], bills[2])
//console.log(bills[0])
//bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2

//Maneira do professor
const calcTip2 = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

const bills2 = [125, 555, 44];
const tips2 = [calcTip2(bills2[0]), calcTip2(bills2[1]), calcTip2(bills2[2])];
const totals = [bills2[0] + tips2[0], bills2[2] + tips2[2], bills2[2] + tips2[2]];

console.log(bills2, tips2, totals);

/////////////////////////////////////////////////////////
console.log('-----------------------------------------')
///////////////////////////////////////////////////////
