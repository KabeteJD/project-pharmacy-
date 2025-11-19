const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburgerBtn");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
});