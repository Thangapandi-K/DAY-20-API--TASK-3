

const row = document.getElementById("row")

const API_URL = 'https://newsapi.org/v2/everything?q=Apple&from=2024-07-01&sortBy=popularity&apiKey=c2479b7faf2949abbe2abbb9e8ab4900'

// getting datas from API url

const joke = fetch(API_URL)
.then((res) => res.json())
.then((datas) => {

for (let i = 0; i < 20; i++ ) {

    const card = document.createElement("div");
    card.setAttribute("class", "card shadow p-3 mb-5 bg-body-tertiary rounded ")

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body")

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src", `${datas.articles[i].urlToImage}`);
    imgCard.setAttribute("class", "card-img-top");

    const dateText = document.createElement("p");
    dateText.innerText = `${datas.articles[i].publishedAt}`;
    dateText.setAttribute("class", "date fst-italic");

    const titlecard = document.createElement("div");
    titlecard.innerText = `${datas.articles[i].title}`;
    titlecard.setAttribute("class", "card-title");

    const cardText = document.createElement("p");
    cardText.innerText = `${datas.articles[i].description}`;
    cardText.setAttribute("class", "card-text");

    const cardButton = document.createElement("a");
    cardButton.innerText = "Read More.."
    cardButton.setAttribute("href", `${datas.articles[i].url}`);
    cardButton.setAttribute("class", "btn btn-primary");
    cardButton.setAttribute("type", "button");


    row.appendChild(card);
    card.appendChild(cardBody);
    cardBody.append(imgCard, dateText, titlecard, cardText, cardButton);
}

})