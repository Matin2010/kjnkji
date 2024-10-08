// import files
import { data } from "./data.js";
import { bikes } from "./data.js";

// lets
let a = 0;
let b = 0;
let favorite_num = 1;

// get element from document
let new_bikes_assortiment = document.getElementById("new_bikes_assortiment");
let line_bikes = document.getElementById("line_bikes");
let favorite = document.querySelector(".favorite");
let yarik = document.getElementById('yarik')

if (favorite_num > 0) {
  favorite.src = "/images/favorite_icon_trues.png";
}

// For evely value in data from jata.js
data.forEach((item) => {
  // Starting all block
  let bikes = document.createElement("div");
  bikes.style.borderRadius = "20px";
  bikes.style.width = "400px";
  bikes.style.height = "500px";
  bikes.style.backgroundColor = "white";
  bikes.style.display = "flex";
  bikes.style.flexWrap = "wrap";
  bikes.style.justifyContent = "space-around";

  new_bikes_assortiment.appendChild(bikes);

  // Block for country and status
  let block1 = document.createElement("div");
  block1.style.display = "flex";
  block1.style.flexWrap = "wrap";
  block1.style.width = "99%";
  block1.style.justifyContent = "space-between";

  // Flag of country
  let imgCountry = document.createElement("img");
  imgCountry.style.width = "88px";
  imgCountry.style.height = "46px";
  imgCountry.style.borderTopLeftRadius = "10px";
  if (data[a].country == "Italy") {
    imgCountry.src = "/images/countries/italy.png";
  } else if (data[a].country == "USA") {
    imgCountry.src = "/images/countries/usa.png";
  }
  block1.appendChild(imgCountry);

  // Status has or no
  let status = document.createElement("div");
  if (data[a].amount > 0) {
    status.textContent = "В наличии";
    status.style.color = "green";
  } else {
    status.textContent = "Распродано";
    status.style.color = "red";
  }
  block1.appendChild(status);
  bikes.appendChild(block1);

  // img bike
  let image = document.createElement("img");
  image.style.width = "90%";
  image.style.height = "287px";
  image.src = data[a].img;
  bikes.appendChild(image);

  // Name of bike
  let name = document.createElement("p");
  name.textContent = data[a].name;
  name.style.fontSize = "20px";
  bikes.appendChild(name);

  let price = document.createElement("h4");
  price.textContent = data[a].price;
  price.style.fontSize = "20px";
  bikes.appendChild(price);

  a += 1;
});

bikes.forEach((item) => {
    // Starting all block
    let bikeses = document.createElement("div");
    bikeses.style.borderRadius = "10px";
    bikeses.style.width = "350px";
    bikeses.style.height = "400px";
    bikeses.style.backgroundColor = "white";
    bikeses.style.display = "flex";
    bikeses.style.flexWrap = "wrap";
    bikeses.style.justifyContent = "space-around";
    bikeses.style.color = "black";

    line_bikes.appendChild(bikeses);

    // Block for country and status
    let block1 = document.createElement("div");
    block1.style.display = "flex";
    block1.style.padding = "1px";
    block1.style.flexWrap = "wrap";
    block1.style.width = "99%";
    block1.style.justifyContent = "space-between";
    bikeses.appendChild(block1);

    // Flag of country
    let imgCountry = document.createElement("img");
    imgCountry.style.width = "88px";
    imgCountry.style.height = "46px";
    imgCountry.style.borderTopLeftRadius = "10px";
    if (bikes[b].country == "Italy") {
      imgCountry.src = "/images/countries/italy.png";
    } else if (bikes[b].country == "USA") {
      imgCountry.src = "/images/countries/usa.png";
    }
    block1.appendChild(imgCountry);

    // Status has or no
    let status = document.createElement("div");
    if (bikes[b].amount > 0) {
      status.textContent = "В наличии";
      status.style.color = "green";
    } else {
      status.textContent = "Распродано";
      status.style.color = "red";
    }
    block1.appendChild(status);
    bikeses.appendChild(block1);

    // img bike
    let image = document.createElement("img");
    image.style.width = "90%";
    image.style.height = "240px";
    image.src = bikes[b].img;
    bikeses.appendChild(image);

    // Name of bike
    let name = document.createElement("p");
    name.textContent = bikes[b].name;
    name.style.fontSize = "20px";
    bikeses.appendChild(name);

    let price = document.createElement("h4");
    price.textContent = bikes[b].price;
    price.style.fontSize = "20px";
    bikeses.appendChild(price);

    b += 1;
});
