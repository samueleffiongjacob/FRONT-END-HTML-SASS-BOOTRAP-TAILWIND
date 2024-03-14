const promise = new Promise((resolve, reject) => {
  if(true) {
    resolve('Stuff Worked');
  } else {
    reject('Error, it broke');
  }
});

promise
    .then(result => {
        throw Error;
        return result + '!';
    })
    .then(result2 => {
        console.log(result2);
    })
    .catch(() => console.log('error!'));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hii');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Pookie');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Is it me you are looking for?');
});

const t = promise.finally([promise,promise2, promise3, promise4])
.then(value => {
    console.log(value);
});

// real work application

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];
Promise.all(urls.map(url => { 
  return fetch(url).then(resp => resp.json())
})).then(array => {
  console.log('users',array[0]);
  console.log('posta',array[1]);
  console.log('albums',array[2]);
}).catch(() => console.log('error'));


// ASYNC AWAIT

const ne = async function PlayerStart() {
  const firstMove = await MovePlayer(100, 'left') // pause
  const firstMove1 = await MovePlayer(400, "left") // pause
  const firstMove2 = await MovePlayer(10, "Right") // pause
  const firstMove3 = await MovePlayer(300, "left") // pause
}

// example  promis

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(console.log)

// async await

async function fetchUser(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  console.log(data)
}

const urls1 = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function(){
  try {
    const [users, posts, albums ] = await Promise.all(urls1.map(url =>
      fetch(url).then(res=>res.json())
      ))
      console.log('users',array[0]);
      console.log('posts',array[1]);
      console.log('albums',array[2]);
  } catch (error) {
    console.log('oops', error)
  }
  return getData();
}
Promise.all(urls.map(url => { 
  return fetch(url).then(resp => resp.json())
})).then(array => {
  console.log('users',array[0]);
  console.log('posta',array[1]);
  console.log('albums',array[2]);
}).catch(() => console.log('error'));

// es6 object spread operator
const array = [1,2,3,4,5];
function sum(a,b,c,d,e){
  return a+b+c+d+e;
}
console.log(sum(...array));


// es9 or es2018 object spread operator new
// Object spread operator
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40
}

const { tiger, ...rest } = animals; 

// new feature : finally()
const urls2 = [
  'https://swapi.dev/api/people/1/',
  'https://swapi.dev/api/people/2/',
  'https://swapi.dev/api/people/3/',
  'https://swapi.dev/api/people/4/'
]

Promise.all(urls2.map(url => { 
  return fetch(url).then(people => people.json())
}))
.then(array => {
  console.log('1',array[0])
  console.log('2',array[1])
  console.log('3',array[2])
  console.log('4',array[3])
})
.catch(err => console.log('error',err))
.finally(() => console.log('extra'));


// for await of
const loopThroughUrls = url =>{
  for (url of urls){
    console.log(url)
  }
}


// new way
const getData2 = async function() {
  const arrayofPromises = urls.map(url => fetch(url));
  for await (let request of arrayofPromises){
    const data = await request.json();
    console.log(data)
  }
}

console.log(getData2())

// es2020
// allsettled() : this does not care about reject or settle


//old
const promiseOne = new Promise((resolve,reject) => 
        setTimeout(resolve,3000))
const PromiseTwo = new Promise((resolve,reject)=>
        setTimeout(reject,3000))


const all = Promise.all([promiseOne,PromiseTwo]).then(data => console.log(data))
                .catch(e => console.log('something fail'))



const promiseOne1 = new Promise((resolve,reject) => 
        setTimeout(resolve,3000))
const PromiseTwo2 = new Promise((resolve,reject)=>
        setTimeout(reject,3000))


const all1 = Promise.allSettled([promiseOne,PromiseTwo]).then(data => console.log(data))
                .catch(e => console.log('something fail'))