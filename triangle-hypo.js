const a = document.querySelector("#input1");
const b = document.querySelector("#input2");
const button = document.querySelector("#calc-button");

function calcSumOfSquares(num1, num2) {
    const sum = (num1 * num1) + (num2 * num2);
    return sum;
}

function calcHypotenuse() {
    var sumOfSquares = calcSumOfSquares(a.value,b.value);
    console.log(sumOfSquares);
}

button.addEventListener("click", calcHypotenuse)