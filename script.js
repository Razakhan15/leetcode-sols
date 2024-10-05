import { data } from "./data.js";

let cards = document.getElementsByClassName("cards");
let close = document.getElementById("close");
let modal = document.getElementById("popup");
let content = document.getElementById("content");
let searchBtn = document.getElementById("searchButton");
let search, searchData;

searchBtn.onclick = () => {
  search = document.getElementById("search").value.toLowerCase();
  searchData = search
    ? data.filter((ele) => ele.heading.toLowerCase().includes(search))
    : data;
  displayData(searchData);
};

function displayData(data) {
  cards[0].innerHTML = "";
  data
    .sort((a, b) => a.problemNo - b.problemNo)
    .forEach((ele) => {
      const div = document.createElement("div");
      div.setAttribute("class", "card");
      div.innerHTML = `
        <img src="${ele.image}" alt="">
        <p>${ele.heading}</p>
        `;
      cards[0].append(div);
      div.onclick = () => {
          console.log(ele.code);
          modal.style.display = "block";
          content.innerHTML = `
            <img src="${ele.image}" alt="${ele.heading}">
            <textarea disabled class='code'>${ele.code}</textarea>`;
      };
  });
}

close.onclick = () => {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  displayData(data);
});
