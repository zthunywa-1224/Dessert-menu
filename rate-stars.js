document.addEventListener('DOMContentLoaded', () => {
    const starRating = document.querySelector('.star-rating');
    const stars = starRating.querySelectorAll('i');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            console.log("Star clicked!");
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

    function updateRating(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-rating') <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
        console.log(`Rated ${rating} stars`);
    }

    function highlightStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-rating') <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
});
