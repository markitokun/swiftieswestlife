var outsideImages8 = ["img/meses1.JPG", "img/meses2.JPG", "img/meses3.JPG"];
var outsideDescriptions8 = ["besito", "otro besito", "corazao<3"];
var outsideCurrentIndex8 = 0;

function changeOutsideContent8(offset) {
    outsideCurrentIndex8 += offset;

    if (outsideCurrentIndex8 < 0) {
        outsideCurrentIndex8 = outsideImages8.length - 1;
    } else if (outsideCurrentIndex8 >= outsideImages8.length) {
        outsideCurrentIndex8 = 0;
    }

    updateOutsideContent8();
}
function updateOutsideContent8() {
    document.getElementById("outsideImage8").src = outsideImages8[outsideCurrentIndex8];
    document.getElementById("outsideDescription8").textContent = outsideDescriptions8[outsideCurrentIndex8];
}
