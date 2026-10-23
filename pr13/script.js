// let heading = document.getElementsByTagName('h1');
// let heading2 = document.getElementById('profile - name');
// let profileName = document.getElementsByClassName('profile-role');
// let heading3 = document.querySelector('.profile-role');
// let skills = document.querySelectorAll('.skill');
// console.log(heading);

let student = {
    name: "Vlada",
    role: "11 IT",
    city: "Kyiv",
    portfolio: 'https://github.com/'
}

let nameElement = document.querySelector("#profile-name");
let roleElement = document.querySelector("#profile-role");
let cityElement = document.querySelector("#profile-city");
let portfolioElement = document.querySelector("#profile-portfolio");

nameElement.textContent = student.name;
roleElement.textContent = student.role;
cityElement.textContent = student.city;
// roleElement.innerHTML = '<strong>TEXT</strong>';
// portfolioElement.textContent = student.portfolio;
portfolioElement.setAttribute('href', student.portfolio);

let skills = document.querySelectorAll(".skill");
// for (let skill of skills) {}
for (let i = 0; i < skills.length; i++) {
    skills[i].textContent = skillsArr[i]
}
skills[0].textContent = "HTML";
skills[1].textContent = "CSS";
skills[2].textContent = "Javascript";
