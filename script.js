const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(
  ".about-me, .projects, .favorites, .home"
);
const logo = document.querySelector(".logo");
const activities = document.querySelectorAll(".css-activities, #intro");
const socialIcons = document.querySelectorAll(".social-icon a");
const buttons = document.querySelectorAll(".btn");
const projectImages = document.querySelectorAll(
  ".project-item img, .favorite-item img"
);
const toggleIframe = document.querySelector(".toggle-iframe");
const menutoggle = document.querySelector(".menu-toggle");
const navLinks2 = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleButton.innerHTML = body.classList.contains("dark-mode")
    ? 'Change Mode<i class="fa-solid fa-moon"></i>'
    : 'Change Mode<i class="fa-solid fa-sun"></i>';

  if (body.classList.contains("dark-mode")) {
    navLinks.forEach((link) => link.classList.add("dark-mode"));
    sections.forEach((section) => section.classList.add("dark-mode"));
    logo.classList.add("dark-mode");
    activities.forEach((activity) => activity.classList.add("dark-mode"));
    socialIcons.forEach((icon) => icon.classList.add("dark-mode"));
    buttons.forEach((button) => button.classList.add("dark-mode"));
    projectImages.forEach((image) => image.classList.add("dark-mode"));
    toggleIframe.classList.add("dark-mode");
    menutoggle.classList.add("dark-mode");
    navLinks2.classList.add("dark-mode");
  } else {
    navLinks.forEach((link) => link.classList.remove("dark-mode"));
    sections.forEach((section) => section.classList.remove("dark-mode"));
    logo.classList.remove("dark-mode");
    activities.forEach((activity) => activity.classList.remove("dark-mode"));
    socialIcons.forEach((icon) => icon.classList.remove("dark-mode"));
    buttons.forEach((button) => button.classList.remove("dark-mode"));
    projectImages.forEach((image) => image.classList.remove("dark-mode"));
    toggleIframe.classList.remove("dark-mode");
    menutoggle.classList.remove("dark-mode");
    navLinks2.forEach.remove("dark-mode");
  }
});

fetch("https://api.github.com/users/carlsang2006/repos")
  .then((response) => response.json())
  .then((data) => {
    const repoContainer = document.getElementById("repo-list");
    data.forEach((repo) => {
      const repoElement = document.createElement("div");
      repoElement.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Web Applications Development 1 Portfolio"}</p>
        <a href="${repo.html_url}" target="_blank">View Repository</a>
      `;
      repoContainer.appendChild(repoElement);
    });
  })
  .catch((error) => console.error("Error fetching repos:", error));

  document.getElementById("menu-toggle").addEventListener("click", () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  });