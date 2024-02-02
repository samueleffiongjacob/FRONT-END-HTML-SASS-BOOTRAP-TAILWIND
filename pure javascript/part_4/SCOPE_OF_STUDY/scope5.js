// advance arrays 

const array = [1,2,19,16]
const double =[]

const newArray = array.forEach((num) => {
    double.push(num * 2)
})

// short hand
const newArray1 = array.forEach(num => double.push(num *2))
console.log("forEach double : " , double)

// map , filter, reduce

const mapArray = array.map((num) => {
    return num * 2
})
console.log("map:", mapArray)

// Short hand
const mapArray1 = array.map(num => num * 2)
console.log("map:", mapArray)


const filter = array.filter((num) => {
    return num > 5
})

// short hand 

const filter1 = array.filter(num => num > 5)

console.log("filter : " ,filter, filter1)

// reduce
const reduceArray = array.reduce((accumulator, num) => {
    return  accumulator + num // accumulator can also be call acc
}, 5)

console.log("reduce:", reduceArray)