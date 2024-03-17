// task 35
var pets :string[] = ["cat","dog", "horse"]
for (var pet of pets){console.log(pet)}
// modified program
for (pet of pets)
{console.log(` ${pet} is a wonderful pet.${pet} is a loyal animal.\n 
It requires proper vaccination and apropriate food.\n\n `)}
console.log(pets[2]," and " ,pets[1] ," are very faithfull")