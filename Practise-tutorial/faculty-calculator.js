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


let a = 3;
let b = 2;

let prob = Math.random() < 0.1;
if (a + b) {
    console.log(a-b);
}
else if (a * b) {
    console.log(a+b);
}
else if (a - b) {
    console.log(a/b);
}
else if (a / b) {
    console.log(a**b);
}
else{
    console.log("Try again");
}