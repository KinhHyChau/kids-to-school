/***************************************************/ 
/*Use module.exports to separate boilWater        */ 
/*function from makebreakfast.js                 */
/************************************************/ 

function boilWater(minutes){
    console.log("Boil water for", minutes ,"minutes")
}
module.exports = {
    boilWater
}