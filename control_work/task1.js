let age = +prompt("Введіть ваш вік ")
let day = +prompt("Введіть день:\n" +
    " 1 - будній\n" +
    " 2 - вихідний")

let price;

switch (day) {
    case 1:
        price = 200
        break
    case 2:
        price = 250
        break
    default:
        alert("Помилка: неправильний тип дня")
}

if (day === 1 || day === 2) {
    if (age <= 7) {
        price = 0;
    } else if (age <= 17) {
        price = price * 0.5;
    } else if (age >= 60) {
        price = price * 0.6;
    }
    alert(`Вартість квитка ${price} грн`);
}