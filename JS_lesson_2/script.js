// Операторы сравнения: > >= < <= == === != !==

// let a, b;
// a = "1";
// b = 1;
//
// console.log(a == b); // true (сравнение значений с приведением типов)
// console.log(a === b); // false (строгое сравнение с учетом типов данных)

// Шаблон умовного оператора:
// if (умова){
//     команди;
// }

// let temp = prompt('Enter a temperature');
// let result;
// if (temp <= 0) {
//     result = "Холодно"
// }
// else if (temp >= 10 && temp < 20) {
//     result = "Нормально"
// }
// else if (temp >= 20) {
//     result = "Жарко"
// }
// alert(result);

//______________________________________________

// let parne = prompt("Type number: ");
// let number;
// if (parne % 2 === 0) {
//     number = "parne"
// }
// else {
//     number = "neparne";
// }
// alert(number);

//______________________________________________

// const login = "admin";
// const password = "12345";
//
// let userLogin = prompt("Enter user login: ");
// let userPassword = prompt("Enter user password: ");
// if (userLogin === login && userPassword === password) {
//     alert("Welcome back !")
// }
// else {
//     alert("Valid login or passsword")
// }



// courier 200
// post 100
// pickup 0

// let cost, deliver = prompt("Яка доставка ?");
//
// switch(deliver) {
//     case "courier":
//         cost = 200
//         break;
//     case "post":
//         cost = 100
//         break;
//     case "pickup":
//         cost = 0
//         break;
//     default:
//         cost = "n/a"
// }
//
// alert(cost);

//______________________________________________

// let name, day = prompt("Which day of week is it today ?");
// switch(day) {
//     case "1":
//         name = "monday"
//         break;
//     case "2":
//         name = "tuesday"
//         break;
//     case "3":
//         name = "wednesday"
//         break;
//     case "4":
//         name = "thursday"
//         break;
//     case "5":
//         name = "friday"
//         break;
//     case "6":
//         name = "saturday"
//         break;
//     case "7":
//         name = "sunday"
//         break;
//     default:
//         name = "n/a"
// }
// alert(name);

//______________________________________________

let productName = prompt("Enter your product name: ");
let productPrice = +prompt("Enter your product price: ");
let productCount = +prompt("Enter your product count: ");

let hasCard = confirm("Do you have discount card?"); //10%

let deliveryCost, deliveryType = prompt("Enter your product delivery type: courier, post, pickup");

let totalPrice, discount = 0;

totalPrice = productPrice * productCount;

if (totalPrice > 2000){
    discount = 0.1
}
else if (totalPrice > 1000){
    discount = 0.05
}
if (hasCard){
    totalPrice = (totalPrice - (totalPrice * discount)) - (totalPrice * 0.1)
}
else {
    totalPrice = totalPrice - (totalPrice * discount)
}
switch(deliveryType){
    case "courier":
        deliveryCost = 200
        break;
    case "post":
        deliveryCost = 100
        break
    case "pickup":
        deliveryCost = 0
        break;
    default:
        deliveryCost = "n/a"
        break
}
totalPrice = totalPrice + deliveryCost;
alert(`Total price: ${totalPrice}`);



