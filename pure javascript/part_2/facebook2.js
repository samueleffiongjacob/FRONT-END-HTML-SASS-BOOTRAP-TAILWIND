var database = [
  {
    username: "samuel",
    password: "samuel",
  },
  {
    username: "samuel1",
    password: "samuel1",
  },
  {
    username: "samuel2",
    password: "samuel2",
  },
  {
    username: "samuel3",
    password: "samuel4",
  },
];

var newfeed = [
  {
    username: "Boody",
    timeline: "So tired from all that learning",
  },
  {
    username: "Boy",
    timeline: "javascript is cool",
  },
  {
    username: "Boy1",
    timeline: "javascript is cool",
  },
];

function isUserValid(username,password){
    for(var i =0; i < database.length; i++){
        if (database[i].username === username &&
            database[i].password === password
        ) {
            return true
        }
    }
    return false;
}

function signIn(username, password) {
  for (var i =0; i < database.length; i++){
    if (
      isUserValid(username, password)
    ) {
      console.log(newfeed);
    } else {
      alert("sorry , wrong username and password");
    }
  } 
}
var userNamePrompt = prompt("what is your username?");
var passswordPrompt = prompt("what is your password");
signIn(userNamePrompt, passswordPrompt);
