const { cleanAPot, loadWater, loadCoffee, putPotOnBurner } = require('./mochaPot')
const { setBurner } = require('./stoveTop')

function openANewBagOfCoffee() {
    console.log("  opening a new bag of coffee")
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

