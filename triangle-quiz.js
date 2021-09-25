const quizForm = document.querySelector(".quiz-form");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output-box");

const correctAnswer = ["90", "right-angled"];

function calculateScore() {
    let score = 0;
    let i = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswer[i]) {
            score = score + 1;
        }
        i = i + 1;
    }
    output.innerText = "Your score is " + score;
}

checkButton.addEventListener("click" ,  calculateScore);