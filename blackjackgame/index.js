
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('cards-el');

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard()
{
    // range 1- 13
    let randomNumber = Math.floor(Math.random() * 13) +1;
    if (randomNumber === 1)
    {
        return 11;
    }
    else if (randomNumber >10)
    {
        return 10;
    }
    else
    {
        return randomNumber;
    }
}

function  startGame()
{
    isAlive = true;

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard
    renderGame();
}

function renderGame() {

    cardEl.textContent = 'cards: ';

    for (let i=0; i<cards.length; i++)
    {
        cardEl.textContent += cards[i]+ " ";
    }
    sumEl.textContent = 'sum: '+ sum;
    if (sum < 21) {
        message = "do you want to draw a new card";
    } else if (sum === 21) {
        message = "you got the black jack";
        hasBlackJack = true;
    } else if (sum > 21) {
        message = "you are  out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;

}
function newCard()
{
 if (isAlive === true && hasBlackJack === false) {
     let card = getRandomCard()
     sum += card;
     cards.push(card);
     console.log(cards);
     renderGame()
 }

}