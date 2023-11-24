document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("h1");
    const originalText = title.textContent.trim();

    function typeWriter(text, index) {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(function () {
                typeWriter(text, index);
            }, 100); // ajustez la vitesse de frappe selon vos besoins
        }
    }

    // Commencez l'effet d'écriture lorsque la page est chargée
    title.textContent = ''; // Efface le contenu existant
    typeWriter(originalText, 0);
});