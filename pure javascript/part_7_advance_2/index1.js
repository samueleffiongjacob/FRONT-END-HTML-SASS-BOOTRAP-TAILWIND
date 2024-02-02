// Advance javascript 
// imagine we a basket and it contain a lots . 

const basket  = ['apple', 'orange', 'graps'];
const detailedBasket = {
    apple :5,
    orange: 10,
    grapes: 15
}

// for loop recall in loop
for(let i =0; i<basket.length; i++){
    console.log(basket[i])
}// i++ stands for increment 

basket.forEach(item => {
    connsole.log(item)
});

// now the advance loops
// key word is Iterating : it means we are going one by one in an item.
// Iterating is can be done in js on what is  called Iterable 
// iterating : arrays ,  strings 
//1)  for of is for arrays 

for (item of basket){
    console.log(item)
}
//2) for in : this works with objects properties . 

// enumerating : this means going one by one in and object
// enumerating can be done in js on what is call enumerable 
// enumerating is for objects 


for (item in detailedBasket){
    console.log(item)
}

// note : under hood arrays are objects 