var age = prompt("enter your age")

if (Number(age) < 18){
	alert(`sorry at this age {age} you are too young to drive`)
} else if (Number(age) > 18){
	alert(`you are age : {age} and you are over qualified to drive`)
} else if (Number(age) === 18){
	alert('your are age : {age} and you can drive ')
} else {
	alert(`please enter a number e.g: 1,3,4, not letters`)
}

// put the above in a function
function checkDriverAge(){
	var age = prompt("enter your age");

  	if (Number(age) < 18) {
    alert(`sorry at this age {age} you are too young to drive`);
  } else if (Number(age) > 18) {
    alert(`you are age : {age} and you are over qualified to drive`);
  } else if (Number(age) === 18) {
    alert("your are age : {age} and you can drive ");
  } else {
    alert(`please enter a number e.g: 1,3,4, not letters`);
  }
}

// modifing the above to work on console

function checkref(age){
	if (Number(age) < 18) {
    return(`sorry at this age {checkref} you are too young to drive`);
  } else if (Number(age) > 18) {
    return(`you are age : {age} and you are over qualified to drive`);
  } else if (Number(age) === 18) {
    return("your are age : {age} and you can drive ");
  } else {
    return(`please enter a number e.g: 1,3,4, not letters`);
  }
}

console.log(checkref(1))