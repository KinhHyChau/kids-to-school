/***************************************************/ 
/*Use module.exports to separate setAlarm function*/ 
/*from main kids2school5.js                      */
/************************************************/ 

/***************************************************/ 
/*Use module.exports to separate boilWater        */ 
/*function from makebreakfast.js                 */
/************************************************/
function setAlarm(minutes){
    console.log("Sleep for", minutes, "minutes more")
}

function boilWater(minutes){
    console.log("Boil water for", minutes ,"minutes")
}

module.exports = {
    setAlarm,
    boilWater
}
 


