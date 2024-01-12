var outsideImages4 = ["img/parrk.JPG", "img/besopez.jpg", "img/lentes.JPG"];
var outsideDescriptions4 = ["fotitos en el museo","besito de pez","nos cambiamos de lentitos"];
var outsideCurrentIndex4 = 0;

function changeOutsideContent4(offset) {
    outsideCurrentIndex4 += offset;

    if (outsideCurrentIndex4 < 0) {
        outsideCurrentIndex4 = outsideImages4.length - 1;
    } else if (outsideCurrentIndex4 >= outsideImages4.length) {
        outsideCurrentIndex4 = 0;
    }

    updateOutsideContent4();
}
function updateOutsideContent4() {
    document.getElementById("outsideImage4").src = outsideImages4[outsideCurrentIndex4];
    document.getElementById("outsideDescription4").textContent = outsideDescriptions4[outsideCurrentIndex4];
}
