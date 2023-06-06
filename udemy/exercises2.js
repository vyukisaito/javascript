/*
const calcTemp = function(temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue

        if (temps[i] > max) max = temps[i]
        if (temps[i] < min) min = temps[i]
    

    }
    
    console.log(max, min);
    return max - min
};
const amplitude = calcTemp([3, 43, 4, 5, 67, 23, -12, 53, 'error']);
console.log(amplitude);

const calcTemp2 = function(t1, t2) {
    const temps = t1.concat(t2)
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue

        if (temps[i] > max) max = temps[i]
        if (temps[i] < min) min = temps[i]
    

    }
    
    console.log(max, min);
    return max - min
};
const amplitudes = calcTemp2([3, 43, 4, 5, 67], [2, 12, 53, 'error']);
console.log(amplitudes);

const measureKelvin = function () {
    
    const measurement = {
        type: 'temp',
        unit:  'celsius',
        value: prompt('Degrees Ceksius:')
    };
    console.table(measurement)
    
    const kelvin = Number(measurement.value) + 273;
    return kelvin;
};
console.log(measureKelvin());
*/

const printForecast = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}º in ${i + 1} days...`)
    }
}
printForecast([17, 21, 23]);