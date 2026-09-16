// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num ++;
// }

// let userNumber = +prompt( "Enter your number")
// while (userNumber < 1 || userNumber > 10) {
//     userNumber = +prompt( "Error. Enter your number")
//     console.log('error')
// }

// let age = +prompt('Enter your age');
// while (Number.isNaN(age) || age < 0 || age >= 100) {
// age = +prompt('Error. Enter your age');
// }
// console.log(age);

// const correctPin = 1234;
// let userPin = +prompt("Enter a valid pin");
// let attempts = 1;
// while (correctPin !== userPin && attempts < 3) {
//     userPin = +prompt("Error, enter a valid pin");
//     attempts++;
// }
// if (userPin === correctPin) {
//     console.log("Welcome")
// }
// else {
//     console.log("Blocked")
// }

// const correctPin = 1234;
// let attempts = 1;
// while (attempts <= 3) {
//     let userPin = +prompt( "Enter a valid pin");
//     if (userPin === correctPin) {
//         console.log("You entered a valid pin");
//         break;
//     }
//     console.log('error pin');
//     attempts++;
//     }

// let menuChoice;
// do {
//     menuChoice = prompt(`What is your choice? \n
//         1 = переглянути профіль \n
//         2 = налаштування \n
//         3 = статистика \n
//         0 = вийти`);
//     if (menuChoice === '1') {
//         console.log("Відкриваємо профіль");
//     }
//     else if (menuChoice === '2') {
//         console.log("Відкриваємо налаштування");
//     }
//     else if (menuChoice === '3') {
//         console.log("Відкриваємо статистику");
//     }
//     else if (menuChoice === '4') {
//         console.log("Відкриваємо вийти");
//     }
//     else {
//         console.log("Вибір не правильний");
//     }
// } while (menuChoice !== '0');

//________________________________________________________________________________

// let menuChoice;
//
// do {
//     menuChoice = prompt(`What is your choice? \n
//     1 = переглянути профіль\n
//     2 = налаштування\n
//     3 = статистика\n
//     0 = вийти`);
//
//     switch (menuChoice) {
//         case "1":
//             console.log("Відкриваємо профіль");
//             break;
//         case "2":
//             console.log("Відкриваємо налаштування");
//             break;
//         case "3":
//             console.log("Відкриваємо статистика");
//             break;
//         case "0":
//             console.log("Вийти");
//             break;
//         default:
//             console.log("вибір не правильний");
//     }
// } while (menuChoice !== "0");

//________________________________________________________________________________

// let count = 0;
// let sum = 0;
// while (count < 5) {
//     let grade = +prompt( `Введи оцінку № ${count + 1}`);
//     if (Number.isNaN(grade) || grade < 1 || grade > 12) {
//         alert("Не коректна оцінка, введіть ще раз")
//         continue
//     }
//     sum += grade;
//     count++;
// }
// console.log(sum);
// console.log(sum / 5)

// let questionsNumber = 1, score = 0;
//
// while (questionsNumber <= 5) {
//     let questions = '', correctAnswer = '';
//
//     switch (questionsNumber) {
//         case 1:
//             questions = "Ключове слово для створення змінної";
//             correctAnswer = 'let';
//             break;
//         case 2:
//             questions = 'оператор and';
//             correctAnswer = '&&';
//             break;
//         case 3:
//             questions = "оператор or";
//             correctAnswer = '||';
//             break;
//         case 4:
//             questions = 'яка команда зупиняє цикл?';
//             correctAnswer = 'break';
//             break;
//         case 5:
//             questions = 'строга рівність позначається...';
//             correctAnswer = '===';
//             break;
//     }
//     let answer = prompt(`Запитання № ${questionsNumber} із 5 \n
//     ${questions}`);
//     if (answer === '') {
//         alert("Відповідь не може бути пуста")
//     }
//     if (answer === correctAnswer) {
//         alert("Вірно")
//         score++
//     }else {
//         alert("Не вірно!")
//     }
//     questionsNumber++;
// }
// if (score === 5){
//     alert("Ти молодець")
// }
// else if (score >= 3){
//     alert("Окей")
// }
// else{
//     alert("Треба вчитися")
// }

//________________________________________________________________________________

let age;
while (true) {
    age = Number(prompt("Введіть ваш вік від 12 до 90"));
    if (age >= 12 && age <= 90) {
        break;
    } else {
        alert("Неправильній вік, спробуйте ще раз !");
    }
}

const correctPin = "4321";
let attempts = 0
let access = false

while (attempts < 3) {
    let pin = prompt("Введіть PIN")
    attempts++;
    if (pin === correctPin) {
        access = true
        break;
    } else {
        alert("Неправильний PIN");
    }
}

if (access) {
    let choice;

    do {
        choice = prompt(`Меню:\n
            1 - Особистий кабінет\n 
            2 - Повідомлення\n 
            3 - Налаштування\n 
            0 - Вихід`)

        switch (choice) {
            case "1":
                alert("Особистий кабінет");
                break;

            case "2":
                alert("Повідомлення");
                break;

            case "3":
                alert("Налаштування");
                break;

            case "0":
                alert("Вихід");
                break;

            default:
                alert("Такого пункту немає");
        }

    } while (choice !== "0");

} else {
    alert("Доступ заблоковано");
}

//________________________________________________________________________________