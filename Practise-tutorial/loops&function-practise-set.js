// Write a program to print the marks of a student in an object using for loop 

let obj = {
    mahesh: 98,
    rohan: 70,
    aakash: 7
}
//question is pending


//question 1 in forin loop

for (const value in obj) {
    {
        const element = obj[value];
        console.log(element);
    }
}

//Write a program to print "Try again" until the user enters the correct number.


// wrong concpet used #pending
// let user = 6;

// do {

//     if (user === 10){
//         console.log("Correct Number entered");
//     }
//     else{
//         console.log("Try Again");
//     }
//     user++;
// } while (user !== 10);


//Write a function to find the mean of 5 numbers.

function mean(a, b, c, d, e) {
    return (a+b+c+d+e)/5;
    
}

let result = mean(2, 3, 4, 5, 6);
console.log("mean of 5 numbers :", result);