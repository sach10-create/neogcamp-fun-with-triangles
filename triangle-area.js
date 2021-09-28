const sides = document.querySelectorAll(".sides");
const button = document.querySelector(".calc-button")
const output = document.querySelector(".output-box")

function calcArea() {
    a = Number(sides[0].value);
    b = Number(sides[1].value);
    c = Number(sides[2].value);
    if (a != '' && b != '' && c != '' && a > 0 && b > 0 && c > 0) {
        const s = calcS(a, b, c);
        const product = calcProduct(s, a, b, c)
        const area = Math.sqrt(product);
        output.innerText = "Area of Triangle " + area;
    } else {
        alert("Invalid Inputs");
    }
}

function calcProduct(s, a, b, c) {
    const product = s * (s - a) * (s - b) * (s - c);
    return product;
}

function calcS(a, b, c) {
    var perimeter = a + b + c;
    var s = perimeter / 2;
    return s;
}
button.addEventListener("click", calcArea)