// FUNCTION LEVEL 1 

function CelToFe(c){
    let f = (c*(9/5)) + 32;
    return f;
}

function bmi(w,h){
    let value = (w/(h*h)).toFixed(3);
    if(value < 18.5){
        console.log("Under weight");
    }else if(value < 24.9){
        console.log("Normal weight");
    }else if(value < 29.9){
        console.log("over weight");
    }else{
        console.log("obese");
    }
    return value;
}


function checkSeason(month){
    if(["september" , "october" , "november"].indexOf(month.toLowerCase()) > -1){
        console.log("Season is Autumn");        
    }else if(["december" , "january" , "february"].indexOf(month.toLowerCase()) > -1){
        console.log("Season is winter");
    }else if(["march", "april" , "may"].indexOf(month.toLowerCase()) > -1){
        console.log("Season is spring");
    }else if(["june",  "july" , "august"].indexOf(month.toLowerCase()) > -1){
        console.log("Season is summer");
    }else{
        console.log("Not a month");
    }
    return month;

}

// console.log(CelToFe(35));
console.log("Weight in Kg and height in meter");
console.log(bmi(70,1.67));
console.log(checkSeason('OcTober'));