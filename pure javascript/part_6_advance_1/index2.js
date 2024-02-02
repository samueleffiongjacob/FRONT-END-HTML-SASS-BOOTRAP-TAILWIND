// Type  caution
x = 1 == '1' // this means the launguge convert types to it type
y = 1===1 // alway us ===  BECAUSE OF TYPE CUSTION
/**     see more : 
 *  https://dorey.github.io/JavaScript-Equality-Table/ 
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 *  https://262.ecma-international.org/5.1/#sec-11.9.3
 *  https://www.digitalocean.com/community/tutorials/using-bitwise-operators-in-javascript
 *  https://www.w3schools.com/js/js_bitwise.asp
* */

console.log()

//Unary - Operator
console.log(Object.is(-0,+ 0))//


// es7
// ES7 THat was introduce was beter than es6

// include method: only works on browser
const pets = ['cat','pet', 'bat']
console.log(pets.includes('dog'))
 
console.log(pets.includes('bird'))
const square = (x) => x**2 // squre
const cube = (y) => y**3 // cube
console.log(square(4))
console.log( cube(3))

// es7 is always releasing small change

// es8: this a trilling space
//1
//.padstart() // this would add trilling space before the later

// .padEnd()   // this would add trilling space after before later

console.log('Turtle'.padStart(10))

console.log('turtle'.padEnd(80))

//2
// trailing commas in function's parameter lists and calls
const fun = (a,b,c,d,) => {
    console.log(a);
}
fun(1,2,3,4,)

//object.values
//object.entries
//object.keys

let obj = {
    username0: 'santa',
    username1: "sta",
    username2: "statet"
}

// before
Object.keys(obj).forEach((key,index) =>{
    console.log(key,obj[key])
})

// es8
Object.values(obj).forEach(value => {
    console.log(value)
})

Object.entries(obj).forEach(value => {
    console.log(value)
})

Object.values(obj).map(value => {
    return value[1] + value[0].replace('username', '')
})

// async await