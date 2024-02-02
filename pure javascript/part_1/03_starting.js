// OBJECT in javascript
var user = {
    name :"Selly",
    age : 14,
    hobby: "code",
    isMarried:false,
    spells: ["fuckup", "shazam", "boo"],
    shout: function() {
        console.log("dhdhdhhsdksdjdk");
    }
}

var me = user.hobby
var me1 = user.spells
var me2 = user.spells[1]
const m3 = user.shout(user)
console.log(me,me1,me2,m3)

var list = [
    {
        username: "samuel",
        password: "secret"
    },
    {
        username: "abream",
        password: "123"
    }
];

var list1 = list[0].password
console.log(list1)

var list2 = list[1].password;
console.log(list2);

var emptyObj = {}
console.log(emptyObj)

var nulObj = null;
console.log(nulObj)