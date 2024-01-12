var outsideImages7 = ["img/eras1.JPG", "img/eras2.JPG", "img/eras3.JPG"];
var outsideDescriptions7 = ["vasito chulo", "cartel mijijis", "posando con el vasito como no"];
var outsideCurrentIndex7 = 0;

function changeOutsideContent7(offset) {
    outsideCurrentIndex7 += offset;

    if (outsideCurrentIndex7 < 0) {
        outsideCurrentIndex7 = outsideImages7.length - 1;
    } else if (outsideCurrentIndex7 >= outsideImages7.length) {
        outsideCurrentIndex7 = 0;
    }

    updateOutsideContent7();
}
function updateOutsideContent7() {
    document.getElementById("outsideImage7").src = outsideImages7[outsideCurrentIndex7];
    document.getElementById("outsideDescription7").textContent = outsideDescriptions7[outsideCurrentIndex7];
}
