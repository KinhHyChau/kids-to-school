
/**************************************************************/ 
/*Below is function of makeBreakfast subprocesses, use       */ 
/*module.exports to separate from the main kids2school5.js  */
/***********************************************************/ 

/****************************************************************/ 
/* require function for prepareIngredients                     */ 
/* require function for boilWater                             */ 
/*************************************************************/

const { prepareIngredients} = require('./randompickingredients')

const {boilWater} = require('./setalarm')

function mixIngredientsWithBoilingWater(){
    console.log("Mix ingredients into boiling water pot")
}

function setStove(dialValue){
    console.log("Set stove level to", dialValue)
}

function waitForCook(minutes){
    console.log("Waiting to cook for", minutes, "minutes until boiling gain")
}

/****************************************************************/ 
/* breakfastReady needs invoking in else statement             */ 
/* in function kidsToSchool                                   */ 
/*************************************************************/

function breakfastReady(){
    console.log("Breakfast is ready to enjoy!") 
}

function makeBreakfast(areAllIngredientsReady, isWaterBoiled){
    console.log("Make breakfast")
        if (!areAllIngredientsReady){
            prepareIngredients()
        }
        if (!isWaterBoiled){
            boilWater(6)
        }
    mixIngredientsWithBoilingWater()
    setStove(5)
    waitForCook(8)
    breakfastReady()
}

module.exports = {
    breakfastReady,
    makeBreakfast
}
