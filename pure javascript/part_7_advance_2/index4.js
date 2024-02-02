// How does javascript works
// javascript is a  single thread language that can be non blocking 
//single threaded means that it has only have one call stack and one call stack only , u can only do one thing at a time.
//what is A program

// - allocate memory
// - parse and excute
// javascript Engine:
// -- memory heap: this is were memory is been allocated for every program 
// -- callstack : were code are been executed or displayed with console.log

//synchronous programming simply means line one get executed 
// line 2 get executed and line 3 get executed 

// recursion mean a function that calls it self
function foo(){
    foo()
}
foo()
// this just get loops over and over again 

// asynchronous programming simply means multiple line of code been excuted

console.log('1') // this first
setTimeout(()=>{
    console.log ('2')
},2000) // 2000 is in millisecond and runs last
console.log('3')// runs second 


// javascript needs more than the javascript engine i.e.memory heap,callstack to run .
// javascript needs a javascript environment:is build on top of the browser 
// 1) javascript Engine 
// 2) web Api:Dom,ajax(httpRequests),Timeout(setTimeout)
// 3) event loop <----- callback queue :onclick , Onload, onDone.

// let see it full
// call stack
//web api
// call back queue
// event loop
// setTimeout delay a program by a specific time specified. 
