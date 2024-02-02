// Es2020
// BigInt : stands for big interger
// Nulllish coalescing operation ??
// optional chaining operator?
// promise.allsettled 
//globalThis

Number.MAX_SAFE_INTEGER // old one ..

// bigInt 
1n + 2n 
//3n 
typeof 3n

// Optional chaining operation?
let team = {
    peace : {
        speech : 'mouse kingmouse',
        heights : 54,
        weight :0.4
    }
}

let Weight = team.peace.weight
console.log('weight :' ,Weight)


let team1  = {
    peace1 : {
        speach : 'mouse kingmouse',
        height:45,
        weight:223,
        power:0
    }
}

// old way
if(team1.peace && team1.peace.team1.peace.weight){
    let weight2= team1.peace.weight
    console.log(weight2)
}else{
    let weight2 = undefine
    console.log(weight2)
}// never runs this checking  it the old way

// new way
let weight3 = team1?.peace1?.weight
console.log(weight3)

// Nullish coalescing operator??
let power = team1?.peace1?.power ?? 'no power'
console.log(power)