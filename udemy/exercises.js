function logger() {
    console.log('Mu name is Yuki')
}
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice /*with this return, we can return any vallue from the function. So the juice can be used any else in the code*/
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)