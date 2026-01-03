// Get the star rating elements
const starRating = document.querySelector('.star-rating');
const stars = starRating.querySelectorAll('i');

// Add event listeners to the stars
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-rating');
        updateRating(rating);
    });

    star.addEventListener('mouseover', () => {
        const rating = star.getAttribute('data-rating');
        highlightStars(rating);
    });

    star.addEventListener('mouseout', () => {
        const activeStars = starRating.querySelectorAll('.active');
        highlightStars(activeStars.length);
    });
});

// Update the rating
function updateRating(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-rating') <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    console.log(`Rated ${rating} stars`);
    // You can add code here to submit the rating to your server or database
}

// Highlight stars on hover
function highlightStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-rating') <= rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}
