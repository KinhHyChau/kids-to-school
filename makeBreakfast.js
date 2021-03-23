
//------------------ Below is function of makeBreakfast subprocesses and separate from the main js -------------//
function prepareIngredients(){
    console.log("All ingredients are ready")
}

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
