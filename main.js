const body = document.getElementById("bod");
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const h3 = document.querySelector('h3');
const btnCopy = document.getElementById('copy');
const btnLeft = document.querySelector('.toLeft');
const btnTop = document.querySelector('.toTop');
const btnBottom = document.querySelector('.toBottom');
const btnRight = document.querySelector('.toRight');
let btnColor = document.querySelectorAll('#btncolor');

let btnColorChange = () => {
    for (i = 0; i < btnColor.length; i++) {

        btnColor[i].style.background = `linear-gradient(to ${direction} ,` + color1.value + "," + color2.value + "," + color3.value + ")";
    }

}

let direction = 'right';

function setGradient() {

    body.style.background = `linear-gradient(to ${direction} ,` + color1.value + "," + color2.value + "," + color3.value + ")";
    btnColorChange();
    h3.textContent = body.style.background + ";";
}


btnLeft.onclick = function() {
    direction = 'left';
    setGradient();

}

btnTop.onclick = function() {
    direction = 'top';
    setGradient();
}

btnRight.onclick = function() {
    direction = 'right';
    setGradient();
}

btnBottom.onclick = function() {
    direction = 'bottom';
    setGradient();
}


color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
color3.addEventListener("input", setGradient)




btnCopy.addEventListener('click', function() {
    let p1 = document.getElementById("copytext");
    let hiddenField = document.getElementById("copyText1");
    hiddenField.value = p1.innerHTML;
    hiddenField.select();
    document.execCommand("copy");

    console.log("Copied the text: " + hiddenField.value);


}, false);

btnLeft.onclick = function() {
    direction = 'left';
    setGradient();
    btnLeft.style.background = `linear-gradient(to ${direction} ,` + color1.value + "," + color2.value + "," + color3.value + ")";
}