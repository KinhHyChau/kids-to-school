// Create function for each sub-processes

function setAlarm(minutes){
    console.log("sleep for", minutes, "minutes more")
}

function cleanYourself(){
    console.log("brush teeth, have a wash, change clothes")
}

function makeBreakfast(){
    console.log("make breakfast")
}

function finishBreakfast(){
    console.log("finish breakfast")
}

function warmUpCar(){
    console.log("warm up car")
}

function driveKidsToSchool(){
    console.log("drive kids to school")
}

function getLateSlip(){
    console.log("go to office to get late slip")
}

function sayGoodbye(){
    console.log("bye to see you later")
}


function kidsToSchool(canEveryoneGetUp, isBreakfastReady, areTheyLate){
    console.log("Start")
    // console.log("Can everyone get up at 7am?", canEveryoneGetUp)
    if (!canEveryoneGetUp){
        setAlarm(10)
    }
    cleanYourself()

    // console.log("Is breakfast ready?", isBreakfastReady)
    if (!isBreakfastReady){
        makeBreakfast()
    }
    finishBreakfast()    

    warmUpCar()

    driveKidsToSchool()

    // console.log("Are they late?", areTheyLate)
    if (areTheyLate){
       getLateSlip()
    }
    sayGoodbye()
    console.log("End")
}
console.log("Getup in time and breakfast ready and late")
kidsToSchool(true, true, true)

console.log("Getup not in time and breakfast not ready and not late")
kidsToSchool(false, false, false)

console.log("Getup in time and breakfast ready and not late")
kidsToSchool(true, true, false)

console.log("Getup in time and breakfast not ready and late")
kidsToSchool(true, false, true)

console.log("Getup not in time and breakfast not ready and late")
kidsToSchool(false, false, true) 