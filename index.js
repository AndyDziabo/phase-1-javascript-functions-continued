function saturdayFun(activity){
    if(activity !== undefined){
        return `This Saturday, I want to ${activity}!`;
    }else{
        return "This Saturday, I want to roller-skate!";
    }
}
function mondayWork(job){
    let monday;
    if(job !== undefined){
        monday = job;
    }else{
        monday = "go to the office";
    }
    return `This Monday, I will ${monday}.`;
}
function wrapAdjective(flare = '*'){
    return function(compliment = "special"){
        return `You are ${flare}${compliment}${flare}!`;
    }
}