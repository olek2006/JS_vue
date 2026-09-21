let event = +prompt(`Choose number of event:
1 - cinema(150)
2 - theatre(220)
3 - concert(350)`);

while (!Number.isInteger(event) || event < 1 || event > 3) {
    event = +prompt('Error. Choose again');
}

let price;

switch (event) {
    case 1:
        price = 150;
        break;
    case 2:
        price = 220;
        break;
    case 3:
        price = 350;
        break;
}

let day = +prompt(`Choose number of day:
1 - weekday
2 - weekend(+15%)`);

while (!Number.isInteger(day) || day < 1 || day > 2) {
    day = +prompt('Error. Choose again');
}

if (day === 2) {
    price *= 1.15;
}

let tickets = +prompt('How many tickets?');

while (!Number.isInteger(tickets) || tickets < 1 || tickets > 6) {
    tickets = +prompt('Error. Enter a number from 1 to 6');
}

let processed = 0;
let free = 0;
let discount = 0;
let fullPrice = 0;
let total = 0;

for (let i = 1; i <= tickets; i++) {

    let age = +prompt(`Ticket №${i}. Enter age (-1 = end):`)

    if (age === -1) {
        alert('Ended');
        break;
    }

    while (!Number.isInteger(age) || age < 0 || age > 100) {
        age = +prompt('Error. Enter again')
    }

    let ticketPrice = price;

    if (age <= 5) {
        free++;
        processed++;
        continue;
    }
    else if (age <= 12) {
        ticketPrice *= 0.5
        discount++
        processed++
    }
    else if (age <= 17) {
        ticketPrice *= 0.8
        discount++;
        processed++
    }
    else if (age <= 25) {

        let student = confirm('Do you have a student ticket?')

        if (student) {
            ticketPrice *= 0.9
            discount++;
        }
        else {
            fullPrice++;
        }

        processed++;
    }
    else if (age <= 59) {
        fullPrice++;
        processed++;
    }
    else {
        ticketPrice *= 0.75;
        discount++;
        processed++;
    }

    total += ticketPrice;
}

if (total > 1000) {
    total *= 0.95;
}

alert(`Processed tickets: ${processed}
Free tickets: ${free}
Discount tickets: ${discount}
Full price tickets: ${fullPrice}
Total price: ${total.toFixed(2)}`)
