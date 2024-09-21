document.addEventListener("DOMContentLoaded", function() {
    // Efecto de cambio de fondo al hacer clic en el cuerpo de la página
    document.body.addEventListener("click", function() {
        const currentColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = currentColor === 'rgb(255, 255, 255)' ? '#f4f4f4' : 'white';
    });

    // Efecto al pasar el mouse por las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.backgroundColor = '#e0ffe0';
        });
        section.addEventListener('mouseout', () => {
            section.style.backgroundColor = 'white';
        });
    });
});
