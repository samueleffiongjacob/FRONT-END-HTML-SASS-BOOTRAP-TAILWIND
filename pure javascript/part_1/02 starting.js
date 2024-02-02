// ARRAYS 

var list = [ 1,"2", "me" ,43]
console.log(list)

/* Method in list */

//1. index
var list1 = list.indexOf(3);
console.log(list1)

// 2 lenght
var list2 = list.length;
console.log(list2)

//3 pop ==> remove last value
var list3 = list.pop()
console.log(list3)

//4 shift() ==> remove the first value
var list4 = list.shift()
console.log (list4)
console.log(list)

// 5 push === arrange
var list5 = list.push("Hikmah")
console.log(list);

//6 sort ===> 
var sanes  = ["banana","apple", "pennis", "pussy"]
var sanes1 = sanes.sort()
console.log(sanes)
//7 reverse sort 
var sanes2 = sanes.reverse()
console.log(sanes2)

//=====================================================
// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array)

// 1. Remove the Banana from the array.
var array1 = array.shift()
console.log(array1)

// 2. Sort the array in order.
var array2 = array.sort()
console.log(array2)

// 3. Put "Kiwi" at the end of the array.
var array3 = array.push("kiwi")
console.log(array3)

// 4.Remove "Apples" from the array.
var array4 = array.splice(0, 1);
console.log(array4)
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
var list5 = array.reverse()
console.log(array)
//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array7 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array7[1][1][0])