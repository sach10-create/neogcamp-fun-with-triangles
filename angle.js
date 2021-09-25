const angles = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output-box");

function checkTriangle() {
    const sum = calculateSum(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value));
    if (sum === 180) {
        output.innerText = "Your triangle is correct";
    }else{
        output.innerText = "Nayy!! Wrong Triangle";
    }
}

function calculateSum(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}



checkButton.addEventListener("click", checkTriangle)