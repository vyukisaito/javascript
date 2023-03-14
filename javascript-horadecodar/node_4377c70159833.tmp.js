let x = 5 
x = 12

const y = 34

console.log(x, y)

if(true) {
    let x = 20
    const y= 36
    /**Ao invés do var, esse fica no escopo local */
    
    console.log(x, y)
}

console.log(x)

for (r = 10; r < 120; r--) {

    console.log(r)
}