const addButton = document.querySelector(".add");
const input = document.querySelector(".input");
const container = document.querySelector(".outer-div");

class Items {
  constructor(item) {
    this.createDiv(item);
  }
  createDiv(itemName) {
    console.log("call cmng");
    let card = document.createElement("div");
    let cardInner = document.createElement("div");
    let cardFront = document.createElement("div");
    let cardBack = document.createElement("div");
    cardFront.innerHTML = "Hover to view and click to remove";
    cardBack.innerHTML = itemName;
    card.classList.add("card");
    cardInner.classList.add("card-inner");
    cardFront.classList.add("card-front");
    cardBack.classList.add("card-back");
    card.addEventListener("click", () => remove(card));

    container.appendChild(card);
    card.appendChild(cardInner);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
  }
}

function remove(item) {
  container.removeChild(item);
}

function check() {
  if (input.value !== "") {
    new Items(input.value);
    input.value = "";
  }
}

addButton.addEventListener("click", check);
