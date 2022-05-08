//  IF ELSE LEVEL 3


let Ques = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

Ques.question(`Enter a month : `, month => {
    // const months = [["january",31],["february",28],["march",31],["april", 30],['may',31],['june', 30],['july',31],['august',31],['september',30],['october',30],['november',30],['december',31]];
    if(["january" ,"march", 'may', 'july','august' ,'december'].indexOf(month.toLowerCase()) > -1 ){
        console.log(`${month} has 31 days.`);        
    }else if(["april", 'june', 'september', 'october','november'].indexOf(month.toLowerCase()) > - 1){
        console.log(`${month} has 30 days`);
    }else if (month.toLowerCase() == 'february'){
        console.log(`${month} has 28 days`);
    }
    Ques.close();
});
