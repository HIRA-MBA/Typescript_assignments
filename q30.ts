let guests: string[] = ["Eric", "Robbert","Sara","Marry", "admin"]
for (var guest of guests) 
{if (guest=="admin")
{console.log("Hello admin, would you like to see a status report?")}
else {console.log("hello guest you are welcome")}}