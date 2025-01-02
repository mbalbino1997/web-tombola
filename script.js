const btnContainer = document.querySelector(".col-8");
const btnRandom = document.getElementById("random");
const btnEndGame = document.getElementById("endGame");
const sortedNumber = document.getElementById("sortedNumber");

let extractedNumbers = JSON.parse(localStorage.getItem("extractedNumbers")) || [];
const numbersArray = Array.from({ length: 90 }, (_, i) => i + 1);

numbersArray.forEach((number) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = number;
    btnContainer.appendChild(button);

    if (extractedNumbers.includes(number)) {
        button.classList.add("active");
    }
});

btnRandom.addEventListener("click", () => {
    const availableNumbers = numbersArray.filter(num => !extractedNumbers.includes(num));
    const randomNumber = randomNumberGenerator(availableNumbers);

    if (!randomNumber) {
        sortedNumber.innerHTML = `<h1>Estrazione terminata</h1>`;
        return;
    }

    sortedNumber.innerHTML = `<h1>${randomNumber}</h1>`;
    extractedNumbers.push(randomNumber);
    localStorage.setItem("extractedNumbers", JSON.stringify(extractedNumbers));

    const specificButton = Array.from(btnContainer.children).find(button => button.textContent === String(randomNumber));
    if (specificButton) specificButton.classList.add("active");
});

function randomNumberGenerator(array) {
    return array[Math.floor(Math.random() * array.length)];
}

btnEndGame.addEventListener("click", () => {
    localStorage.removeItem("extractedNumbers");
    extractedNumbers = [];
    location.reload();
});
