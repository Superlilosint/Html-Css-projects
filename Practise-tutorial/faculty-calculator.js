/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/


let random = Math.random()
console.log(random)

let a = prompt("Enter the first number: ");
let c = prompt("Enter the Operation");
let b = prompt("Enter the Second Number: ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random>0.1){
    //correct calculation
    alert(`The result is: ${eval(`${a} ${c} ${b}`)}`);
}
else{
    //incorrect calculation
    c = obj[c]; //operation is  changed 
    alert(`The result is: ${eval(`${a} ${c} ${b}`)}`);
}
