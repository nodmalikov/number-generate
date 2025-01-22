const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = () => {
    const elInputMin = document.getElementById('min-input');
    const elInputMax = document.getElementById('max-input');
    const min = Number(elInputMin.value);
    const max = Number(elInputMax.value);
    
    if (elInputMin.value === '' || elInputMax.value === '') {
        alert("Iltimos son kiriting!");
        return;
    }
    
    if (min > max) {
        alert("Max mindan katta bo'lishi kerak!");
        return;
    }
    
    const elAnswer = document.getElementById('answer');
    elAnswer.textContent = getRandomNumber(min, max);
}

const elAnswerBtn = document.getElementById('button-start');
elAnswerBtn.addEventListener('click', randomNumber);