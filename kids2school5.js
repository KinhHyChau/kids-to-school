// Expand makeBreakfast sub-process

const {
    prepareIngredients,
    boilWater,
    mixIngredientsWithBoilingWater,
    setStove,
    waitForCook,
    breakfastReady,
    makeBreakfast
} = require('./makeBreakfast')

const { setAlarm} = require('./setAlarm')

//------------Extract function with module.exports for setAlarm.js----------------

function cleanYourself(){
    console.log("Brush teeth, have a wash, change clothes")
}
//------------Extract function with module.exports for makeBreakfast.js----------------


function finishBreakfast(){
    console.log("Finish breakfast")
}

function warmUpCar(){
    console.log("Warm up car")
}

function driveKidsToSchool(){
    console.log("Drive kids to school")
}

function getLateSlip(){
    console.log("Go to office to get late slip")
}

function sayGoodbye(){
    console.log("Goodbye, have a good one & see you later")
}

console.log("Start")
function kidsToSchool(canEveryoneGetUp, isBreakfastReady, areTheyLate){
    if (!canEveryoneGetUp){
        setAlarm(10)
    }
    cleanYourself()

    if (!isBreakfastReady){
       makeBreakfast(false, false)
    } else {
        breakfastReady()
    }
    finishBreakfast()    

    warmUpCar()
   
    driveKidsToSchool()
   
    if (areTheyLate){
       getLateSlip()
    }
    sayGoodbye()
    console.log("End")
}
// console.log("Getup in time and breakfast ready and late")
// kidsToSchool(true, true, true)

// console.log("Getup not in time and breakfast not ready and not late")
// kidsToSchool(false, false, false)

// console.log("Getup in time and breakfast ready and no late")
// kidsToSchool(true, true, false)

// console.log("Getup in time and breakfast not ready and late")
// kidsToSchool(true, false, true)

console.log("Getup not in time and breakfast not ready and late")
kidsToSchool(false, false, true)