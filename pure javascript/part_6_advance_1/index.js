// refrence type

var object1 = {nvaluel: 10};
var object = object1
var object2 = {value:10}

// context vs scoop
//context: 
//this is a window object or this is just demonstratre what is inside a object

const object4 = {
    a: function(){
        console.log(this)
    }
}


// instanstiation
class player {
    constructor(name,type){
        this.name=name
        this.type = type
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.name}`)
    }
}

class Wizard extends player {
    constructor(name, type){
        super(name,type)
    }
    play(){
        console.log(`Weeeeeeeeeeeeeeeeee Im a ${this.type}`)
    }
}

class Wizard extends player {
    constructor(name, type){
        super(name,type)
    }
    play(){
        console.log(`Weeeeeeeeeeeeeeeeee Im a ${this.type}`)
    }
}
const Wizard1 = new Wizard("SHELLY", "HEALER");

const Wizard3 = new Wizard("SHELLY", "HEALER");

console.log(Wizard1.introduce)
console.log(Wizard1.introduce)
