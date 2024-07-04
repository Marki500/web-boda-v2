document.addEventListener('scroll', function() {
    const heroSection = document.getElementById('hero-section');
    const scrollY = window.scrollY;
    const sectionHeight = heroSection.clientHeight;

    // Selecciona todos los elementos que tienen la clase 'scroll-effect'
    const scrollElements = document.querySelectorAll('.scroll-effect');

    scrollElements.forEach(heroImage => {
        // Calcula la opacidad en función de la posición de desplazamiento
        const opacity = 1 - (scrollY / (sectionHeight / 1.5));
        
        // Aplica la opacidad calculada a cada imagen
        heroImage.style.opacity = Math.max(opacity, 0);
        
        // Opcionalmente, también puedes aplicar una transformación para mejorar el efecto
        heroImage.style.transform = `translateY(${scrollY * 0.3}px)`;
    });
});
