// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form handling
document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your reservation! We will contact you soon.');
});
