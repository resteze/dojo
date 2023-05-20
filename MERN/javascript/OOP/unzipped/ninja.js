class Ninja{
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength 
    }
    sayName(){
        console.log(`Hi, my name is ${this.name}!`)
    }
    showStats(){
        console.log(`Here is ${this.name}'s stats:`)
        console.log(this)
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank Sake and gained health!`)
    }
}
class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name);
        this.wisdom = wisdom
    }
    speakWisdom(){
        super.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
    
}



const ninja1 = new Ninja("Hyabusa")
ninja1.sayName();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
