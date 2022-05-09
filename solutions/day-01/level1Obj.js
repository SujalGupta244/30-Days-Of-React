const dog = {
    name: 'dlfjs',
    legs: 4,
    color: 'black',
    age: 12,
    bark : function (){
        return 'woof woof';
    }
}

dog.breed = "german";
dog.getDogInfo = function(){
    return `${this.name} is ${this.age} years old and do ${this.bark()}`
}

console.log(dog.getDogInfo());