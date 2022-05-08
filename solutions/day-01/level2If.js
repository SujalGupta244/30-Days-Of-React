// IF ELSE LEVEL 2

// let Ques = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// Ques.question(`Enter the month : `, month => {
//     if(["september" , "october" , "november"].indexOf(month.toLowerCase()) > -1){
//         console.log("Season is Autumn");        
//     }else if(["december" , "january" , "february"].indexOf(month.toLowerCase()) > -1){
//         console.log("Season is winter");
//     }else if(["march", "april" , "may"].indexOf(month.toLowerCase()) > -1){
//         console.log("Season is spring");
//     }else if(["june",  "july" , "august"].indexOf(month.toLowerCase()) > -1){
//         console.log("Season is summer");
//     }else{
//         console.log("Not a month");
//     }
//     console.log(month);
//     Ques.close();
// });

let Ques = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

Ques.question(`What is the day today ? `, day => {
    const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    if(days.indexOf(day.toLowerCase()) == days.length - 1){
        console.log(`${days[days.length - 1]} is a weekend`);        
    }else if(days.indexOf(day.toLowerCase()) < days.length - 1){
        console.log(`${day} is a working day`);
    }else{
        console.log("Not a weekday");
    }
    console.log(day);
    Ques.close();
});
