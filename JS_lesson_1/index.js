// alert("Привіт");
// const name = "Ivan";
// let age = 18;
// const isStudent = true;
//
// console.log(typeof isStudent);

// + -
// * / % **

// let num1 = prompt("Enter a number");
// let num2 = prompt("Enter a number");
//
// console.log(Number(num1) + Number(num2));
// console.log((num1 - 0) + (num2 - 0));
//
// let num3 = 13;
// console.log(typeof String(num3))

const productName = prompt("Enter your product name") ?? "";
const productPrice = + Number(prompt("Enter your product price"));
const productCount = + Number(prompt("Enter your product count"));
const delivery = + prompt("Enter your product delivery");
const discount = + prompt("Enter your product discount (%)");
const amount = + prompt("Enter your money amount ");

let totalPrice = productPrice * productCount + delivery;
let finalPrice = totalPrice - (totalPrice * discount / 100);
let change = amount - finalPrice
let canafford = change < 0 ? 0 : change;

console.log(`Product Name: ${productName} Price: ${totalPrice} Price with discount: ${finalPrice}`);

alert('Product is: ' + productName +
    '\n Price: ' + totalPrice +
    '\n Discount: ' + discount + '%' +
    '\n Price with discount: ' + finalPrice +
    '\n Change: ' + canafford);

