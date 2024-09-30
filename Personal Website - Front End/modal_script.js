document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    const knowMoreButtons = document.querySelectorAll('.know-more');

    knowMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.getAttribute('data-modal-target'));
            modal.style.display = 'block';
            document.body.classList.add('stop-scrolling');
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
            document.body.classList.remove('stop-scrolling');
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.classList.remove('stop-scrolling');
            }
        });
    });

    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach((carousel, index) => {
        let slideIndex = 0;
        const slides = carousel.querySelectorAll('.carousel-slide img');
        const prev = carousel.querySelector('.prev');
        const next = carousel.querySelector('.next');

        function showSlides(n) {
            if (n >= slides.length) slideIndex = 0;
            if (n < 0) slideIndex = slides.length - 1;
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === slideIndex) slide.classList.add('active');
            });
        }        

        function moveSlide(n) {
            showSlides(slideIndex += n);
        }

        prev.addEventListener('click', () => moveSlide(-1));
        next.addEventListener('click', () => moveSlide(1));

        showSlides(slideIndex);
    });
});
