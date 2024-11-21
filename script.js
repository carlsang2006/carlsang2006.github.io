const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.about-me, .projects, .favorites, .home');
const logo = document.querySelector('.logo');
const activities = document.querySelectorAll('.css-activities, #intro');
const socialIcons = document.querySelectorAll('.social-icon a');
const buttons = document.querySelectorAll('.btn');
const projectImages = document.querySelectorAll('.project-item img, .favorite-item img');
const toggleIframe = document.querySelector('.toggle-iframe');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.innerHTML = body.classList.contains('dark-mode') 
        ? 'Change Mode<i class="fa-solid fa-moon"></i>' 
        : 'Change Mode<i class="fa-solid fa-sun"></i>';

    if (body.classList.contains('dark-mode')) {
        navLinks.forEach(link => link.classList.add('dark-mode'));
        sections.forEach(section => section.classList.add('dark-mode'));
        logo.classList.add('dark-mode');
        activities.forEach(activity => activity.classList.add('dark-mode'));
        socialIcons.forEach(icon => icon.classList.add('dark-mode'));
        buttons.forEach(button => button.classList.add('dark-mode'));
        projectImages.forEach(image => image.classList.add('dark-mode'));
        toggleIframe.classList.add('dark-mode');
    } else {
        navLinks.forEach(link => link.classList.remove('dark-mode'));
        sections.forEach(section => section.classList.remove('dark-mode'));
        logo.classList.remove('dark-mode');
        activities.forEach(activity => activity.classList.remove('dark-mode'));
        socialIcons.forEach(icon => icon.classList.remove('dark-mode'));
        buttons.forEach(button => button.classList.remove('dark-mode'));
        projectImages.forEach(image => image.classList.remove('dark-mode'));
        toggleIframe.classList.remove('dark-mode');
    }
});