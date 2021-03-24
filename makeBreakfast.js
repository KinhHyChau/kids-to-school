
/**************************************************************/ 
/*Below is function of makeBreakfast subprocesses, use       */ 
/*module.exports to separate from the main kids2school5.js  */
/***********************************************************/ 


/****************************************************************/ 
/* require function for prepareIngredients                     */ 
/**************************************************************/

const { prepareIngredients} = require('./randompickingredients')

function boilWater(){
    console.log("Boil water")
}

function mixIngredientsWithBoilingWater(){
    console.log("Mix ingredients into boiling water pot")
}

function setStove(dialValue){
    console.log("Set stove level to", dialValue)
}

function waitForCook(minutes){
    console.log("Waiting to cook for", minutes, "minutes until boiling gain")
}

function breakfastReady(){
    console.log("Breakfast is ready to enjoy!")
}

function makeBreakfast(areAllIngredientsReady, isWaterBoiled){
    console.log("Make breakfast")
        if (!areAllIngredientsReady){
            prepareIngredients()
        }
        if (!isWaterBoiled){
            boilWater()
        }
    mixIngredientsWithBoilingWater()
    setStove(5)
    waitForCook(8)
    breakfastReady()

}

module.exports = {
    prepareIngredients,
    boilWater,
    mixIngredientsWithBoilingWater,
    setStove,
    waitForCook,
    breakfastReady,
    makeBreakfast
}
