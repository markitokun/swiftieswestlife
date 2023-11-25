var outsideImages3 = ["img/museo1.jpg", "img/museo2.jpg", "img/museo3.jpg"];
var outsideDescriptions3 = ["fotitos en el museo"];
var outsideCurrentIndex3 = 0;

function changeOutsideContent3(offset) {
    outsideCurrentIndex3 += offset;

    if (outsideCurrentIndex3 < 0) {
        outsideCurrentIndex3 = outsideImages3.length - 1;
    } else if (outsideCurrentIndex3 >= outsideImages3.length) {
        outsideCurrentIndex3 = 0;
    }

    updateOutsideContent3();
}
function updateOutsideContent3() {
    document.getElementById("outsideImage3").src = outsideImages3[outsideCurrentIndex3];
    document.getElementById("outsideDescription3").textContent = outsideDescriptions3[outsideCurrentIndex3];
}
