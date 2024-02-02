// how to use object without changing ..
// let say cloning it

var a =5
var b = a
b++

let obj = {a:"a",b:"b",c:"c"};
let clone = Object.assign({}, obj); // or below
let clone1 = {...obj}

obj.c = 5;
console.log(obj)
console.log("verible did no change:",clone)
console.log(clone1)

// shallow clone : this a memory cloning of varibles
let obj1 = {
    a: 'a',
    b: "b",
    c: {
        deep : 'try and copy me'
    }
};
let superclone = JSON.parse(JSON.stringify(obj1)) // SUPER CLONE

obj1.c.deep ='hahaha';
console.log("VARABLE CHANGE BECAUSE IT SHALLOW CLONE",obj1)
console.log("VARABLE did not change BECAUSE IT Json strignify CLONE",superclone)