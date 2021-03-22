
function cleanAPot() {
    console.log("  clean out a pot")
}

function openANewBagOfCoffee() {
    console.log("  opening a new bag of coffee")
}

function loadWater() {
    console.log("  load water")
}

function loadCoffee() {
    console.log("  loading coffee ")
}

function putPotOnBurner() {
    console.log("  putting on the burner ")
}


function setBurner(dialValue) {
    console.log("  setting burner to", dialValue)
}

function wait(minutes) {
    console.log("  waiting for", minutes, "minutes")
}

function makeCoffee(isThereACleanPot, isThereEnoughCoffee) {
    console.log("Begin")
    if (!isThereACleanPot) {
        cleanAPot()
    }
    loadWater()
    if (!isThereEnoughCoffee) {
        openANewBagOfCoffee()
    }
    loadCoffee()
    putPotOnBurner()
    setBurner(4)
    wait(15)
    console.log("Done! ")    
}

console.log("Making coffee with a clean pot and not enough grounds")
makeCoffee(true, false)

