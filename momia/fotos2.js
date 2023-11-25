var outsideImages2 = ["img/mcdonals.jpg", "img/pintando.jpg", "img/chuchi.jpg"];
var outsideDescriptions2 = ["Evento canonico nuestro primer beso OMG", "Aqui fuimos por un cafesito muy rico, el lugar muy bonito y la ñiña muy hermosa", "Enseñandole a jugar maincra ala bb"];
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
