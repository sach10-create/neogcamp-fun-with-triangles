const sides = document.querySelectorAll(".sides");
const button = document.querySelector(".calc-button")
const output = document.querySelector(".output-box")

function calcArea() {
    const s = calcS(Number(sides[0].value), Number(sides[1].value), Number(sides[2].value));
    const product = calcProduct(s,Number(sides[0].value), Number(sides[1].value), Number(sides[2].value))
    const area = Math.sqrt(product);
    output.innerText = "Area of Triangle "+ area;
}

function calcProduct(s,a,b,c){
    const product = s * (s-a) * (s-b) * (s-c);
    return product;
}

function calcS(a, b, c) {
    var perimeter = a + b + c;
    var s = perimeter / 2;
    return s;
}
button.addEventListener("click", calcArea)