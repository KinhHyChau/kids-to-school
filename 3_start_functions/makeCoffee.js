
function makeCoffee(isThereACleanPot, isThereEnoughCoffee) {
    console.log("Begin")
    console.log("  is there a clean pot? ", isThereACleanPot)
    if (!isThereACleanPot) {
        console.log("    clean out a pot")
    }
    console.log("  load water")
    console.log("  is there enough coffee? ", isThereEnoughCoffee)
    if (!isThereEnoughCoffee) {
        console.log("    opening a new bag of coffee")
    }
    console.log("  loading coffee ")
    console.log("  putting on the burner ")
    console.log("  setting burner to 4 ")
    console.log("  waiting 15 minutes... ")
    console.log("Done! ")    
}

console.log("Making coffee with a clean pot and not enough grounds")
makeCoffee(true, false)

console.log("Making coffee without a clean pot and enough grounds")
makeCoffee(false, true)
