/****
 * DOM Selectors
--------------
getElementsByTagName
getElementsByClassName
getElementById

querySelector
querySelectorAll

getAttribute
setAttribute

##Changing Styles
style.{property} //ok

className //best
classList //best

classList.add
classList.remove
classList.toggle

##Bonus
innerHTML //DANGEROUS

parentElement
children

##It is important to CACHE selectors in variables
*/

// finding element
document.getElementsByTagName("h1")
document.getElementsByClassName("second")[0]
document.getElementById

// querySelector
document.querySelector("h1")
document.querySelectorAll("li","hi")

//Attribute
// you need to select something before us can use attribute
document.querySelector("li")
document.querySelector("li").getAttribute("random");
document.querySelector("li").setAttribute("random","1000");

document.style;
document.style.background="yellow"

var h1 = document.querySelector("h1");
h1.className = "coolTitle"

document.querySelector("li").classList
document.querySelector("li").classList.add("coolTile")
document.querySelector("li").classList.remove("coolTitle")
document.querySelector("li").classList.toggle("coolTitle");

// Bonus
document.querySelector("h1");
document.querySelector("h1").innerHTML = "<strong> !!! </strong>";
document.querySelectorAll("li")[1];
document.querySelectorAll("li")[1].parentElement;
document.querySelectorAll("li")[1].parentElement.parentElement;
document.querySelectorAll("li")[1].parentElement.parentElement.children;

// cache variable selectors
var h1 = document.querySelector("h1")
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);