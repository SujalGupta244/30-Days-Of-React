// ARRAY LEVEL 2
const countries = require("./countries");
const webTechs = require(".//web_techs");
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const textArr = text.split(/\W+/g); 


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
shoppingCart.push("sugar");
shoppingCart.splice(shoppingCart.length-2,1)
shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea";
// console.log(shoppingCart);

let country , webTech,count = 0;
for(let i of countries){
    if(i == 'Ethiopia'){
        console.log(i.toUpperCase());
        break;
    }else{
        // country = 'Ethiopia';
        count++;
        // countries.splice(0,0,'Euthopia')
    }
}

if(count == countries.length){
    countries.push("Ethiopia");
}

for(let i of webTechs){
    if(i ==  "Sass"){
        console.log("Sass is a CSS preprocess");
        break;
    }else{
        webTech = "Sass";
    }
}

// console.log(textArr);
webTechs.push(webTech);
// console.log(countries,webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = [];
// const fullStack = frontEnd.concat(backEnd);
fullStack.push(...frontEnd,...backEnd);
console.log(fullStack);




