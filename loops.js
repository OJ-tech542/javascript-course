for (let i = 1; i <= 10; i++) {

    console.log(i);
}

//ifloop

for (let i = 1; i <= 20; i++) {
    
    if (i % 2 === 0) {
    console.log(i)

    }
} 

//countdown

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

console.log("Liftoff!");

//FizzBuzz

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

