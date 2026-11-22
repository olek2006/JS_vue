let enrollBtn = document.querySelector('#enrollBtn');
let status = document.querySelector('#status');
enrollBtn.addEventListener('click', function() {
    status.textContent = 'Enrolled on a course';
    status.classList.add('success');
    enrollBtn.textContent = 'You are signed in';
})

let studentsName = document.querySelector('#studentsName');
let welcome = document.querySelector('#welcome');
studentsName.addEventListener('input', function() {
    let name = studentsName.value.trim();
    if (name !== ""){
        welcome.textContent = "Welcome customer";
    }
    else{
        welcome.textContent = "Welcome" + name + "!";
    }
})
let format = document.querySelector('#format');
let price = document.querySelector('#price');

format.addEventListener('change', function() {
    let selectPrice = Number(format.value);
    price.textContent = selectPrice + "грн";
})

let detailBtn = document.querySelector('#detailBtn');
let details = document.querySelector('#details');
detailBtn.addEventListener('click', function() {
    details.classList.toggle('hidden');
    if (details.classList.contains('hidden')) {
        detailBtn.textContent = 'Show details';
    }
    else {
        detailBtn.textContent = 'Hide details';
    }
})
let cards = document.querySelector('#cards');
let themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', function() {
    cards.classList.toggle('dark');
    if (cards.classList.contains('dark')) {
        themeBtn.textContent = 'Light theme';
    }
    else {
        themeBtn.textContent = 'Dark theme';
    }
})
