
const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const bigImage = document.getElementById("bigImage");
const close = document.getElementById("close");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;

images.forEach(function(image) {
    image.addEventListener("click", function() {
        lightbox.style.display = "flex";
        bigImage.src = image.src;
    });
});

close.addEventListener("click", function() {
    lightbox.style.display = "none";
});



images.forEach(function(image, index) {
    image.addEventListener("click", function() {
        currentIndex = index;
        lightbox.style.display = "flex";
        bigImage.src = image.src;
    });
});
next.addEventListener("click", function() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    bigImage.src = images[currentIndex].src;
});

prev.addEventListener("click", function() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    bigImage.src = images[currentIndex].src;
});