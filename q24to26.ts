// tasks # 24 : comparison operators

console.log("\n Task # 24 \n");
// • Tests for equality and inequality with strings

var language : string = "English";
console.log('language="English" = ', language=="English");// true because is same
console.log('language != "English" = ', language!="English");// false becuse value is same

// • Tests using the lower case function

var language : string = "english";
console.log('language="english" = ', language=="english");// tru because is same
console.log('language != "English" = ', language!="English");// true becuse value is title case
console.log('language == "English" = ', language=="English");// false becuse value is title case

// • Numerical tests involving equality and inequality, 

let a = 5 ;
console.log(" a = 5 :", a==5); // true
console.log("a != 5 : " , a!=5 ); // false

// greater than and less than,

let b = 10 ;
console.log(" b < 20 :", b < 20); // true
console.log("b > 20 : " , b > 20) ; // false 


//  greater than or equal to, and less than or equal to
let c = 15 ;
console.log( "c <= 20 :" , c <= 20); // true
console.log ( " c >= 20 :" , c >= 20 ); // false

//  test using and and or operators

var age :number = 23;
var age :number = 30;
console.log("And operator : " ,age >20  && age < 50);
console.log("Or operator :" ,age < 20 || age > 50);

// • Test whether an item is in an array

var cities : string[] = ["karachi", "lahore ", "islamabad", "Multan"];
if (cities.includes("karachi"))
{console.log ("Karachi is in array");}
else{console.log("karachi is not in array");}

// • Test whether an item is not in an array
var cities : string[] = ["karachi", "lahore ", "islamabad", "Multan"];
if (cities.includes("Rawalpindi"))
{console.log ("rawalpindi is in array");}
else{console.log("Rawalpindi is not in array");}

// Tasks # 25 
// craeting varaiable and using if else statement

console.log(" \n Task # 25 \n ")
var alien : String = "Green";
if (alien == "Green"){console.log(" you have earned 5 points");}
if (alien == "Green"){console.log("alien color is green");}
else{};

// task # 26 if else atatement
console.log(" \n Task # 26 \n ")
if (alien == "Green"){console.log(" you have earned 5 points for shooting the alien");}
else{console.log("You have earned 10 points");}

// for printing else statement
if (alien == "Red "){console.log(" you have earned 5 points for shooting the alien");}
else{console.log("\n You have earned 10 points");}




