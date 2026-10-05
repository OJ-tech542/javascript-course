const name = "Joseph";
console.log(name);
let age = 30;
console.log(age);
const hobby = "Football";
console.log(hobby);
const likePizza = true;
console.log(likePizza);
console.log(`My name is ${name}, I am ${age}, I love ${hobby}, and I like pizza: ${likePizza}.`);
name = "John"; 
// Uncaught TypeError: Assignment to constant variable.  
// This means I cannot give a new value to a variable that was declared with const.
