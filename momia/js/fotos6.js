var outsideImages6 = ["img/eldia1.jpg", "img/eldia2.JPG", "img/eldia3.JPG"];
var outsideDescriptions6 = ["EL DIA","EL DIA","EL DIA"];
var outsideCurrentIndex6 = 0;

function changeOutsideContent6(offset) {
    outsideCurrentIndex6 += offset;

    if (outsideCurrentIndex6 < 0) {
        outsideCurrentIndex6 = outsideImages6.length - 1;
    } else if (outsideCurrentIndex6 >= outsideImages6.length) {
        outsideCurrentIndex6 = 0;
    }

    updateOutsideContent6();
}
function updateOutsideContent6() {
    document.getElementById("outsideImage6").src = outsideImages6[outsideCurrentIndex6];
    document.getElementById("outsideDescription6").textContent = outsideDescriptions6[outsideCurrentIndex6];
}
