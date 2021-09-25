const angles = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-button");

function checkTriangle(){
    const sum = calculateSum(45,60,90);
    console.log(sum);
}

function calculateSum(angle1, angle2, angle3){
    const sum = angle1 + angle2 + angle3;
    return sum;
}



checkButton.addEventListener("click", checkTriangle)