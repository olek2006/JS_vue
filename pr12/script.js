// // function isHighScore (score){
// //return score >= 10;
// // }
// // scores = [12, 5, 4, 11, 10, 9]
// // let highScore = scores.filter(isHighScore)
// // console.log(highScore)
// // scores = [12, 5, 4, 11, 10, 9]
// // let highScore = scores.filter(score => score >= 10);
// // console.log(highScore);
//
// let courses = [
//     {id: 1, title: "HTML", description: "HTML", price: 300, active: false},
//     {id: 2, title: "CSS", description: "CSS", price: 200, active: true},
//     {id: 3, title: "JavaScript", description: "JS", price: 500, active: true},
//     {id: 4, title: "Vue", description: "Vue", price: 600, active: false},
// ]
// // let idCourse = +prompt("What is the course?");
// // let found = courses.find(course => course.id === idCourse);
// // if (found !== undefined) {
// //     console.log(found.title);
// // }else{
// //     console.log("Такого курсу не знайдено");
// // }
// // let activeCourse = courses.filter(course => course.active === true);
// // console.log(activeCourse);
// //
// // let titleCourse = courses.map(course => course.title);
// // let priceCourse = courses.map(course => course.price * 0.9);
// // console.log(titleCourse);
// // console.log(priceCourse);
//
// // let jsSearch = courses.filter(course => course.description.includes('JS'))
// // console.log(jsSearch)
//
// // let books = [
// //     {id: 1, title: "HTML для початківців", author: "Олександр Серйозна", years: 2026, available: false},
// //     {id: 2, title: "CSS для початківців", author: "Олександр Весела", years: 2025, available: false},
// //     {id: 3, title: "JS для початківців", author: "Олександр Зла", years: 2025, available: false},
// //     {id: 4, title: "JS + VUE для початківців", author: "Олександр Відповідальна", years: 2026, available: true},
// // ]
// //
// // let year = +prompt("Рік видання")
// // let existingBooks = books.filter(book => book.years === year)
// // console.log(existingBooks)
// // let titleBooks = books.map(book => book.title)
// // console.log(titleBooks)
// // let search = books.filter(book => book.title.includes("Початківців"))
// // console.log(search)
//
// // let price = [500, 2000, 700]
// // console.log(price.sort((a, b) => a - b))
//
// let books = [
//     {id: 1, title: "HTML для початківців", author: "Олександр Серйозна", years: 2026, available: false},
//     {id: 2, title: "CSS для початківців", author: "Олександр Весела", years: 2025, available: true},
//     {id: 3, title: "JS для початківців", author: "Олександр Зла", years: 2025, available: false},
//     {id: 4, title: "JS + VUE для початківців", author: "Олександр Відповідальна", years: 2023, available: true},
// ]
// let lowerUpper = [...books].sort((a, b) => a.years - b.years)
// console.log(lowerUpper)
//
// let existingBooks = books
//     .filter(book => book.available === true)
//     .sort((a, b) => a.years - b.years)
//     .map(book => `${book.title}, ${book.author}`)
//
// console.log(existingBooks)

//________________________________________________

let courses = [
    {id: 1, title: "HTML", category: "Веб", price: 300, duration: 20, rating: 4.5, available: true},
    {id: 2, title: "CSS", category: "Веб", price: 450, duration: 30, rating: 4.7, available: true},
    {id: 3, title: "JavaScript", category: "Код", price: 500, duration: 40, rating: 4.8, available: true},
    {id: 4, title: "Vue.js", category: "Веб", price: 650, duration: 35, rating: 4.3, available: false},
    {id: 5, title: "Node.js", category: "Сервер", price: 700, duration: 45, rating: 4.6, available: true},
    {id: 6, title: "Python", category: "Код", price: 400, duration: 38, rating: 4.9, available: true},
    {id: 7, title: "SQL", category: "Сервер", price: 550, duration: 28, rating: 4.1, available: false},
    {id: 8, title: "Дизайн", category: "UI/UX", price: 350, duration: 25, rating: 3.9, available: true},
]

let findById = (id) => courses.find(course => course.id === id);

let filterByCategory = (category) => courses.filter(course => course.category.toLowerCase() === category.toLowerCase());

let filterByPrice = (maxPrice) => courses.filter(course => course.price <= maxPrice);

