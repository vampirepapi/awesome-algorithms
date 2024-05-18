document.addEventListener("DOMContentLoaded", function() {
    const nightModeToggle = document.getElementById("night-mode-toggle");

    nightModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("night-mode");
    });
});
