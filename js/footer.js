var footerImages = document.querySelectorAll('.footer img');
var prenomTexts = document.querySelectorAll('.prenom p');

// Fonction pour appliquer la transformation au survol
function applyTransformation(element) {
    element.style.msTransform = 'scale(1.5)'; /* IE 9 */
    element.style.webkitTransform = 'scale(1.5)'; /* Safari 3-8 */
    element.style.transform = 'scale(1.5)';
}

// Fonction pour réinitialiser la transformation lorsque la souris quitte
function resetTransformation(element) {
    element.style.msTransform = 'scale(1)';
    element.style.webkitTransform = 'scale(1)';
    element.style.transform = 'scale(1)';
}

// Ajoutez un écouteur d'événements pour chaque image
footerImages.forEach(function(img, index) {
    img.addEventListener('mouseover', function() {
        // Appliquez la transformation au survol de la souris
        applyTransformation(img);

        // Appliquez la transformation au texte correspondant
        applyTransformation(prenomTexts[index]);
    });

    // Réinitialisez la transformation lorsque la souris quitte l'image
    img.addEventListener('mouseout', function() {
        // Réinitialisez la transformation de l'image
        resetTransformation(img);

        // Réinitialisez la transformation du texte correspondant
        resetTransformation(prenomTexts[index]);
    });
});
