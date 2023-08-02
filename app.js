const menu = document.querySelector(".menu")
const dropDown = document.querySelector(".dropdown")

function toggleMenu() {
    dropDown.classList.toggle("active")
}

function closeMenu() {
    dropDown.classList.remove("active")
}

menu.addEventListener("click", toggleMenu)
window.onresize = closeMenu
window.onscroll = closeMenu