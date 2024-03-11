//  #####  task 1: install /node js, typescript and vs code :all done
// Task 2 : print personnel message, storing person name in variable.

let person_name : string = "Peter" ;
console.log( "Task # 2 \n");
console.log ("Hello ",person_name ,",would you like to learn some Typescript today");

// task 3 : print person name in lowercase , uppercase and title case

console.log( "Task # 3 \n");
console.log("Lowercase:", person_name.toLowerCase());
console.log("uppercase :", person_name.toUpperCase());
console.log("Titlecase", person_name.replace(/\bw/g,c=>c.toUpperCase()));

//  Tasks 4: print a quotation with the person name
var famous_person: string = "Quaid e Azam";
console.log( "Task # 4 \n");
console.log(famous_person  ,'" Success consists of moving from failure to failure without loss of enthusiasm"');

// Tasks 5:repeat q4 storing quotation in message
var famous_person: string = "Quaid e Azam";
var message: string = " Success consists of moving from failure to failure without loss of enthusiasm";
console.log( "Task # 5 \n");
console.log(famous_person  ,message);

// tasks 6: stripping name
 let my_name : string = " \t Alex  Robert \n ";
 console.log( "Task # 6 \n");
 console.log(" \n original name", my_name);
console.log(" \n stripping: " , my_name.trim());

//  tasks 7 : use operators ressulting "8"
console.log( "Task # 7 \n");
console.log("Addition : 4 + 4 = " , 4+4);
console.log("subtraction : 10-2 = " , 10 -2) ;
console.log("multiplication : 4 *2 = " ,4*2);
console.log("division : 80/10 = " , 80/10);

// tasks 8 : for lines like console.log(5 + 3) resulting in "8"

console.log( "Task # 8 \n");

console.log(4+4);
console.log(10-2);
console.log(4*2);
console.log(80/10);

// tasks 9:print favourite number

let fav_num : number = 14;
console.log( "Task # 9 \n");
console.log(" My favourite number is :" , fav_num);

//  Tasks 10 : adding comments
// My name is XYZ today is March 11 , 2024
// this program is to print number "8" using mathematical operators
console.log( "Task # 10 \n");
console.log(4+4);
console.log(10-2);
console.log(4*2);
console.log(80/10); 

// Task 11 : use array to store names of freinds and print one by one

var freinds_name : string[]= ["Tom" , "Aleaxa" , "Cyrus" , "George"];
console.log( "Task # 11 \n");
console.log(freinds_name[0]);
console.log(freinds_name[1]);
console.log(freinds_name[2]);
console.log(freinds_name[3]);

// tasks 12:print personalized message to every one
console.log( "Task # 12 \n");
console.log( freinds_name[0], " Hello how are you ?");
console.log( freinds_name[1], " Hello how are you ?");
console.log( freinds_name[2], " Hello how are you ?");
console.log( freinds_name[3], " Hello how are you ?");

// Tasks 13 : array including car name and few lines about it
var Transport : string[] = ["Honda", "Suzuki", "Toyata", "United"];
console.log( "Task # 13 \n");
console.log(Transport[0], " is my favorite mode of transportation , I like it because of \
it reliability, durability. \n Its parts are easily available , geniune and economical.\n ");
console.log(Transport[1], " is my favorite mode of transportation , I like it because of \
it reliability, durability. \n Its parts are easily available , geniune and economical. \n ");
console.log(Transport[2], " is my favorite mode of transportation , I like it because of \
it reliability, durability. \n Its parts are easily available , geniune and economical. \n");
console.log(Transport[3], " is my favorite mode of transportation , I like it because of \
it reliability, durability. \n Its parts are easily available , geniune and economical.\n ");

// task # 14 : making dinner guests list
var guest : string[] = ["Peter", "Rose", "Marry"];
console.log("\n Task # 14");
console.log(guest[0], "would to like to join us on wednesday evening for dinner");
console.log(guest[1], "would to like to join us on wednesday evening for dinner");
console.log(guest[2], "would to like to join us on wednesday evening for dinner");

// Task # 15: chanding guest list
var replace_guest=guest.pop();
// adding guest in guests
console.log("\n Task #15 \n")
guest.splice(1,0,"Rodger");
console.log(guest[0], "would to like to join us on wednesday evening for dinner");
console.log(guest[1], "would to like to join us on wednesday evening for dinner");
console.log(guest[2], "would to like to join us on wednesday evening for dinner");
console.log(replace_guest , "can not come .");

// task # 16 addng three more guest in your list 1at start, middle , end of list
// to add at end use push(), otherwise use splice
console.log(" \n Task #16 \n");
console.log("the previous guests list is ",guest)
guest.push("Sara");
guest.splice(0,0,"Frank");
guest.splice(3,0,"Brat");

console.log(" We have found a bigger table so we can invite more friends");
console.log(guest[0] , "you are invited for dinner on sunday");
console.log(guest[1] , "you are invited for dinner on sunday");
console.log(guest[2] , "you are invited for dinner on sunday");
console.log(guest[3] , "you are invited for dinner on sunday");
console.log(guest[4] , "you are invited for dinner on sunday");
console.log(guest[5] , "you are invited for dinner on sunday");












