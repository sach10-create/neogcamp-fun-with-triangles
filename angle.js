const angles = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output-box");

function checkTriangle() {
    const a = Number(angles[0].value);
    const b = Number(angles[1].value);
    const c = Number(angles[2].value);

    if (a != '' && b != '' && c != '' && a > 0 && b > 0 && c > 0) {
        const sum = calculateSum(a, b, c);
        if (sum === 180) {
            output.innerText = "Your triangle is correct";
        } else {
            output.innerText = "Nayy!! Wrong Triangle";
        }
    } else {
        alert("Invalid Inputs");
    }
}

function calculateSum(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}



checkButton.addEventListener("click", checkTriangle)