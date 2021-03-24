//*******************************************************************// 
//Use below syntax to random pick items from the ingredients array  // 
//const randomIndex = Math.floor(Math.random() * array.length)     // 
//Use module.exports to separate function prepareIngredients      // 
// from makebreakfast.js                                         //                   
//**************************************************************// 

function prepareIngredients(){
    const ingredients = [
    {
        main: "rice noodle",
        side1: "slice pork",
        side2: "onion"
    },
    {
        main: "egg noodle",
        side1: "ground beef",
        side2: "green onion"
    },
    {
        main: "vermicelli",
        side1: "shrimp",
        side2: "sprout"
    },
    {
        main: "penne pasta",
        side1: "ground pork",
        side2: "tomato"
    },
]
    
    const getRandomIngredients = function (array){
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    const randomMealPick = getRandomIngredients(ingredients);
    
    console.log(`The ingredients consist of ${randomMealPick.main} and ${randomMealPick.side1} with ${randomMealPick.side2}`)
}

module.exports = { 
    prepareIngredients
}