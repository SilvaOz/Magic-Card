// Selecting DOM elements
const cards = document.querySelectorAll('.card');
const btnYes = document.querySelectorAll('.btn-yes');
const btnNo = document.querySelectorAll('.btn-no');
const btnResult = document.querySelector('#btn-result');
const refreshBtn = document.getElementById('refresh-btn');
const result = document.querySelector('#result');

// Initializing variables
let sum = 0;

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
    result.textContent = `Ah, I sense that the number you are thinking of is... ... is it...  ${sum}`;
}

// Adding click event to the "See result" button
btnResult.addEventListener('click', showResult);

// Function to check if all cards are hidden
function checkCards() {
    const visibleCards = document.querySelectorAll('.card[style="display: block;"]');
    if (visibleCards.length === 0) {
        btnResult.style.display = 'block';
    }
}

// Adding click event to the "Reset" button
refreshBtn.onclick = function () {
    // Reloading the page to reset the game
    location.reload();
};
