document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const navigation = document.querySelector('.carousel-navigation');

    let currentIndex = 0;
    const intervalTime = 3000;

    // Calcular el ancho del carrusel basado en el número de imágenes
    const carouselWidth = carousel.clientWidth * images.length;
    carousel.style.width = `${carouselWidth}px`;

    function changeImage(index) {
        currentIndex = index;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateNavigation();
    }

    function updateNavigation() {
        navigation.querySelectorAll('span').forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function initNavigation() {
        images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.addEventListener('click', () => changeImage(index));
            navigation.appendChild(dot);
        });
        updateNavigation();
    }

    function startCarousel() {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            changeImage(currentIndex);
        }, intervalTime);
    }

    initNavigation();
    startCarousel();
});
