let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

// Function to update the slider position
function updateSlider() {
    const offset = -currentIndex * 100; // Calculate the offset based on the current index
    slider.style.transform = `translateX(${offset}%)`; // Move the slider
}

// Next button functionality
document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    updateSlider();
});

// Previous button functionality
document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Loop to the last slide
    }
    updateSlider();
});

// Auto-slide functionality
setInterval(() => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    updateSlider();
}, 5000); // Change slide every 5 seconds