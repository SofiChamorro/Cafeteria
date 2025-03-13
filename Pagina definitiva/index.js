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
    const slider = document.querySelector(".slider_box ul");
    const slides = document.querySelectorAll(".slider_box li");
    const totalSlides = 13;
    const slidesPerView = 4; // Muestras 4 imágenes a la vez en escritorio
    const btnNext = document.getElementById("next");
    const btnPrev = document.getElementById("prev");
    
    let index = 0;
    let autoSlide;

    function getSlidesPerView() {
        return window.innerWidth < 768 ? 1 : 4; // 1 imagen en móvil, 4 en escritorio
    }
    
    function updateSlider() {
        let slidesPerView = getSlidesPerView();
        slider.style.marginLeft = `-${index * (100 / slidesPerView)}%`; 
    }
    
    function nextSlide() {
        let slidesPerView = getSlidesPerView();
        let maxIndex = totalSlides - slidesPerView;
        if (index < maxIndex) {
            index++;
            updateSlider();
            resetAutoSlide();
        }
    }
    
    function prevSlide() {
        if (index > 0) { // Evita retroceder antes de la primera imagen
            index--;
            updateSlider();
            resetAutoSlide();
        }
    }
    
    function startAutoSlide() {
        autoSlide = setInterval(() => {
            let slidesPerView = getSlidesPerView();
            let maxIndex = totalSlides - slidesPerView;
            
            if (index < maxIndex) {
                index++;
            } else {
                index = 0;
            }
            updateSlider();
        }, 4000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }
    
    // 🎯 Eventos para los botones
    btnNext.addEventListener("click", nextSlide);
    btnPrev.addEventListener("click", prevSlide);
    window.addEventListener("resize", updateSlider);
    
    startAutoSlide();
});