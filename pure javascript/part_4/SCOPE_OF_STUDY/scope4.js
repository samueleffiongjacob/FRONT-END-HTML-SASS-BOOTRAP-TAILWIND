const first = () => {
    const greet = 'hi'
    const second = () => {
        console.log(greet)
    }
    return second
}

const newfun = first()
newfun()

// closure - A function ran , the function excuted . it never going to excute again.
// But they going to remember that they are reference to those variable
// so the child scope always has access to the child variable

// Currying 
const multiply = (a,b) => a *b
const curriedMultiply = (a) => (b) => a * b
console.log(curriedMultiply(3)(4))
const multiplyby5 = curriedMultiply(5)(5);
console.log(multiplyby5) 

// compose
const compose = (f,g) => (a) => f(g(a))  
const sum = (num) => num + 1

const result = compose(sum, sum)( 5)

console.log(result)

// As a web developer avoid side effect and functional purity
var a = 1 
function b() {
    a = b
}