//Start functions, turn variables let into funcion parameter 1, 2, 3

function kidsToSchool(canEveryoneGetUp, isBreakfastReady, areTheyLate){
    console.log("Start")
    console.log("Can everyone get up at 7am?", canEveryoneGetUp)
    if (!canEveryoneGetUp){
        console.log("sleep for ...mins more")
    }
    console.log("brush teeth, wash, change clothes")

    console.log("Is breakfast ready?", isBreakfastReady)
    if (!isBreakfastReady){
        console.log("make breakfast")
    }
    console.log("finish breakfast, rinse mounth, warm up car")
    console.log("drive kids to school")

    console.log("Are they late?", areTheyLate)
    if (areTheyLate){
        console.log("go to office to get late slip")
    }
    console.log("bye to see you later")
    console.log("End")
}
console.log("Getup in time and breakfast ready and late")
kidsToSchool(true, true, true)

console.log("Getup not in time and breakfast not ready and not late")
kidsToSchool(false, false, false)

console.log("Getup in time and breakfast ready and no late")
kidsToSchool(true, true, false)

console.log("Getup in time and breakfast not ready and late")
kidsToSchool(true, false, true)

console.log("Getup not in time and breakfast not ready and late")
kidsToSchool(true, false, true)