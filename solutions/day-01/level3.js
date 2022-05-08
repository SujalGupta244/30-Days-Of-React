// ARRAY LEVEL 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
ages.sort()
console.log("minimum",ages[0]);
console.log("maximum",ages[ages.length - 1]);
console.log(ages);

if(ages.length %2 != 0){
    console.log("Middle term",ages[ages.length/2]);
}else{
    console.log("Middle terms",ages[(ages.length/2) - 1],ages[(ages.length/2)]);
}

let avg  = 0,sum = 0;
for(let i of ages){
    sum += i;
}
avg = sum/ages.length;
console.log("Average age",avg);
console.log("Range of ages",ages[ages.length - 1] - ages[0]);
console.log(Math.abs(ages[ages.length - 1] - avg),Math.abs(ages[0] - avg))

const countries = require("./countries");
let firstHalf,secondHalf;
if(countries.length%2 == 0){
    firstHalf = countries.slice(0,countries.length/2)
    secondHalf = countries.slice(countries.length/2)
}else{
    firstHalf = countries.slice(0,countries.length/2 + 1)
    secondHalf = countries.slice(countries.length/2 + 1)
}

console.log(firstHalf,secondHalf);