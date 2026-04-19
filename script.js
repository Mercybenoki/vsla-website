// Dynamically update the copyright year in the footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});