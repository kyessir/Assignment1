/* hamburger menu*/
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('navbar');

    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

/*newsletter*/
function submitForm(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Display the thank you message
    document.getElementById('thank-you-message').style.display = 'block';

    // You may want to reset the form after submission
    document.getElementById('emailForm').reset();
}