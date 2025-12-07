// Modal functionality
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

// Show modal on page load
window.addEventListener("DOMContentLoaded", () => {
    modal.style.display = "block";
});

// Close when clicking X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Skills section
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
const skillsListDiv = document.getElementById("skills-list");
const skillsHeading = document.createElement("h3");
skillsHeading.textContent = "My Skills:";
skillsListDiv.appendChild(skillsHeading);
const skillsUl = document.createElement("ul");
skills.forEach(skill => {
    const skillLi = document.createElement("li");
    skillLi.textContent = skill;
    skillsUl.appendChild(skillLi);
});
skillsListDiv.appendChild(skillsUl);

// Apply dark mode if previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    document.getElementById("darkModeBtn").textContent = "Light Mode";
}

// Dark mode toggle
document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        this.textContent = "Light Mode";
    } else {
        localStorage.setItem("darkMode", "disabled");
        this.textContent = "Dark Mode";
    }
});

// Show/hide featured content based on project link count
function toggleFeaturedContent() {
    const featuredContent = document.getElementById("featured-content");
    const linkProjects = document.getElementById("projects");
    if (!featuredContent) return;

    const linkCount = linkProjects.querySelectorAll("a").length;
    featuredContent.classList.toggle("hidden", linkCount > 3);
}
toggleFeaturedContent();

// Contact form timed confirmation
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const statusDiv = document.getElementById("form-status");
    const name = document.getElementById("name").value;

    statusDiv.textContent = "Sending message...";
    statusDiv.style.color = "orange";

    setTimeout(() => {
        statusDiv.textContent = "Message sent successfully! Thank you, " + name + ". I will get back to you soon.";
        statusDiv.style.color = "green";
    }, 2500);
});
