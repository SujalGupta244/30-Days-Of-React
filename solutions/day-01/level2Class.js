class Animal {
    constructor(name,age,color,legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
}


class Dog extends Animal{
    constructor(name,age,color,legs,breed){
        super(name,age,color,legs)
        this.breed = breed;
    }
}
class Cat extends Animal{
    constructor(name,age,color,legs,breed){
        super(name,age,color,legs)
        this.breed = breed;

    }
}

const d = new Dog('sujal',null,null,null,'german')

console.log(d);