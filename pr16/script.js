let news = [
    {
        category: 'JS',
        title: 'JS made page alive',
        description:'DOM dopomagae ypravlaty elementamu',
        date: '12.11.2026'
    },
    {
        category: 'Design',
        title: 'Design is important',
        description:'Why cards is important?',
        date: '20.11.2026'
    }
]
let newsList = document.querySelector('#news-list');
let newsCount = document.querySelector('#news-count');


function addNews(items){
    newsList.innerHTML = '';
    for (let item of items){
        let card = document.createElement("article");
        card.classList.add("news-card");

        let tag = document.createElement("span");
        tag.classList.add("tag");
        tag.textContent = item.category;

        let title = document.createElement("h2");
        title.textContent = item.title;

        let description = document.createElement("p");
        description.textContent = item.description;

        let date = document.createElement("small");
        date.textContent = item.date;

        card.append(tag, title, description, date);
        newsList.append(card)
    }
    newsCount.textContent = items.length;

}
addNews(news);

let allButton = document.querySelector("#show-all");
let jsButton = document.querySelector("#show-js");
let designButton = document.querySelector("#show-design");

allButton.addEventListener('click', function(){
    addNews(news);
});
jsButton.addEventListener('click', function(){
    let jsNews = news.filter((items) => {
        return items.category === 'JS';
    });
    addNews(jsNews);
})
designButton.addEventListener('click', function(){
    let designNews = news.filter((items) => {
        return items.category === 'design';
    });
    addNews(designNews);
});
