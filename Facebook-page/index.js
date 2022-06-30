const contactUsButton = document.querySelector('.btn-contact-us');

const popup = document.querySelector('.container-popup');

const btnClosePopup = document.querySelector('.btn-close-popup');

const form = document.querySelector('.contact-us-form');

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');


const displayBlock = () => popup.style.display = 'block';

const displayNone = () => popup.style.display = 'none';


contactUsButton.addEventListener('click', () => {
    if (window.innerWidth > 780) { displayBlock(); } 
});


btnClosePopup.addEventListener('click', () => {
    displayNone();
});


form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(`Name: ${name.value}, Email: ${email.value}, Message: ${message.value}`);
    form.reset();
    setTimeout(displayNone, 1000);
});