let searchByTitle = (text) => courses.filter(course => course.title.toLowerCase().includes(text.toLowerCase()));

let getTitles = () => courses.map(course => course.title);

let getDiscountPrices = () => courses.map(course => ({
    title: course.title,
    price: +(course.price * 0.85).toFixed(2)
}));

let sortByPriceAsc = () => [...courses].sort((a, b) => a.price - b.price);

let sortByRatingDesc = () => [...courses].sort((a, b) => b.rating - a.rating);

let sortByTitle = () => [...courses].sort((a, b) => a.title.localeCompare(b.title));

let getAvailableStats = () => {
    let availableCourses = courses.filter(course => course.available === true);
    let total = availableCourses.reduce((sum, course) => sum + course.price, 0);
    let average = availableCourses.length > 0 ? total / availableCourses.length : 0;
    return {count: availableCourses.length, total: total, average: average};
};

let courseToString = (course) =>
    `${course.id}. ${course.title} | ${course.category} | ${course.price} грн | ${course.duration} год | рейтинг ${course.rating} | ${course.available ? "доступний" : "недоступний"}`;

let showCourses = (list, emptyMessage) => {
    if (list.length === 0) {
        alert(emptyMessage);
        return;
    }
    console.log(list);
    alert(list.map(courseToString).join("\n"));
};

let readText = (message) => {
    let value = prompt(message);
    if (value === null || value.trim() === "") {
        alert("Невірне введення!");
        return null;
    }
    return value.trim();
};

let readNumber = (message) => {
    let value = prompt(message);
    if (value === null || value.trim() === "" || isNaN(+value) || +value < 0) {
        alert("Невірне введення!");
        return null;
    }
    return +value;
};

let menuText = `Каталог курсів:
1 - Знайти курс за ID
2 - Курси за категорією
3 - Курси за макс. ціною
4 - Пошук за назвою
5 - Тільки назви курсів
6 - Ціни зі знижкою 15%
7 - Сортування за ціною (від дешевших)
8 - Сортування за рейтингом (від найвищого)
9 - Сортування за назвою (А-Я)
10 - Статистика доступних курсів
0 - Вихід`;

let choice;
let again;

do {
    choice = prompt(menuText);

    if (choice === null) {
        break;
    }

    switch (choice.trim()) {
        case "1": {
            let id = readNumber("Введіть ID курсу:");
            if (id !== null) {
                let found = findById(id);
                if (found !== undefined) {
                    alert(courseToString(found));
                } else {
                    alert("Курс не знайдено");
                }
            }
            break;
        }
        case "2": {
            let category = readText("Введіть категорію (Веб, Код, Сервер, UI/UX):");
            if (category !== null) {
                showCourses(filterByCategory(category), "У цій категорії немає курсів");
            }
            break;
        }
        case "3": {
            let maxPrice = readNumber("Введіть максимальну ціну:");
            if (maxPrice !== null) {
                showCourses(filterByPrice(maxPrice), "Немає курсів за такою ціною");
            }
            break;
        }
        case "4": {
            let text = readText("Введіть частину назви курсу:");
            if (text !== null) {
                showCourses(searchByTitle(text), "Нічого не знайдено");
            }
            break;
        }
        case "5": {
            let titles = getTitles();
            console.log(titles);
            alert(titles.join("\n"));
            break;
        }
        case "6": {
            let discount = getDiscountPrices();
            console.log(discount);
            alert(discount.map(course => `${course.title} - ${course.price} грн`).join("\n"));
            break;
        }
        case "7":
            showCourses(sortByPriceAsc(), "Каталог порожній");
            break;
        case "8":
            showCourses(sortByRatingDesc(), "Каталог порожній");
            break;
        case "9":
            showCourses(sortByTitle(), "Каталог порожній");
            break;
        case "10": {
            let stats = getAvailableStats();
            if (stats.count === 0) {
                alert("Немає доступних курсів");
            } else {
                alert(`Доступних курсів: ${stats.count}\nЗагальна сума: ${stats.total} грн\nСередня ціна: ${stats.average.toFixed(2)} грн`);
            }
            break;
        }
        case "0":
            break;
        default:
            alert("Невірний вибір, спробуйте ще раз!");
    }

    if (choice.trim() === "0") {
        break;
    }

    again = confirm("Повернутися до меню?");
} while (again);

alert("До побачення!");
