/***
 * loop: a way of automating things
 * Types of loop:
 * 1. for loop
 * 2. while
 * 3. do
 * 4. forEach (new in ECMAScript 5)
 * i : stands for index and it is a random variable
 * 
**/

var todos = [
    "clean room",
    "brush teeth",
    "excercise",
    "study javascript",
    "eat healthy"
];


var todosq = [
  "clean room",
  "brush teeth",
  "excercise",
  "study javascript",
  "eat healthy",
];

// counting the lenght of the list above using for loop
for (var i = 0; i < todos.length; i++){
    console.log(i);
}

// add ! to todo list
for (var i = 0; i < todos.length; i++){
    // console.log(todos[i] + "!");
    todos[i] = todos[i] + "!";
}

// forEach(function)

todos.forEach(function(i){
    console.log(i)
})

todos.forEach(function () {
  console.log(i);
});

todos.forEach(function (todo, i) {
  console.log(todo, i);
});

// to cross things of the list
var todoslenght = todos.length
for (var i = 0; i < todoslenght; i++) {
  todos.pop();
}

// while loop
var couunterOne = 0;
while (couunterOne < 10 ){
    console.log(couunterOne);
    couunterOne ++
}

var couunterOne = 10;
while (couunterOne > 0) {
  console.log(couunterOne);
  couunterOne--;
}

var couuntertwo = 10
do {
    console.log(couuntertwo)
    couuntertwo --;
} while (couuntertwo > 0)

/***
 * different while loop and do
 * while loop checks conditions first before doing
 * do loop does it without checking condition
 * most of time u would do for loop
 */

// creating a function out side forEach

function logtodos(todos, i){
    console.log(todos, i);
}

todos.forEach(logtodos);