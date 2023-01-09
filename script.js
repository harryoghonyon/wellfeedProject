const hamburgerMenu = document.querySelector('.hamburger-menu');

const dropdownLinks = document.querySelector('.dropdown-links');

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    dropdownLinks.classList.toggle("active");
})