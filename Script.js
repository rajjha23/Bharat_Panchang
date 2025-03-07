// Wait for the page to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Get the dropdown menu element
    const dropdown = document.querySelector(".dropdown");

    // Toggle dropdown menu on click (for mobile devices)
    dropdown.addEventListener("click", function () {
        this.classList.toggle("active");
    });

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute("href").substring(1); // Get section ID
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for header
                    behavior: "smooth"
                });
            }
        });
    });
});
