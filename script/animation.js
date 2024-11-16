document.addEventListener('DOMContentLoaded', () => {
    // Select all card containers
    const cards = document.querySelectorAll('.card-container');

    // Create an intersection observer for cards
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the card is intersecting (visible on screen)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add the visible class to show it
                observer.unobserve(entry.target); // Stop observing once it has animated
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the card is visible

    // Observe each card
    cards.forEach(card => {
        cardObserver.observe(card);
    });

    // Scroll event listener for navbar
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Select all coupon containers
    const coupons = document.querySelectorAll('.coupon');

    // Create an intersection observer to observe when coupons come into view
    const couponObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the coupon is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add the animation class
                observer.unobserve(entry.target); // Stop observing this coupon once it's animated
            }
        });
    }, { threshold: 0.1 }); // 10% of the coupon needs to be in view to trigger

    // Observe each coupon
    coupons.forEach(coupon => {
        couponObserver.observe(coupon);
    });
});
