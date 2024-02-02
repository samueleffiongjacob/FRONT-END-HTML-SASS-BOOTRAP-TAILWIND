// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// solution
//console.log(dragons.includes("john"))

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
//solution
console.log(dragons.filter(name => name.includes('John'))) // ['Johnathan']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
//solution
const power100 = (num) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
//solution
power100(10000) // Infinity