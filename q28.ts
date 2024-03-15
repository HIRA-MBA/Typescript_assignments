//  task # 28

import inquirer from "inquirer";

const answer = await inquirer.prompt({
    type : "number" ,
    name : "age",
    message : " what is your age"
});

if (answer.age <= 2){ console.log("The person is a baby");}
else if (answer.age <= 4 ){console.log("thr person is a toddler");}
else if (answer.age < 13){console.log ("the person is a kid");}
else if (answer.age < 20){console.log("the person is a teenager");}
else if (answer.age < 65){console.log("the person is an adult");}
else if (answer.age > 65){console.log("the person is an elder");}

