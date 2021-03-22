let isCanFilledWithWater = true;
let isSoilDry = true;
let haveICheckedAllPlants = false;

console.log("Start");
console.log(" Find watering can");
console.log(" Decision - is it filled with water?", isCanFilledWithWater);

if(!isCanFilledWithWater) {
  console.log(" No - Add water")
};

// console.log(" Add water");
console.log(" Choose a plant");
console.log(" Decision - is the plant's soil dry?", isSoilDry);

if(isSoilDry) {
  console.log(" Yes - Add water to the plant pot");
}
console.log(" Decision - have I checked all the plants?", haveICheckedAllPlants);

if(!haveICheckedAllPlants) {
  console.log("No - Start again from choose a plant")
}
console.log("Yes - End"); 