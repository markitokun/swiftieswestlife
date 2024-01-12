var outsideImages5 = ["img/xv1.jpg", "img/xv2.jpg", "img/xv3.JPG"];
var outsideDescriptions5 = ["bien guapos asi formales","Te veias hermosa con ese vestido","LOCURA"];
var outsideCurrentIndex5 = 0;

function changeOutsideContent5(offset) {
    outsideCurrentIndex5 += offset;

    if (outsideCurrentIndex5 < 0) {
        outsideCurrentIndex5 = outsideImages5.length - 1;
    } else if (outsideCurrentIndex5 >= outsideImages5.length) {
        outsideCurrentIndex5 = 0;
    }

    updateOutsideContent5();
}
function updateOutsideContent5() {
    document.getElementById("outsideImage5").src = outsideImages5[outsideCurrentIndex5];
    document.getElementById("outsideDescription5").textContent = outsideDescriptions5[outsideCurrentIndex5];
}
