function updateRating(rating) {
    console.log("updateRating called", rating);
    stars.forEach(star => {
        if (star.getAttribute('data-rating') <= rating) {
            star.classList.add('active');
            console.log("Adding active to", star);
        } else {
            star.classList.remove('active');
        }
    });
}