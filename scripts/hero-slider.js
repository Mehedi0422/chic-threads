document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dots .dot');
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 6000; // 6 seconds

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = 0;
        });
        
        // Remove active class from all dots
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show the selected slide and dot
        slides[index].classList.add('active');
        setTimeout(() => {
            slides[index].style.opacity = 1;
        }, 10);
        dots[index].classList.add('active');
        
        currentSlide = index;
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Start the slider
    function startSlider() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Pause the slider
    function pauseSlider() {
        clearInterval(slideInterval);
    }

    // Event listeners for navigation
    nextBtn.addEventListener('click', () => {
        pauseSlider();
        nextSlide();
        startSlider();
    });

    prevBtn.addEventListener('click', () => {
        pauseSlider();
        prevSlide();
        startSlider();
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            pauseSlider();
            showSlide(index);
            startSlider();
        });
    });

    // Pause on hover
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', pauseSlider);
        heroSlider.addEventListener('mouseleave', startSlider);
    }

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance of swipe to trigger slide change
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next slide
            pauseSlider();
            nextSlide();
            startSlider();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous slide
            pauseSlider();
            prevSlide();
            startSlider();
        }
    }

    // Initialize the slider
    showSlide(0);
    startSlider();

    // Search functionality
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    
    if (searchIcon && searchBar) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            searchBar.classList.toggle('visible');
        });
        
        // Close search when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchBar.contains(e.target) && e.target !== searchIcon) {
                searchBar.classList.remove('visible');
            }
        });
    }
});
