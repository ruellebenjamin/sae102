document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("sae");
    const originalText = title.textContent.trim();

    function typeWriter(text, index) {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(function () {
                typeWriter(text, index);
            },78); // ajustez la vitesse de frappe selon vos besoins
        }
    }

    title.textContent = ''; // Efface le contenu existant
    typeWriter(originalText, 0);
});