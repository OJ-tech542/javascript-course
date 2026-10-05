let score = 85;

console.log(score);

if (score >= 90) {
    console.log("Grade: A");

} else if (score >= 80) {
    console.log("Grade: B");
}  else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");

} else {

    console.log("Grade: F");

}

//Age Check

let Age = 20;

if (Age >= 18) {
    console.log("You are eligible to vote.");
} else if (Age >= 16) {
    console.log("You are eligible to drive but cannot vote.");
} else {
    console.log("You can neither vote nor drive.");
}


let year = 2024;

if (year % 400 === 0) {

    console.log("Leap year");

} else if (year % 4 === 0 && year % 100 !== 0) {

    console.log("Leap year");

}else{

    console.log("Not a leap years");  
}

//loops;

