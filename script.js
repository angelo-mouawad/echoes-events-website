window.addEventListener("load", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        const items = Array.from(carousel.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-content");
    aboutSection.classList.add("fade-in-up");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const alertBox = document.getElementById("form-alert");

    function showAlert(message, type = "success") {
        alertBox.textContent = message;
        alertBox.className = `form-alert show ${type}`;
        setTimeout(() => {
            alertBox.classList.remove("show");
            setTimeout(() => {
                alertBox.className = "form-alert hidden";
            }, 300);
        }, 4000);
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const eventType = form.eventType.value;
        const message = form.message.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9+\-\s()]{7,}$/;

        if (!firstName || !lastName || !email || !phone || !eventType || !message) {
            showAlert("Please fill in all fields.", "error");
            return;
        }

        if (!emailPattern.test(email)) {
            showAlert("Please enter a valid email address.", "error");
            return;
        }

        if (!phonePattern.test(phone)) {
            showAlert("Please enter a valid phone number.", "error");
            return;
        }

        try {
            const response = await fetch("contact.php", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                const result = await response.text();
                showAlert(result.includes("successfully") ? result : "Message sent!", "success");
                form.reset();
            } else {
                showAlert("Something went wrong. Please try again.", "error");
            }
        } catch (error) {
            showAlert("Network error. Please try again later.", "error");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const formRows = document.querySelectorAll(".contact-form .form-row");

    formRows.forEach((row, index) => {
        row.classList.add(index % 2 === 0 ? "hidden-left" : "hidden-right");
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    formRows.forEach(row => {
        observer.observe(row);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.querySelector(".back-to-top");

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const targetSelector = dot.getAttribute("data-target");
            const target = document.querySelector(targetSelector);

            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});


const sections = document.querySelectorAll('.intro-section, .carousel-section, .about-section, .video-section, .service-section, .contact-section');
const dots = document.querySelectorAll('.dot');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetSelector = `.${entry.target.classList[0]}`;
            dots.forEach(dot => {
                if (dot.getAttribute('data-target') === targetSelector) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    });
}, {
    threshold: 0.6
});

sections.forEach(section => observer.observe(section));


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".footer-year").forEach(el => {
        el.textContent = new Date().getFullYear();
    });
});
