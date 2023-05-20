class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost
    }
}
class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        if( target instanceof Unit){
            target.res -= this.power
            console.log(`${this.name} has attacked ${target.name} leaving them with ${target.res} Resilience!`);
        } else{
            throw new Error('Target must be a unit');
        }
    }
}
class Effect extends Card{
    constructor(name, cost, effectPower, stat){
        super(name, cost);
        this.effectPower = effectPower;
        this.stat = stat
    }
    play(target){
        // if( target instanceof Unit){
        //             target[this.stat] += this.effectPower
        //             console.log(`${this.name} has effected ${target.name}'s ${this.stat} by ${this.effectPower}`); 
        // } else{
        //     throw new Error('Target must be a unit');
        // }
        target instanceof Unit?
        (target[this.stat] += this.effectPower,
        console.log(`${this.name} has effected ${target.name}'s ${this.stat} by ${this.effectPower}`)) 
        :
            console.log('Target must be a unit');
    }
}

const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
const hardAlgorithm = new Effect('Hard Algorithm', 2, 3, 'resilience');
hardAlgorithm.play(redBeltNinja);
const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);
const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, 2, 'resilience');
unhandledPromiseRejection.play(redBeltNinja);
const pairProgramming = new Effect('Pair Programming', 3, 2, 'power' );
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);



