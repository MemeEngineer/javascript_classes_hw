class Cat{
    constructor(name, breed, cute) {
        this.name = name;
        this.breed = breed;
        this.cute = cute;
    }
    cutie(){
        this.cute = true
        console.log('have a treat')
    }
    bark(){
        console.log(`My name is ${this.name}`)
    }
    type(){
        console.log(`I am a ${this.breed}`)
    }
}

const milo = new Cat('milo', 'corgi', true)
const garfield = new Cat( 'garfield', 'tabby', false)

console.log(milo)
console.log(garfield)

milo.cutie()
milo.bark()
milo.type()
garfield.cutie()
garfield.bark()
garfield.type()

class Pirate{
    constructor(name,ship,job){
        this.name= name
        this.ship = ship
        this.job = job
    }
    attack(){
        console.log('Prepare to board!')
    }
    catchphrase(){
        console.log('I am going to be the Pirate King')
    }
    retreat(){
        console.log("Back to the ship, matey!")
    }
}

// const strawhat = [{name: 'luffy',ship: 'thousand sunny',job: 'captain'}, {name:'zorro',ship:'thousand sunny',job:'swordsman'},{name:'sanji',ship:'thousand sunny',job: 'chef'}]
// const carribean = [{name:'sparrow',ship:'black pearl',job:'captain'},{name:'turner',ship:'black pearl',job:'first-mate'},{name:'swann',ship:'black pearl',job:'beauty'}]

const p1 = new Pirate('luffy', 'thousand sunny', 'captain')
const p2 = new Pirate('zoro', 'thousand sunny', 'swordsman')
const p3 = new Pirate('sanji', 'thousand sunny', 'chef')

const strawhat= [p1, p2, p3]
const p4 = new Pirate('sparrow', 'blackpearl', 'captain')
const p5 = new Pirate('turner', 'blackpearl', 'firstmate')
const p6 = new Pirate('swann', 'blackpearl', 'beauty')
const carribean= [p4,p5,p6]
for(let i=0; i <= strawhat.length; i++){
    console.log(strawhat[i])
    console.log(carribean[i])
}


// class Pirate {
//     constructor(name, age, weakness) {
//         this.name = name;
//         this.age = age;
//         this.weakness = weakness;
//     }

//     pirateDetails() {
//         return `PIRATE INFO: Name: ${this.name} Age: ${this.age}`;
//     }
// }

// const jack = new Pirate('Jack', 38, 'water');
// const john = new Pirate('John', 28, 'Mosquitos');
// const jane = new Pirate('Jane', 30, 'Salt Water');

// // const blackPearl = [jack, john, jane];

// const blackPearl = [];

// blackPearl.push(jack, john, jane);

// console.log(blackPearl);

// for (const pirate of blackPearl) {
//     console.log(pirate);
    
//     for ( const [key, value] of Object.entries(pirate) ){
//         console.log(key, value);
//     }

//     // console.log(pirate.name);
//     // console.log(pirate.age);
//     // console.log(pirate.weakness);
// }