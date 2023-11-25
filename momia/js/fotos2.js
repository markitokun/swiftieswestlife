var outsideImages2 = ["img/mcdonals.jpg", "img/pintando.jpg", "img/chuchi.png"];
var outsideDescriptions2 = ["mi foto fav", "pintamos un osito muy bonito", "comimos chuchi rico"];
var outsideCurrentIndex2 = 0;

function changeOutsideContent2(offset) {
    outsideCurrentIndex2 += offset;

    if (outsideCurrentIndex2 < 0) {
        outsideCurrentIndex2 = outsideImages2.length - 1;
    } else if (outsideCurrentIndex2 >= outsideImages2.length) {
        outsideCurrentIndex2 = 0;
    }

    updateOutsideContent2();
}
function updateOutsideContent2() {
    document.getElementById("outsideImage2").src = outsideImages2[outsideCurrentIndex2];
    document.getElementById("outsideDescription2").textContent = outsideDescriptions2[outsideCurrentIndex2];
}
