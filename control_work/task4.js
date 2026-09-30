let processedCars = 0;
let electricCars = 0;
let totalPrice = 0;
let maxPrice = 0;

for (let i = 1; i <= 7; i++) {
    let hours = +prompt("Введіть кількість годин стоянки");
    if (hours === 0) {
        break;
    }

    if (hours < 0 || hours > 12) {
        continue;
    }
    let carType = +prompt("Введіть тип автомобіля:" +
        "\n1 - звичайний" +
        "\n2 - електромобіль");

    if (carType !== 1 && carType !== 2) {
        alert("Помилка: неправильний тип автомобіля");
        continue;
    }

    let price;

    if (carType === 1) {
        price = hours * 40;
    } else {
        price = hours * 30;
        electricCars = electricCars + 1;
    }

    if (hours > 5) {
        price = price * 0.8;
    }

    processedCars = processedCars + 1;
    totalPrice = totalPrice + price;

    if (price > maxPrice) {
        maxPrice = price;
    }
}

console.log("Кількість правильно оброблених автомобілів: " + processedCars);
console.log("Кількість електромобілів: " + electricCars);
console.log("Загальна сума оплати: " + totalPrice + " грн");
console.log("Найбільша оплата за один автомобіль: " + maxPrice + " грн");