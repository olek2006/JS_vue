// let age = +prompt('Enter your age');
// let reg = confirm('Are you registred?');
// if (reg === true && age >= 18) {
//     alert("Accepted")
// }
// else {
//     alert("Too young or not registred")
// }

//_______________

// let accessLevel = prompt("What is your access level?");
// if (accessLevel === 'admin' || accessLevel === 'teacher') {
//     alert("Welcome");
// } else {
//     alert("Access denied");
// }

//_______________

//ВАРІАНТ 1

// let registered = confirm("Are you registered?");
// if (registered) {
//     let age = +prompt("What is your age?");
//     if (age >= 18) {
//         alert("Welcome");
//     }
//     else {
//         alert("Access denied");
//     }
// }
// else {
//     alert("Access denied");
// }

//ВАРІАНТ 2

// if (confirm("Are you registered?") && +prompt("What is your age?") >= 18) {
//     alert("Welcome");
// } else {
//     alert("Access denied");
// }

//_______________

// let grade = +prompt('Please enter your grade:');
//
// // 90-100 - відмінно, 70-89 - добре, 60-69 - задовільно, 0-59 - незадовільно
// if (grade >= 90) {
//     alert('відмінно');
// } else if (grade >= 70) {
//     alert('добре');
// } else if (grade >= 60) {
//     alert('задовільно');
// } else {
//     alert('незадовільно');
// }

//_______________

//Ролі доступу teacher, student або інше
//Підписка
//Заблокований чи ні
//тічер - пофіг на підписку, доступ викладача
//студент - перевірка чи не заблок

// let role = prompt("What is your role?");
// let sub, block
// if (role === "teacher") {
//     block = confirm("Is your account blocked")
//     if (!block) {
//         alert("Welcome teacher")
//     } else {
//         alert("Access denied")
//     }
// }
// else if (role === "student") {
//     block = confirm("Is your account blocked")
//     if (!block) {
//         sub = confirm("Do you have sub ?")
//         if (sub) {
//             alert("Welcome student")
//         }
//         else {
//             alert("Demo version")
//             }
//         }
//     else {
//         alert("Access denied")
//     }
// }
// else {
//     alert("Access denied")
// }

//_______________

// const sale = 'sale';
// const discount = 0.1;
// let sum = 0;
// let name = prompt("Enter product name")
// let count = prompt("Enter product count")
// let price = prompt("Enter product price")
// sum = count * price
// let access = confirm("Are you registered?")
// if (access === true && sum >= 1000 && (prompt("Enter promocode") === sale || confirm("Do you have a vip status?"))) {
//     alert("You have a discount: " + (sum - (sum * discount)))}
// else {
//     alert("Your total price: " + sum)
// }