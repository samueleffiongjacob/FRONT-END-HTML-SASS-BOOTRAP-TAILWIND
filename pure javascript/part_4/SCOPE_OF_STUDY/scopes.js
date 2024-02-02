// SCOPE

// by default u are always in the root scope
var fun =5;

function funFunction(){
    //child scope
    var fun = "hellloooo";
    console.log(1,fun)
}

function funnerFunction(){
    // child scope
    var fun = "Byeeeee";
    console.log(2,fun);
}

function funnestFunction(){
    var fun = "AHHHHHHHHHHHH";
    console.log(3,fun);
}

console.log("window : ", fun);
funFunction()
funnerFunction()
funnestFunction()

console.log(fun)

