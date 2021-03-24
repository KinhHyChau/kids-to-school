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

const mealPick = function (array){
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
const randomMealPick = mealPick(ingredients);

console.log(`first item: ${ingredients[2].main}, ${ingredients[0].side2}`)

console.log(randomMealPick);
console.log(`The ingredients consist of ${randomMealPick.main} and ${randomMealPick.side1} with ${randomMealPick.side2}`)