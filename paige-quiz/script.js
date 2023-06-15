const scoreDisplay = document.querySelector(".score-display");
let score = 100;

window.onload = () => {
    Array.from(document.querySelectorAll(".show-entry")).forEach(element => {
        element.addEventListener("click", () => {

            if (element.getAttribute("data-selected") === "true") {
                element.setAttribute("data-selected", "false");
                score++;
            } else {
                element.setAttribute("data-selected", "true");
                score--;
            }

            scoreDisplay.innerText = score;
        });
    });
}