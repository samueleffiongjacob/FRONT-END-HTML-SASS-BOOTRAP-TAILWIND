//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  }
}
// answer 
function winBattle(bool) {
  return bool;
}
var experiencePoints = winBattle(true) ? 10 :1
console.log(experiencePoints)

//Using this function, answer the questions below:
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

console.log(moveCommand("forward"))

//#2 return value when moveCommand("forward");
      // undefine

//#3 return value when moveCommand("back");
        // you arrived home

//#4 return value when moveCommand("right");

    // you found a river

//#5 return value when moveCommand("left");

    // you run into a troll

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
