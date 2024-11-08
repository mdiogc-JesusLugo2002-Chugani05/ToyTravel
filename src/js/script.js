// JavaScript to Toggle Form Visibility
document.getElementById('toggleFormBtn').addEventListener('click', function() {
    const form = document.getElementById('contactForm');
    form.classList.toggle('d-none');
});