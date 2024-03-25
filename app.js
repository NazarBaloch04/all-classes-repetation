"use strict";
//  1ST DAY
console.log("Hello this is Nazar Baloch");
//  2nd day Variables
let firstName = "Ali";
console.log(firstName);
//  Way of writting variables
let secondNumber = "Nabi Dost";
console.log(secondNumber);
var firstName1 = "Meer";
var firstName1 = "Meer";
console.log(firstName1);
const valueof_pie = 3.14;
console.log(valueof_pie);
// Data Types
//  1) Number
let number1 = 12;
let number2 = 45;
console.log(number1 + number2);
// 2) String
let favorite_person = "Quaid e Azam Muhammad Ali Jinnah";
console.log(favorite_person);
// 3) Boolean
let isPass = true;
console.log(isPass);
//  OBJECT
let student = {
    age: 13,
    grade: "A+",
    isPass: true,
};
console.log(student);
// Array
let fruits = ["Banana", "Apple", "Orange"];
for (let name of fruits) {
    console.log(`${name}`);
}
// OPERATORS
// 1)Arithmetic Operators
// i)Addition
let a = 5;
let b = 2;
console.log(a + b);
// ii)Sutraction
let c = 5;
let d = 2;
console.log(c - d);
// iii)Division
let e = 5;
let f = 2;
console.log(e / f);
// iv)Multiplication
let h = 5;
let i = 2;
console.log(e * f);
// v)Moddules
let j = 5;
let k = 2;
console.log(e % f);
// vi) Exponantion
let l = 5;
let m = 2;
console.log(e ** f);
// 2) Assigment Operator
//  Example
let n = 3;
console.log(n);
n += 2;
console.log(n);
n -= 4;
console.log(n);
// 3) comparision Operators
let num1 = 34;
let num2 = 12;
console.log(num1 === num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 != num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 < num2);
console.log(num2 > num1);
//  4) Logical Operators
console.log(num2 < num1 || num1 > num2);
console.log(num2 < num1 && num1 > num2);
console.log(num1 === num2 || num1 < num2);
console.log(num1 === num2 && num1 < num2);
console.log(!(num1 < num2));
// 5) Unary Operators
//  i) Post Increament
let number = 4;
console.log(number++);
console.log(number);
//    ii) Pre Increament
let z = 24;
console.log(++z);
// iii) Post Decreament
let x = 45;
console.log(x--);
console.log(x);
// iv) Pre Decreament
let w = 23;
console.log(--w);
// Conditions
//  Making Marks sheet by using conditions and Logica operators
//  1st Step Choosing the marks or Percentage
let percentage = 89;
//  By using Conditions
if (percentage >= 90 && percentage <= 99.99) {
    console.log("You got A+");
}
else if (percentage >= 80 && percentage <= 89.99) {
    console.log("You got A");
}
else if (percentage >= 70 && percentage <= 79.99) {
    console.log("You got B");
}
else {
    console.log("Sorry you are fail");
}
