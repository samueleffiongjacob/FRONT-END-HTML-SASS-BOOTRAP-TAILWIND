// es10
//.flat()

const array  = [1,2,3,4,5]
array.flat() // this return the same thing

// now let repeat it with nested arrays
const array1 = [1,[2,3],[4,5]]
array1.flat() // this returns [1,2,3,4,5]
const ma = array1.flat() // this returns [1,2,3,4,5]

const array2 =[1,2,[3,4,[5,6]]]
array2.flat() // this return [1,2,3,4,5,6]

const array3 = [1,2,[3,4,[5,6]]]
array3.flat(2) // in the bracket include the steps e.g, 1 or 2 or 3

const entries =['bob','sam',,,,,,,,'hilmaka']
entries.flat()

// flatmap : 
const flatmap3 = array3.flatMap(creature => creature +  6)
console.log(flatmap3)
// flatmap allows us to use the basic map functions  to index a results to depth of one


// trimstart() and trimend()

const userEmail = '                           bidami@gmail.com'
const UserEmail1 = 'bonnyjack@gamil.com                        '

console.log(userEmail.trimStart())
console.log(UserEmail1.trimEnd())

// FromEntries: it transform a list of key value pair's into objects.

const userProfil = [['commaderSam', 23],['derekZlander',40],['HanselWe',50]]
const obj = Object.fromEntries(userProfil) // Object.FrmEntries  : this is es10
Object.entries(obj)// es6 giving us the same thing back as in es10


/****
 * try{
 * }catch{
 *     }
*/

try{
    true + 'hi'
} catch{
    console.log('you messed up')
}

// the above is correct so it would run with out getting to the next line 

// the below would run instead  to throw an error it would return the catch blocks 

try{
    bob + 'hi'
} catch (error){
    console.log('your messed up in the code' + error)
}
// note : always  pass a parameter in the catch block to view errors 
