let firstCard = getRandomCard();
let secondCard = getRandomCard();

let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;
let hasBlacJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "კარტი: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ",";
  }
  sumEl.textContent = "ჯამი: " + sum;

  if (sum <= 20) {
    message = "გსურთ ახალი კარტის აღება?";
  } else if (sum === 21) {
    message = "თქვენ გაქვთ blackJack";
    hasBlacJack = true;
  } else {
    message = "სამწუხაროდ დამარცხდით :(";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}

function getRandomCard() {
  let random = Math.trunc(Math.random(1, 5) * 10) + 1;
  return random;
}
