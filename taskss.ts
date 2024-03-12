// tasks 20 :array examples
var cars : string[] = ["honda","toyata","united","suzuki"];
var languages : string[] = ["urdu","english","Arabic","Persian"];
var even_no : number[] = [2,4,6,8,10];
console.log(" \n Task # 20 \n");
console.log("These are car assemblers in Pakistan : ", cars);
console.log("Few languages that are used worldwide: ",languages);
console.log("Examples of even numbers are : ", even_no) ;

// task # 21: creating an object
var class2 : {number_of_student : number ;  grade : number ; gender : String} = 
{ number_of_student:55,
  grade : 2 ,
  gender : "Female" };
console.log("\n Tasks # 21 \n");
console.log(`Class Information : ${class2.number_of_student}\n
 Grade is ${class2.grade} \n
and students are ${class2.gender}`);
//  second example
var country : {capital : string; continent : string ; population:number}=
{capital: "Islamabad",
continent:"Asia",
population:250000000}
console.log( "\n The second example is here \n");
console.log(`Pakistan capital is ${country.capital} \n it is located in ${country.continent} \n \
its population is ${country.population}`);

// task 22 intentional index error
var integers :Number[] =[1,2,3,4,5,6,7];
console.log("\n Task # 22 \n");
//  console.log("My number is ", integers[10]); // is error 
console.log("My number is ", integers[4]);

// task # 23 coditional test
console.log(" \n Task # 23 \n");
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
let car2 = 'Subaru';
console.log("Is car2 == 'Subaru'? I predict True.");
console.log(car2 == 'subaru');// false because car2 value is Subaru capital S
// example 2
let num= 45;
console.log(" \n eg : 2 \n")
console.log(num == 55 );// false
console.log(num < 55);// true

// example 3
let prime_no = 20;
console.log(" \n eg : 3 \n")
console.log(prime_no != 30 );// True
console.log(prime_no > 30);// false

// example 4
let even= 44;
console.log(" \n eg : 4 \n")
console.log(even == 55 );// false
console.log(even < 55);// true

// example 5
let num2= 45;
console.log(" \n eg : 5 \n")
console.log(num != 55 );// true
console.log(num >= 55);// false




