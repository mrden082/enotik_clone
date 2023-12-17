"use strict";
const modal = document.querySelector("#modal");
const wlHeader = document.querySelector("#wlHeader");
let clickCounter = 0;
let buttonArray = [0, 0, 0,
    0, 0, 0,
    0, 0, 0];
buttonArray[Math.floor(Math.random() * 9)] = 1;
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonIndex = Number(button.id.charAt(6));
        if (buttonArray[buttonIndex] === 1) {
            event.target.classList.add("loseButton");
            if (modal) {
                modal.showModal();
            }
        }
        else {
            event.target.classList.add("winButton");
            clickCounter++;
        }
        if (clickCounter === 8 && wlHeader) {
            wlHeader.innerHTML = "You win!";
            if (modal) {
                modal.showModal();
            }
        }
    });
});
