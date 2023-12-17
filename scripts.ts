const modal: HTMLDialogElement | null = document.querySelector("#modal");
const wlHeader: HTMLHeadingElement | null = document.querySelector("#wlHeader");

let clickCounter: number = 0;
let buttonArray: number[] = [0, 0, 0,
                             0, 0, 0,
                             0, 0, 0];

buttonArray[Math.floor(Math.random() * 9)] = 1;

let buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button");

buttons.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", (event: MouseEvent | Event) => {
        const buttonIndex: number = Number(button.id.charAt(6));

        if (buttonArray[buttonIndex] === 1) {
            (event.target as HTMLButtonElement).classList.add("loseButton");
            if (modal) {
                modal.showModal();
            }
        } else {
            (event.target as HTMLButtonElement).classList.add("winButton");
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
