document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("iframe");
    const scrollButton = document.getElementById("scroll-button");

    // Ajoutez un gestionnaire d'événements pour le bouton de défilement
    scrollButton.addEventListener("click", function () {
        // Faites défiler l'iframe vers le bas
        iframe.contentWindow.scrollBy(0, window.innerHeight);
    });
});
