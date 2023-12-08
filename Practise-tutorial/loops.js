// for loop example 

let a = 0;

for (let i = 0; i < 10; i++) {
    console.log(a + i);
}


// for in loop is a loop for the object

let obj = {
    name: "Mahesh",
    role: "Developer",
    company: "Microsoft"
}

for (const key in obj) {
    {
        const element = obj[key];
        console.log(key, element); //it prints both keys and values inside of object
    }
}


// for of loop is a loop for the iteration. Basically for arrays.

for (const c of "Mahesh") {
    console.log(c);
}


//while loop


// let age = 10;

// while (age<18) {
//     console.log(age);
//     age++;
// }


// dowhile loop is a loop where 1 output is compulsory whether the condition is ture or false.

let rol = 21
do {
        console.log(rol);
        rol++;
} while (rol<19);
