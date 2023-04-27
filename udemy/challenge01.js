var MarkW = 78
var MarkT = 1.69
var JohnW = 95
var JohnT = 1.95
var IMC = (MarkW / (MarkT * MarkT)).toFixed(1)
var IMCJ = (JohnW / (JohnT * JohnT)).toFixed(1)

const markHigherBMI = IMC > IMCJ
console.log(markHigherBMI, IMC, IMCJ)