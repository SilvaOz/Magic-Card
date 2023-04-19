const cards = document.querySelectorAll('.card');
const btnYes = document.querySelectorAll('.btn-yes');
const btnNo = document.querySelectorAll('.btn-no');
const btnResult = document.querySelector('#btn-result');
const refreshBtn = document.getElementById('refresh-btn');
const result = document.querySelector('#result');


let sum = 0;

for (let i = 1; i < cards.length; i++) {
    cards[i].style.display = 'none';
}

function addNumber(number) {
    sum += number;
    const currentCard = this.closest('.card');
    currentCard.style.display = 'none';
    const nextCard = currentCard.nextElementSibling;
    if (nextCard) {
        nextCard.style.display = 'block';
    } else {
        checkCards();
    }
}

// Agregar evento click a los botones "Sí"
btnYes.forEach(button => {
    button.addEventListener('click', function () {
        const number = parseInt(this.closest('.card').dataset.number);
        addNumber.call(this, number);
    });
});

// Agregar evento click a los botones "No"
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


// Función para mostrar el resultado
function showResult() {
    result.textContent = `Ah, I sense that the number you are thinking of is... ... is it...  ${sum}`;
}

// Agregar evento click al botón "Ver resultado"
btnResult.addEventListener('click', showResult);

// Función para verificar si todas las cartas están ocultas
function checkCards() {
    const visibleCards = document.querySelectorAll('.card[style="display: block;"]');
    if (visibleCards.length === 0) {
        btnResult.style.display = 'block';
    }
}

refreshBtn.onclick = function () {
    location.reload();
};
