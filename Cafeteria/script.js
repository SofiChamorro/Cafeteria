document.addEventListener('keydown', function (event) {
    // Detecta si se presionan Ctrl + Alt al mismo tiempo
    if (event.ctrlKey && event.altKey) {
        event.preventDefault();
        document.body.classList.toggle('high-contrast');
    }

    // Navegación con flechas del teclado
    let focusableElements = Array.from(document.querySelectorAll('a, button, input, textarea, select'));
    let index = focusableElements.indexOf(document.activeElement);

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        let nextIndex = (index + 1) % focusableElements.length;
        focusableElements[nextIndex].focus();
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        let prevIndex = (index - 1 + focusableElements.length) % focusableElements.length;
        focusableElements[prevIndex].focus();
    }
});
