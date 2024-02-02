// debugging
const flattend0=[[0,1],[2,3],[4,5]].reduce(
    (a,b) =>a.concat(b),[]
);

const flattend = [[0,1],[2,3],[4,5]].reduce((accumulator,array)=>{
    debugger 
    return accumulator.concat(array)
},[]);