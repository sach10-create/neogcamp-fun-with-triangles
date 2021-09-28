const a = document.querySelector("#input1");
const b = document.querySelector("#input2");
const button = document.querySelector("#calc-button");
const output = document.querySelector("#output-box");

function calcSumOfSquares(num1, num2) {
    const sum = (num1 * num1) + (num2 * num2);
    return sum;
}

function calcHypotenuse() {
    if (a.value.length > 0 && b.value.length > 0 && a.value > 0 && b.value > 0) {
        var sumOfSquares = calcSumOfSquares(a.value, b.value);
        var hypo = Math.sqrt(sumOfSquares);
        output.innerText = "Hypotenuse is " + hypo;
    } else {
        alert("Invalid Inputs");
    }
}

button.addEventListener("click", calcHypotenuse)