let navToggle = document.querySelector('.nav-btn');
let navBar = document.querySelector('.nav-links');

navToggle.addEventListener('click', function() {
    navBar.classList.toggle('active');
    navToggle.classList.toggle('active');
});