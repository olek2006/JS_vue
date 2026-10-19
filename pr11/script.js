// // let book = {
// //     title: "Кобзар",
// //     author: "Tарас Шевченко",
// //     year: 1840,
// //     price: 500,
// //     isAvailable: true
// // }
// // console.log(book);
// // console.log(book.title);
// let books =[
// {id: 1, title: "Кобзар", author: "Tapас Шевченко", year: 1840, price: 500, isAvailable: true},
// {id: 2, title: "Лісова пісня", author: "Леся Українка", year: 1918, price: 600, isAvailable: true},
// {id: 3, title: "Тигролови", author: "Іван Багряний", year: 1944, price: 450,isAvailable: false},
// {id: 4,title: "Micro", author: "Валер'ян Підмогильний", уеar: 1928, price: 550, isAvailable: true}
// ]
// // console.log(books);
// // console.log(books.length);
// // console.log(books[1].author);
//
// // for (let book of books) {
// //     console.log(`book: ${book.id} - ${book.author}`);
// //}
// //
// //books.forEach(function (book) {
//     //console.log(`book: ${book.author}, {book.isAvailable}`);
// // })
//
// let isAvaibleCount = 0;
// let totalPrice = 0;
//
// for (let book of books) {
//     if (book.isAvailable === true) {
//         isAvaibleCount++;
//         totalPrice += book.price
//     }
// }
// console.log(totalPrice);
// console.log(isAvaibleCount);
//
// books[1].price = 750;
// console.log(books);
//
// books.push({
//     id: 5,
//     title: "Захар Беркут",
//     author: "Іван Франко",
//     year: 1882,
//     price: 500,
//     isAvailable: false
// })
// console.log(books);
//
// let enterId = +prompt("Enter your book ID");
// let bookFound = null;
//
// for (let book of books) {
//     if (book.id === enterId) {
//
//     }
// }
// let status = book.isAvailable ? "available" : "unavailable";
//
// if (status) alert(`ID: ${book.id} \ntitle: ${book.title} \nauthor: ${book.author} \nyear: ${book.year} \nprice: ${book.price} \nisAvailable: ${book.isAvailable}`)
// else alert("Book not found");

let clubs = [
    {id: 1, name: "Веб-дизайн", category: "ІТ", price: 850, members: 12, active: true},
    {id: 2, name: "ММА", category: "Спорт", price: 400, members: 16, active: false},
    {id: 3, name: "Плавання", category: "Спорт", price: 700, members: 25, active: true},
    {id: 4, name: "3D моделювання", category: "IT", price: 950, members: 9, active: true},
    {id: 5, name: "Вокал", category: "Мистецтво", price: 650, members: 14, active: false}
];

let clubInfo = (club) => `ID: ${club.id}
Назва: ${club.name}
Напрям: ${club.category}
Ціна: ${club.price} грн/місяць
Учасники: ${club.members}
Набір: ${club.active ? "відкрито" : "закрито"}`;

let choice;

do {
    choice = prompt(`КАТАЛОГ ГУРТКІВ
1 - Показати всі гуртки
2 - Знайти гурток за ID
3 - Записати учасника
4 - Змінити статус набору
5 - Додати новий гурток
6 - Показати статистику
0 - Вихід`);

    if (choice === null) {
        break;
    }

    switch (choice.trim()) {
        case "1": {
            if (clubs.length === 0) {
                alert("Каталог порожній");
                break;
            }
            let list = "";
            clubs.forEach(club => {
                list += clubInfo(club) + "\n\n";
            });
            alert(list);
            break;
        }

        case "2": {
            let idText = prompt("Введіть ID гуртка:");
            if (idText === null || idText.trim() === "" || isNaN(+idText)) {
                alert("Невірний ID!");
                break;
            }
            let club = clubs.find(club => club.id === +idText);
            if (club) {
                alert(clubInfo(club));
            } else {
                alert("Гурток не знайдено");
            }
            break;
        }

        case "3": {
            let idText = prompt("Введіть ID гуртка для запису учасника:");
            if (idText === null || idText.trim() === "" || isNaN(+idText)) {
                alert("Невірний ID!");
                break;
            }
            let club = clubs.find(club => club.id === +idText);
            if (!club) {
                alert("Гурток не знайдено");
                break;
            }
            if (!club.active) {
                alert(`Набір у гурток "${club.name}" закрито`);
                break;
            }
            if (confirm(`Записати учасника в гурток "${club.name}"?`)) {
                club.members++;
                alert(`Учасника записано. Тепер у гуртку: ${club.members}`);
            } else {
                alert("Запис скасовано");
            }
            break;
        }

        case "4": {
            let idText = prompt("Введіть ID гуртка для зміни статусу набору:");
            if (idText === null || idText.trim() === "" || isNaN(+idText)) {
                alert("Невірний ID!");
                break;
            }
            let club = clubs.find(club => club.id === +idText);
            if (!club) {
                alert("Гурток не знайдено");
                break;
            }
            if (confirm(`Змінити статус набору для гуртка "${club.name}"?`)) {
                club.active = !club.active;
                alert(`Статус набору тепер: ${club.active ? "відкрито" : "закрито"}`);
            } else {
                alert("Зміну скасовано");
            }
            break;
        }

        case "5": {
            let name = prompt("Введіть назву гуртка:");
            if (name === null || name.trim() === "") {
                alert("Назва не може бути порожньою!");
                break;
            }
            let category = prompt("Введіть напрям:");
            if (category === null || category.trim() === "") {
                alert("Напрям не може бути порожнім!");
                break;
            }
            let priceText = prompt("Введіть вартість за місяць (грн):");
            if (priceText === null || priceText.trim() === "" || isNaN(+priceText) || +priceText < 0) {
                alert("Невірна ціна!");
                break;
            }
            let membersText = prompt("Введіть кількість учасників:");
            if (membersText === null || membersText.trim() === "" || !Number.isInteger(+membersText) || +membersText < 0) {
                alert("Невірна кількість учасників!");
                break;
            }

            let newId = 1;
            for (let club of clubs) {
                if (club.id >= newId) {
                    newId = club.id + 1;
                }
            }

            let newClub = {
                id: newId,
                name: name.trim(),
                category: category.trim(),
                price: +priceText,
                members: +membersText,
                active: true
            };
            clubs.push(newClub);
            alert(`Гурток додано:\n${clubInfo(newClub)}`);
            break;
        }

        case "6": {
            if (clubs.length === 0) {
                alert("Каталог порожній, немає статистики");
                break;
            }
            let openCount = 0;
            let totalMembers = 0;
            let totalPrice = 0;

            for (let club of clubs) {
                if (club.active) {
                    openCount++;
                }
                totalMembers += club.members;
            }
            clubs.forEach(club => totalPrice += club.price);

            alert(`Статистика:
Загальна кількість гуртків: ${clubs.length}
Відкритий набір: ${openCount}
Сумарна кількість учасників: ${totalMembers}
Середня вартість занять: ${(totalPrice / clubs.length).toFixed(2)} грн`);
            break;
        }

        case "0":
            break;

        default:
            alert("Невірний пункт меню!");
    }
} while (choice.trim() !== "0");
