// Task 17 : shrinking the guest list
var guests  : string[] = ["Frank","Peter","Rodger","Brat","Rose","Sara"];
var sh1=guests.pop();
var sh2=guests.pop();
var sh3=guests.pop();
var sh4=guests.pop();
console.log( " \n Task # 17 \n")
console.log(sh1 , "Sorry the dinner program is postponne, so the invitation is cancelled");
console.log(sh2 , "Sorry the dinner program is postponne, so the invitation is cancelled");
console.log(sh3 , "Sorry the dinner program is postponne, so the invitation is cancelled");
console.log(sh4 , "Sorry the dinner program is postponne, so the invitation is cancelled");
console.log(guests[0], " You are still invited");
console.log(guests[1], "You are still invited");
guests.pop();
guests.pop();
console.log(guests);

// task # 18 printing an array in alphabatic order
var places : string[] = ["US", "UK", "TURKEY","GERMANY","ITALY"]

console.log(" \n task 18 \n")
console.log("this is original array " , places);
console.log("this is array in alphabatic order :",[...places].sort());
console.log("the original list is still present :" , places);
console.log("Here the array is in reverse alphabatic order ;" ,[... places].sort().reverse());
console.log("the original order of the list is unchanged :",places);
places.reverse();
console.log("the order of the array has changed now: ",places);
places.reverse();
console.log("the origianl order : ",places);
places.sort();
console.log("Alphabatic order : ", places);
places.reverse();
console.log("the reverse alphabatic order :" ,places);

// task  # 19 counting guest list
var guests  : string[] = ["Frank","Peter","Rodger","Brat","Rose","Sara"]; 
console.log( "\n task # 19 \n")
console.log("number of the guest is :" ,guests.length);




