
document.addEventListener("DOMContentLoaded", function () {
    // 1. Select HTML elements using the DOM
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const changeButton = document.getElementById("change-message");
    const dynamicMessage = document.getElementById("dynamic-message");
    const contactForm = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    // 2. Interactive mobile navigation
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        // Close the menu after a navigation link is selected
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
                menuToggle.textContent = "☰";
            });
        });
    }

    // 3. Dynamic content button
    if (changeButton && dynamicMessage) {
        changeButton.addEventListener("click", function () {
            dynamicMessage.textContent =
                "I am Pascal Odiya, an IT student at Africa International University. " +
                "I am learning web development, Python, C++, and databases.";

            changeButton.textContent = "Introduction Updated";
            changeButton.disabled = true;
        });
    }

    // 4. Contact form validation
    if (contactForm && feedback) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Conditional statements check the user's input
            if (!name || !email || !message) {
                showFeedback(
                    "Please fill in all fields.",
                    "error"
                );
                return;
            }

            // Basic email format validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                showFeedback(
                    "Please enter a valid email address.",
                    "error"
                );
                return;
            }

            showFeedback(
                "Validation successful! Your message is ready.",
                "success"
            );

            // No email is sent because there is no backend.
        });
    }

    // 5. Reusable function to update feedback dynamically
    function showFeedback(text, type) {
        feedback.textContent = text;
        feedback.className = type;
    }

    // 6. Update the footer year dynamically
    const footer = document.querySelector("footer");

    if (footer) {
        let dateDisplay = document.getElementById("current-date");

        if (!dateDisplay) {
            dateDisplay = document.createElement("p");
            dateDisplay.id = "current-date";
            footer.appendChild(dateDisplay);
        }

        const currentYear = new Date().getFullYear();
        dateDisplay.textContent =
            "Current year: " + currentYear;
    }
});
