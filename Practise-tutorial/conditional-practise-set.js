//1 Use logical operator to find the whether the age of a person lies between 10 and 20?

let age = 25;
if(age>10 && age<20){
    console.log("The age lies between 10 and 20");
}
else{
    console.log("No, the age doesn't lies between 10 and 20");
}

//Same code with ternary operator 
let c = age>10 && age<20 ? ("The age lies between 10 and 20"): ("No, the age doesn't lies between 10 and 20");
console.log(c);

//Demonstrate the use of switch case statements in Javascript.
//not a exact switch case statement but it is if-else-if

if(age==18){
    console.log("You can apply for the license.")
}
else if (age>18){
    console.log("Yes you can apply!!")
}
else {
    console.log("No you can't apply !!")
}

//Write a javascript program to find whether a number is Divisible by 2 and 3.

let num = 12;
let result = num/2 && num/3 ? ("Yes number is divisible by both"):("No number is not divisible by both");
console.log(result);

//Write a javascript program to find whether a number is Divisible by either 2 or 3.

let num2 = 5;
let result2 = num2%2 ===0 || num2%3 ===0 ? ("Yes number is divisible"):("No number is not divisible");
console.log(result2);

// let num2 = 7;
// if(num2%2 === 0 || num2%3 === 0){
//     console.log("Yes divisible");
// }
// else{
//     console.log("No divisible");
// }


