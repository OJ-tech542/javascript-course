let a = 20;
let b = 6;
console.log(a);
console.log(b);
console.log(a + b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Task 2: Even or odd

let number = 10;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// Task 3: Shopping bill


let item1 = 2500;
let item2 = 1500;
let item3 = 3000;
console.log(item1);
console.log(item2);
console.log(item3);
let subtotal = item1 + item2 + item3;
console.log(subtotal);
let tax = subtotal * 0.075;
console.log(tax);
let total = subtotal + tax;
console.log(total);
console.log(total.toFixed(2));