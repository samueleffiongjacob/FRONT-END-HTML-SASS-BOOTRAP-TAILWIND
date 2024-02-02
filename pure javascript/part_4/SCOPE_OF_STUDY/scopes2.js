// ternary operator

//condition? expr1:expr2

function isUserValid(bool){
    return bool
}

// tenary operator
var answer = isUserValid(true) ?  "you may enter" : "ACCESS DENIED"// or true
console.log(answer)

var automatedAnswer =
    "your account # is not available" + (isUserValid(true) ? "1234": "not available") // or fasle

console.log(automatedAnswer)

// tenary opertor is better tan this
function condition(){
    if (isUserValid){
        return "You may enter";
    } else {
        return "ACCESS DIENED"
    }
}

// swutch
var answer2 = condition();

// switch statement
function moveCommand(direction){
    var whatHappens;
    switch (direction){
        case "forward":
            whatHappens = "you encounter a monster";
            break
        case "back":
            whatHappens = "you arrived home"
            break
        case "right":
            whatHappens = "you found a river"
            break
        case "left":
            whatHappens = "you run into a troll"
            break
        default:
            whatHappens = "please enter a valid direction "
    }
    return whatHappens;
}

console.log(moveCommand("left"))