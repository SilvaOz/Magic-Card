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
        }
        const otherBtn = this.parentElement.querySelector(this.classList.contains('btn-yes') ? '.btn-no' : '.btn-yes');
        if (otherBtn) {
            if (otherBtn.classList.contains('pressed')) {
                alert('You can only select one option in each table❗️');
            }
            otherBtn.classList.remove('pressed');
        }
    });
});

// Función para mostrar el resultado
function showResult() {
    result.textContent = `Ah, I sense that the number you are thinking of is... ... is it...  ${sum}`;
}

// Agregar evento click al botón "Ver resultado"
btnResult.addEventListener('click', showResult);

// Función para desactivar la opción no seleccionada
function deactivateOtherOption(btn) {
    const otherBtn = btn.parentElement.querySelector(btn.classList.contains('btn-yes') ? '.btn-no' : '.btn-yes');
    if (otherBtn) {
        if (otherBtn.classList.contains('pressed')) {
            alert('You can only select one option in each table❗️');
        }
        otherBtn.classList.remove('pressed');
        otherBtn.closest('.card').style.display = 'none';
    }
}

refreshBtn.onclick = function () {
    location.reload();
};
