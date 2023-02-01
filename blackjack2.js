let cards = [];
let sum = 0;
let message = "";
let isAlive = true;
let hasBlackjack = false; 
let card = document.querySelector("#cards");
let sums = document.querySelector("#sums");
let text_el = document.querySelector("#text-el");
console.log(text_el);
let hold = 0;

let player = {
    name: "Per",
    chip: 143
}
document.querySelector("#player-el").innerHTML = player.name + ":" + " $" + player.chip;

function renderCondition(firstCard, secondCard) {

    let randomNumber =  Math.floor(Math.random() * 13 + 1);
    if(randomNumber == 1) {
        return randomNumber = 11;
    }
    else if(randomNumber > 10) {
        return randomNumber = 10;
    }
    else {
        return randomNumber;
    }
}

let start = document.querySelector("#start-btn");
start.onclick = function() {

    let firstCard =  renderCondition();
    let secondCard =  renderCondition();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


//

function renderGame() {
    card.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++) {
        card.textContent += cards[i] + " " ;
    }

    sums.textContent = "Sum:" + sum;

    if(sum <= 20) {
        message = "Do you want to draw a new card?";
        isAlive = true;
        hasBlackjack = false;
    }
    else if(sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true;
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
        hasBlackjack = false;
    }
    text_el.textContent = message;
    
    if(isAlive == false || hasBlackjack == true) {
        newBtn.disabled = true;
    }
    else {
        newBtn.disabled = false;
    }
}

//

let newBtn = document.querySelector("#new-btn");
newBtn.addEventListener("click", function(evt) {
    
    let thirdCard = renderCondition();
    sum += thirdCard;  
    cards.push(thirdCard);
    renderGame();
})



