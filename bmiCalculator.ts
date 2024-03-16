import inquirer from "inquirer";

// BMI calculator for adults

const answer = await inquirer.prompt([
    { name : "weight",
    type : "number",
    message : "enter your weight in kgs"},
    {  name : "height",
       type :  "number",
       message : "Enter your height in meter"},
    {  name : "age", 
       type:   "number",
       message: "Enter your age"},
    {  name : "gender",
       type :  "string",
       message : "enter your sex"},]
)
let bmi = answer.weight / (answer.height * answer.height);

if (bmi < 18) {
    console.log(`Your BMI is ${bmi} and you are underweight.`);
} else if (bmi >= 18 && bmi <= 25) {
    console.log(`Your BMI is ${bmi} and you have normal weight.`);
} else  {
    console.log(`Your BMI is ${bmi} and you are overweight.`);
}
