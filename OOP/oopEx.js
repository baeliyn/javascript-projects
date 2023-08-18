class Animal {
    imAnimal = true
    constructor(canJump = true) {
    this.canJump = canJump
    }
}

class Bird extends Animal {
    constructor(canJump, canFly = true, hasFeathers = true) {
        super(canJump)
        this.canFly = canFly
        this.hasFeathers = hasFeathers
    }
}

const pigeon = new Bird()

console.log(pigeon.canJump);
console.log(pigeon.imAnimal);