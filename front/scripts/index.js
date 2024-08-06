const { tempData } = require("../scripts/tempData.js");

class Repository {
  constructor() {
    this.allcard = [];
  }

  card_base({ title, year, director, duration, genre, rate, poster }) {
    const card_container = document.querySelector("#card-container");

    const card = document.createElement("div");
    card.id = "card";

    const card_content = document.createElement("div");
    card_content.id = "card-content";

    const card_front = document.createElement("div");
    card_front.id = "card-front";
    const card_front_img = document.createElement("img");
    card_front_img.id = "card-front-img";
    card_front_img.src = poster;
    card_front_img.alt = "Error de imagen";
    const card_front_title = document.createElement("p");
    card_front_title.id = "card-front-title";
    card_front_title.textContent = title;

    const card_back = document.createElement("div");
    card_back.id = "card-back";
    const card_back_ul = document.createElement("ul");

    const card_back_li_1 = document.createElement("li");
    const card_back_li_1_h4_1 = document.createElement("h4");
    const card_back_li_1_h4_2 = document.createElement("h4");
    card_back_li_1_h4_1.textContent = "Tittle";
    card_back_li_1_h4_2.id = "card-back-title";
    card_back_li_1_h4_2.textContent = title;

    const card_back_li_2 = document.createElement("li");
    const card_back_li_2_h4_1 = document.createElement("h4");
    const card_back_li_2_h4_2 = document.createElement("h4");
    card_back_li_2_h4_1.textContent = "Year";
    card_back_li_2_h4_2.id = "card-back-year";
    card_back_li_2_h4_2.textContent = year;

    const card_back_li_3 = document.createElement("li");
    const card_back_li_3_h4_1 = document.createElement("h4");
    const card_back_li_3_h4_2 = document.createElement("h4");
    card_back_li_3_h4_1.textContent = "Director";
    card_back_li_3_h4_2.id = "card-back-director";
    card_back_li_3_h4_2.textContent = director;

    const card_back_li_4 = document.createElement("li");
    const card_back_li_4_h4_1 = document.createElement("h4");
    const card_back_li_4_h4_2 = document.createElement("h4");
    card_back_li_4_h4_1.textContent = "Duration";
    card_back_li_4_h4_2.id = "card-back-duration";
    card_back_li_4_h4_2.textContent = duration;

    const card_back_li_5 = document.createElement("li");
    const card_back_li_5_h4_1 = document.createElement("h4");
    const card_back_li_5_h4_2 = document.createElement("h4");
    card_back_li_5_h4_1.textContent = "Genre";
    card_back_li_5_h4_2.id = "card-back-genre";
    card_back_li_5_h4_2.textContent = ` ${genre}, `;

    const card_back_li_6 = document.createElement("li");
    const card_back_li_6_h4_1 = document.createElement("h4");
    const card_back_li_6_h4_2 = document.createElement("h4");
    card_back_li_6_h4_1.textContent = "Rate";
    card_back_li_6_h4_2.id = "card-back-rate";
    card_back_li_6_h4_2.textContent = rate;

    const card_all_li = [
      card_back_li_1,
      card_back_li_2,
      card_back_li_3,
      card_back_li_4,
      card_back_li_5,
      card_back_li_6,
    ];
    const card_li_all_h4_1 = [
      card_back_li_1_h4_1,
      card_back_li_2_h4_1,
      card_back_li_3_h4_1,
      card_back_li_4_h4_1,
      card_back_li_5_h4_1,
      card_back_li_6_h4_1,
    ];
    const card_li_all_h4_2 = [
      card_back_li_1_h4_2,
      card_back_li_2_h4_2,
      card_back_li_3_h4_2,
      card_back_li_4_h4_2,
      card_back_li_5_h4_2,
      card_back_li_6_h4_2,
    ];

    card_container.appendChild(card);
    card.appendChild(card_content);

    card_content.appendChild(card_front);
    card_front.appendChild(card_front_img);
    card_front.appendChild(card_front_title);

    card_content.appendChild(card_back);
    card_back.appendChild(card_back_ul);
    for (let index = 0; index < card_all_li.length; index++) {
      card_back_ul.appendChild(card_all_li[index]);
      card_all_li[index].appendChild(card_li_all_h4_1[index]);
      card_all_li[index].appendChild(card_li_all_h4_2[index]);
    }
  }
}

const repo = new Repository();

tempData.forEach((element) => {
  repo.card_base(element);
});
