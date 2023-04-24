// Selecting DOM elements
const cards = document.querySelectorAll('.card');
const btnYes = document.querySelectorAll('.btn-yes');
const btnNo = document.querySelectorAll('.btn-no');
const btnResult = document.querySelector('#btn-result');
const refreshBtn = document.getElementById('refresh-btn');
const result = document.querySelector('#result');



// Initializing variables
let sum = 0;

// Prompt to get user name
const userName = prompt("Welcome to Magic Mind Reader! Please enter your name:");

// Displaying instructions
alert(`Hello ${userName}! To play Magic Mind Reader, follow these simple steps:

1. Choose a number between 1 and 100 and keep it in your head or write it down.
2. When you are asked if your number is present, answer yes or no based on the cards that are shown to you.
3. After all 10 cards have been shown, press "Your Number" to reveal the number you chose.

Enjoy the game and have fun!`);

// Hiding all cards except the first one
for (let i = 1; i < cards.length; i++) {
    cards[i].style.display = 'none';
}

// Function to add the selected number to the sum
function addNumber(number) {
    // Checking if the sum is greater than 100
    if (sum + number > 100) {
        // Alerting the user that the selected number is not valid and resetting the sum
        alert('Sorry, the number you selected cannot be greater than 100. Please choose a number between 1 and 100. Press Reset 👈️ to start again.');
        sum = 0;
        // Hiding all cards except the first one
        for (let i = 1; i < cards.length; i++) {
            cards[i].style.display = 'none';
        }
        // Showing the first card again
        cards[0].style.display = 'block';
        return;
    }
    // Updating the sum and hiding the current card
    sum += number;
    const currentCard = this.closest('.card');
    currentCard.style.display = 'none';
    // Showing the next card or checking if all cards are hidden
    const nextCard = currentCard.nextElementSibling;
    if (nextCard) {
        nextCard.style.display = 'block';
    } else {
        checkCards();
    }
}



// Showing the first card when the page loads
window.onload = function () {
    cards[0].style.display = 'block';
}

// Adding click events to the "Yes" buttons
btnYes.forEach(button => {
    button.addEventListener('click', function () {
        const number = parseInt(this.closest('.card').dataset.number);
        addNumber.call(this, number);
    });
});

// Adding click events to the "No" buttons
btnNo.forEach(button => {
    button.addEventListener('click', function () {
        const currentCard = this.closest('.card');
        currentCard.style.display = 'none';
        const nextCard = currentCard.nextElementSibling;
        if (nextCard) {
            nextCard.style.display = 'block';
        } else {
            checkCards();
        }
    });
});

// Function to show the result
function showResult() {

    const randomResponses = [
        `By the power of the ancient gods, ${userName}! The number you are thinking of is...`,
        `Through the wisdom of the tarot, ${userName}! The number in your mind is...`,
        `By the might of the cosmos, ${userName}! The number you're thinking of is...`,
        `Through the guidance of the spirits, ${userName}! The number in your thoughts is...`,
        `By the magic of the crystal ball, ${userName}! The number you are envisioning is...`,
        `Through the force of nature, ${userName}! The number you're picturing is...`,
        `By the power of the moon and stars, ${userName}! The number you are contemplating is...`,
        `Through the strength of the elements, ${userName}! The number in your imagination is...`,
        `By the intuition of the seer, ${userName}! The number you are considering is...`,
        `Through the secrets of the universe, ${userName}! The number in your mind's eye is...`,
        `By the ancient runes of the Norse gods, ${userName}! The number you're thinking of is...`,
        `By the mystical energies of the pyramids, ${userName}! The number you have in mind is...`,
        `By the wisdom of the ancient Chinese sages, ${userName}! The number you're thinking of is...`,
        `By the cosmic forces of the universe, ${userName}! The number in your mind is...`,
        `By the divination of the crystal ball, ${userName}! The number you have in mind is...`,
        `By the energy of the full moon, ${userName}! The number you're thinking of is...`,
        `By the magic of the witches' coven, ${userName}! The number in your mind is...`,
        `By the power of the sacred stones, ${userName}! The number you have in mind is...`,
        `By the grace of the angels, ${userName}! The number you're thinking of is...`
    ];

    const randomIndex = Math.floor(Math.random() * randomResponses.length);
    const response = randomResponses[randomIndex];

    // Animación de typewriter
    let i = 0;
    result.textContent = "";
    const intervalId = setInterval(() => {
        if (i < response.length) {
            result.textContent += response.charAt(i);
            i++;
        } else {
            clearInterval(intervalId);
            result.classList.add("result--highlight");
            result.textContent = sum;
            // Reproducir sonido
            setTimeout(() => {
                const audio = new Audio('./src/Gong.mp3');
                audio.play();
            }, 200);
        }
    }, 50);
}

// Adding click event to the "See result" button
btnResult.addEventListener('click', showResult);

// Function to check if all cards are hidden
function checkCards() {
    const visibleCards = document.querySelectorAll('.card[style="display: block;"]');
    if (visibleCards.length === 0) {
        btnResult.style.display = 'block';
    }
    // Checking if the sum is zero
    if (sum === 0) {
        alert("Choose a number between 1 and 100!");
    }
    // Showing the result card
    resultCard.style.display = 'block';
    // Updating the result text
    const resultText = document.querySelector('.result__text');
    resultText.textContent = sum;
}

// Adding click event to the "Reset" button
refreshBtn.onclick = function () {
    // Reloading the page to reset the game
    location.reload();
};

