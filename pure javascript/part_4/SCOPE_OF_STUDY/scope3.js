//  Ecma International  

// Ecmascript === Javascript

//Es6  ===> Babel : allow all javascript to use write away

// first fueture
//let =  can be change
//const = u can't be updated 

const player = 'bonny'
let experience = 200
let wizardlevell = false

if (wizardlevell > 90){
    let wizardlevell = true;
    console.log("inside", wizardlevell)
}

console.log("outside", wizardlevell);

const obj = {
    player:"bonny",
    experience: 100,
    wizardlevell: false
}

// the object inside can be change but the varible it self cant be change
console.log(obj.wizardlevell = true)

//Destructuring
// const {player, experience} = obj;
// let {wizardlevell}= obj

// Object propertiest
const a = "simon";
const b =true;
const c = {};

const objw = {
    a,
    b,
    c
}
// const names ="sally";
// const age = 34;
// const pet = "horse";

// template string
// const greeting = "hello" + name + "you seen to be doing" + greeting + "!"
//const greetinglest = `hello ${names} you seen to be ${age-10}, what a looks lovely ${pet}`
//console.log(greetinglest)

// default argument
function greet(names = "himma", age =30, pet ="cat"){
    return `hello ${names} you seen to be ${age-10}, what a looks lovely ${pet}` 
}

console.log(greet())

///symbol
let sym1 = Symbol()
let sym2 = Symbol("foo");
let sym3 = Symbol("fool");

let sym4 = sym2 === sym3
console.log(sym4)


// arrow functions
function add(a,b){
    return a + b;
}

const add1 = (a,b) => a + b;
console.log(add(2,5))