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
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Oracle SQL", "C"," Java"];
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
// Funtion to create Project Objects
function Project(title, description, icon, link) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.link = link;
}
project1 = new Project("Oracle Database", "A personal database using Oracle to learn about database management.", "🌐", "https://github.com/jtayl040504/SDC250L.git");
project2 = new Project("Java Calculator App", " This is a Java menu-driven calculator that handles singular and multiple inputs.", "🌐", "https://github.com/jtayl040504/Final_Project.git");
project3 = new Project("C Calculator App", "This is a menu driven Calculator Application using C programming and Agile Teams.", "🌐", "https://github.com/jtayl040504/SDC255_Agile.git");
const projects = [project1, project2, project3];
const projectsDiv = document.getElementById("projects");
projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card"); 
    projectCard.innerHTML = `
        <h4>${project.icon} <a href="${project.link}" target="_blank">${project.title}</a></h4>
        <p>${project.description}</p>
    `;
    projectsDiv.appendChild(projectCard);
});
// Convert project array to JSON and store it in Session Storage
sessionStorage.setItem("projectsData", JSON.stringify(projects));
// Retrieve project data from Session Storage and parse it back to an object
const storedProjects = JSON.parse(sessionStorage.getItem("projectsData"));
console.log(storedProjects);