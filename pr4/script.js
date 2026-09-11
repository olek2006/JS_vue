// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i+=2) {
//     console.log(i);
// }

// for (let i = 20; i > 0; i--) {
//     console.log(i);
// }

// let count = 0;
// for (let i = 20; i > 0; i--) {
//     count += 1;
//
// }
// console.log(count);

// let sum = 0;
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

//____________________#1

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 0; i <= 100; i++) {
//     if (i > 25 && i % 4 === 0 && i % 6 === 0) {
//         console.log(i)
//         break
//     }
// }

// for (i = 0; i < 30; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

//____________________

// let student = +prompt("How many students do you have ?");
// let sum = 0, goodGrade = 0, badGrade = 0, maxGrade = 1, minGrade = 12;
// for (let i = 1; i <= student; i++) {
//     let grade = prompt("What is grade of student №"+i);
//     if (!(grade >= 1 && grade <= 12)) {
//         alert("Please enter a valid grade");
//         i --;
//         continue;
//     }
//     sum += grade;
//     if (i >= 7) {
//         goodGrade ++;
//     }
//     else{
//         badGrade ++;
//     }
//     if (grade > maxGrade) {
//         maxGrade = grade;
//     }
//
//     if (grade > minGrade) {
//         minGrade = grade;
//     }
// }
// console.log(sum);
// console.log(goodGrade);
// console.log(badGrade);
// console.log(maxGrade);
// console.log(minGrade);

//____________________#2

let students = +prompt("Введіть кількість учнів: ");
let sum = 0, mean, goodGrade = 0, midGrade = 0, badGrade = 0, minGrade = 101, maxGrade =  -1, first = 0;
for (let i = 1; i <= students; i++) {
    let grade = +prompt(`Введіть бал учня №${i}:`);
        if (!(grade >= 0 && grade <= 100)) {
            alert("Введіть допустимий бал від 0 до 100 !!! ");
            i--;
            continue;
        }

        if(grade >= 90 && grade <= 100) {
            goodGrade ++;
        }
        else if(grade >= 60 && grade <= 89) {
            midGrade ++;
        }
        else{
            badGrade ++;
        }
        if (grade < minGrade) {
            minGrade = grade
        }
        if (grade > maxGrade) {
            maxGrade = grade
        }
        if (grade === 100 && first === 0) {
            first = i;
        }

    sum += grade;
}
mean = sum / students;
console.log("Середній бал серед учнів (середнє арифметичне) : " + mean);
console.log("Учнів з балом 90-100: " + goodGrade);
console.log("Учнів з балом 60-89: " + midGrade);
console.log("Учнів з балом меньше 60: " + badGrade);
console.log("Мінімальний бал: " + minGrade);
console.log("Максимальний бал: " + maxGrade);
console.log("Перший 100 бальник: " + first);