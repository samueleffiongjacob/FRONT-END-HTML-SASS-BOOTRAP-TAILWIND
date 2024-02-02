var database = [
    {
        username: "samuel",
        password: "samuel"
    }
]

var newfeed = [
  {
    username: "Boody",
    timeline: "So tired from all that learning",
  },
  {
    username: "Boy",
    timeline: "javascript is cool",
  },
];

var userNamePrompt = prompt("what is your username?");
var passswordPrompt = prompt("what is your password")
function signIn(user,pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
            console.log(newfeed)
    } else {
        alert("sorry, wrong username and passsword!");
    }
}

signIn(userNamePrompt, passswordPrompt)