const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const form = document.querySelector('.form');
const nameInput = document.querySelector('.form__input[type="text"]');
const emailInput = document.querySelector('.form__input[type="email"]');
const messageInput = document.querySelector('.form__input[placeholder="Message"]');
const sendBtn = document.querySelector('.form__btn');

sendBtn.addEventListener('click', function(event) {
event.preventDefault();

if (!nameInput.value || !emailInput.value || !messageInput.value) {
alert("Please fill out all the required fields.");
} else {
alert("Thank you for your message, we will get back to you soon.");
form.reset();
}
});