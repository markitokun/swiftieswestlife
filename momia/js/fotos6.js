var outsideImages6 = ["img/eldia1.jpg", "img/eldia2.jpg", "img/eldia3.jpg"];
var outsideDescriptions6 = [];
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
