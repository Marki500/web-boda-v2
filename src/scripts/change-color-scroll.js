
document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('black-and-white');

    document.addEventListener('scroll', function() {
        const rect = image.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const scrollProgress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height)));
        const grayscaleValue = 100 - (scrollProgress * 100);
        const brightnessValue = 1 + (scrollProgress * 0.4);
        //const scaleValue = 0.2 + (scrollProgress * 1.2); // Escala desde 1.0 hasta 0.5 del tamaño original

        image.style.filter = `grayscale(${grayscaleValue}%) brightness(${brightnessValue})`;
        //image.style.transform = `scale(${scaleValue})`;
    });
});
