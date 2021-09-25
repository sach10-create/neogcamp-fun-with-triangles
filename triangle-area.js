const sides = document.querySelectorAll(".sides");
const button = document.querySelector(".calc-button")

function calcArea() {
    const s = calcS(Number(sides[0].value), Number(sides[1].value), Number(sides[2].value));
    const part1 = s - Number(sides[0].value);
    const part2 = s - Number(sides[1].value);
    const part3 = s - Number(sides[2].value);
    const product = s * part1 * part2 * part3;
    const area = Math.sqrt(product);
    console.log(area);
}

function calcS(a, b, c) {
    var perimeter = a + b + c;
    var s = perimeter / 2;
    return s;
}
button.addEventListener("click", calcArea)