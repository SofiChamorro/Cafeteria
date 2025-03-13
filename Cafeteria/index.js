document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".nav_menu");
    const menuClose = document.querySelector(".nav_close");
    const navMenu = document.querySelector(".nav_link--menu");

    // Abrir el menú al hacer clic en el icono de menú
    menuToggle.addEventListener("click", () => {
        navMenu.classList.add("active");
    });

    // Cerrar el menú al hacer clic en el icono de cerrar
    menuClose.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

    // Cerrar el menú si se hace clic en un enlace dentro de él
    document.querySelectorAll(".nav_links").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
});
 