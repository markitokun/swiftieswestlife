var outsideImages = ["img/besob.jpg", "img/cafesito.JPG", "img/jugando maincra.JPG"];
var outsideDescriptions = ["Evento canonico nuestro primer beso OMG", "Aqui fuimos por un cafesito muy rico, el lugar muy bonito y la ñiña muy hermosa", "Enseñandole a jugar maincra ala bb"];
var outsideCurrentIndex = 0;

function changeOutsideContent(offset) {
    outsideCurrentIndex += offset;

    if (outsideCurrentIndex < 0) {
        outsideCurrentIndex = outsideImages.length - 1;
    } else if (outsideCurrentIndex >= outsideImages.length) {
        outsideCurrentIndex = 0;
    }

    updateOutsideContent();
}
function updateOutsideContent() {
    document.getElementById("outsideImage").src = outsideImages[outsideCurrentIndex];
    document.getElementById("outsideDescription").textContent = outsideDescriptions[outsideCurrentIndex];
}
