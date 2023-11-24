document.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('.visuel img, .visuel2 img, .visuel3 img');

    images.forEach(function (image) {
        image.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.4)';
            this.style.transition = 'transform 0.3s ease-in-out';
        });

        image.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease-in-out';
        });
    });
});