const promiseOne = new Promise((resolve,reject) => 
        setTimeout(resolve,3000))
const PromiseTwo = new Promise((resolve,reject)=>
        setTimeout(reject,3000))


const all = Promise.allSettled([promiseOne,PromiseTwo]).then(data => console.log(data))
                .catch(e => console.log('something fail'))

console.log("promise 1: ",promiseOne,"\n","promise 2: ",PromiseTwo, "\n", "all:", all)