
const toggleButton = document.getElementsByClassName('burger')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];
const landing = document.getElementsByClassName('landing-container')[0]
const features = document.getElementsByClassName('features-container')[0]
const success = document.getElementsByClassName('success-container')[0]
const contact = document.getElementsByClassName('contact-container')[0]


landing.addEventListener('click', () => {
    if(navbarLinks.classList.contains('active')){
        navbarLinks.classList.toggle('active')
    }
});

features.addEventListener('click', () => {
    if(navbarLinks.classList.contains('active')){
        navbarLinks.classList.toggle('active')
    }
});

success.addEventListener('click', () => {
    if(navbarLinks.classList.contains('active')){
        navbarLinks.classList.toggle('active')
    }
});

contact.addEventListener('click', () => {
    if(navbarLinks.classList.contains('active')){
        navbarLinks.classList.toggle('active')
    }
});



toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

