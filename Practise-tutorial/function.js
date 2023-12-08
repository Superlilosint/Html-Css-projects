// function is a block of code which run when it is called 

function user(name) {
    console.log("Hey "+ name + " you are nice!");
    console.log("Hey "+ name + " you are wise person");
    console.log("Hey "+ name + " you are great!!");
}
user("Mahesh"); //function called
user("Ajay");

// another case of function 

function sum(a, b, c=10){ //here c is a default value if user don't give the value of c then i will automatically use it default value.

    // console.log(a + b);
    return a + b + c; // it return the value to it's variable
}

let result1 = sum(10, 12); //default value of c is used .
let result2 = sum(10, 12, 3); 
console.log("The sum of the number: ", result1);
console.log("The sum of the number: ", result2);


//Arrow function is a function that is stored in a variable. Basically another way to make a function 

const func1 = (x) => {
    console.log("The entered number is: ", x)
}

func1(32); //arrow function called 
func1(100);
func1(66);


// another case of it 

const add = (a, b) => {
    let c = a + b;
    return c;
}

let y = add(3, 4); 
console.log("The added number is: ", y);