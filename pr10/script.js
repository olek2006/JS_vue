// names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Vlada"];
// console.log(names);
// console.log(names[-1]);
// console.log(names.length);
//
// names2 = [];
// names.push("Vadim");
// names.push("Mariia");
////
// names2.pop()
// names2.unshift("Miroslava", "Miroslava");
//
// names2.shift()
//
// names.slice(1, 3)
// console.log(name);
// console.log(names2);

// names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Vlada"];
//
// let deleted = names.splice(2, 1);
// names.splice(2, 0, "Bohdan");
// names.splice(0, 1, "Mat", "Dat");
//
// console.log(deleted);
// console.log(names);

// function register(name) {
//     if (name.trim().length === 0) {
//         alert("Please enter a name");
//         return;
//     }
//     let duplicate = false;
//     for (let i = 0; i < name.length; i++) {
//         if (names[i] === name) {
//             duplicate = true;
//         }
//     }
//     if (duplicate) {
//         alert("This name is already registered!");
//         return;
//     }
//     names.push(name);
//     alert(`Name ${name} is already registered!`);
// }
// function deleted(name) {
//     let index = -1
//     for (let i = 1; i < name.length; i++) {
//         if (names[i] === name) {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) {
//         alert("Such name is not registered!");
//     }
//     else {
//         names.splice(index, 1);
//         alert(`Person with name ${name} was deleted!`);
//     }
// }
// function count() {
//     alert(`Count of registered ${names.length}`);
// }
//
// names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Vlada"];
//
// register('Mykyta');
// register('Ivan');
// register('        ');
// deleted('Ivan');
// deleted('Mykyta');
// count();

// names = ["Ivan", "Mark", "Miroslava", "Oleksandra", "Vlada"];
// for (let i = 0; i < names.length; i += 1) {
//     console.log(names[i]);
// }

// for (let name of names){
//     console.log(name)
// }

// names.forEach(function(name, index) {
//     console.log(name, index);
// })

// ------------------------------------------------------

// names = ["Mykyta", "Oleksandra", "Vlad", "Ivan"];
//
// names.push("Vlad");
// names.unshift("Alisa");
// names.pop();
// names.splice(2, 1, "Miroslava");
//
// for (let i = 0; i < names.length; i += 1) {
//     console.log(`${i + 1}. ${names[i]}`);
// }
//
// for (let name of names) {
//     console.log(name);
// }
//
// names.forEach(function(name) {
//     console.log(name.length);
// });

// ------------------------------------------------

prices = [120, 250, 180, 300, 150, 400];

let total = 0;
for (let i = 0; i < prices.length; i += 1) {
    total += prices[i];
}
console.log(total);

let count = 0;
for (let price of prices) {
    if (price >= 200) {
        count += 1;
    }
}
console.log(count);

let sum = 0;
prices.forEach(function(price) {
    sum += price;
});
console.log(sum / prices.length);

let total2 = prices.reduce(function(acc, price) {
    return acc + price;
}, 0);
console.log(total2);

let count2 = prices.filter(function(price) {
    return price >= 200;
}).length;
console.log(count2);
