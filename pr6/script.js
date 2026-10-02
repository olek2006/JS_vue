// function name(аргументи){
//     alert("Hello world!");
// }

// function hello(){
//     alert("Hello World!");
// }
// hello();
// hello();
//
// function showInfo(name, price = "Немає у наявності", count){
//     console.log("Магазин у Сані");
//     console.log("Графік роботи: 08:00 - 21:00");
//     console.log(`Товар: ${name}. Ціна: ${price}`);
//     console.log(`Сума до оплати: ${count * price}`);
// }
// showInfo("Зелений чай", 200, 10);
//
// function calculateTotal(price, total) {
//     let suma = price * total, discount, totalSuma;
//     if (suma >= 5000){
//         discount = 0.1
//     }
//     else {
//         discount = 0
//     }
//     totalSuma = suma * (1 - discount)
//     return totalSuma;
// }
//
// let total = calculateTotal(2500, 3)
// console.log(total)
//
// function showinfo(name, price = 'Нема в наявності', count){
//     console.log('Магазин у Сані')
//     console.log('Графік роботи: 8:00 - 21:00')
// }
// function getProductTotal(price, count){
//     return price * count;
// }
// function getDiscountPercent(total){
//     if (total >= 10000){
//         return 15
//     }
//     else if (total >= 5000){
//         return 10;
//     }
//     else if(total >= 2000){
//         return 5;
//     }
//     else{
//         return 0;
//     }
// }
// function getDiscountValue(total, percent){
//     return total * percent/100;
// }
// function getFinalPrice(total, discount){
//     return total - discount;
// }
// let productName = prompt('Введіть назву товару: ')
// let productPrice = prompt('Введіть вартісь товару: ')
// let productCount = prompt('Введіть кількість товару: ')
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discountPercent = getDiscountPercent(productTotal);
// let discountValue = getDiscountValue(productTotal, discountPercent);
// let finalPrice = getFinalPrice(productTotal, discountValue);
// showinfo(productName, productPrice, productCount);
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice}`);
// console.log(`Кількість: ${productCount}`);
// console.log(`Сума: ${productTotal}`);
// console.log(`Знижка: ${discountPercent}`);
// console.log(`Сума знижки: ${discountValue}`);
// console.log(`Фінальна ціна: ${finalPrice}`);

// function calculateTickets(price, count) {
//     return price * count;
// }
//
// function getTicketDiscount(total) {
//     if (total >= 1500) {
//         return 15;
//     }
//     else if (total >= 1000) {
//         return 10;
//     }
//     else if (total >= 500) {
//         return 5;
//     }
//     else {
//         return 0;
//     }
// }
//
// function calculateTicketDiscount(total, percent) {
//     return total * percent / 100;
// }
//
// function calculateTicketFinalPrice(total, discount) {
//     return total - discount;
// }
//
//
// let ticketPrice = prompt("Введіть ціну одного квитка: ");
// let ticketCount = prompt("Введіть кількість квитків: ");
//
// let total = calculateTickets(ticketPrice, ticketCount);
// let discountPercent = getTicketDiscount(total);
// let discount = calculateTicketDiscount(total, discountPercent);
// let finalPrice = calculateTicketFinalPrice(total, discount);
//
// console.log(`Ціна одного квитка: ${ticketPrice} грн`);
// console.log(`Кількість квитків: ${ticketCount}`);
// console.log(`Загальна вартість: ${total} грн`);
// console.log(`Знижка: ${discountPercent}%`);
// console.log(`Сума знижки: ${discount} грн`);
// console.log(`Кінцева сума до сплати: ${finalPrice} грн`);

let password = "";

function registration() {
    password = prompt("Придумайте пароль");
    alert("Ви зареєструвались");
}

function login() {
    if (password === "") {
        alert("Спочатку зареєструйтеся");
    }
    else {
        let attempts = 3;

        while (attempts > 0) {
            let userPassword = prompt("Введіть пароль");

            if (userPassword === password) {
                alert("Доступ надано");
                attempts = 0;
            }
            else {
                attempts--;

                if (attempts > 0) {
                    alert(`Неправильний пароль, алишилось ${attempts} спроб`);
                }
                else {
                    alert("Доступ заблоковано");
                }
            }
        }
    }
}

while (true) {
    let choice = prompt(
        "Виберіть дію:\n" +
        "1 - Реєстрація\n" +
        "2 - Вхід\n" +
        "0 - Вийти"
    );

    if (choice === "1") {
        registration();
    }
    else if (choice === "2") {
        login();
    }
    else if (choice === "0") {
        alert("Програму завершено");
        break;
    }
    else {
        alert("Виберіть відповідне меню");
    }
}

