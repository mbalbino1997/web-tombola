const btnContainer = document.querySelector(".col-8")
for (i = 1; i <= 90; i++) {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = i;
    btnContainer.appendChild(button);
}