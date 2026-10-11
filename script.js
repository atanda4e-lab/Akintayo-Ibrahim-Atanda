// ==========================================
// 1. DISPLAY THE CURRENT YEAR IN THE FOOTER
// ==========================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ==========================================
// 2. SELECT NAVIGATION LINKS
// ==========================================

const navLinks = document.querySelectorAll(".navbar ul li a");


// ==========================================
// 3. HANDLE NAVIGATION LINK CLICKS
// ==========================================

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation link clicked:", link.textContent.trim());

    });

});


// ==========================================
// 4. DISPLAY A WELCOME MESSAGE
// ==========================================

console.log("Welcome to Akintayo Ibrahim Atanda's portfolio!");


// ==========================================
// 5. COUNT THE PROJECTS ON THE WEBSITE
// ==========================================

const projects = document.querySelectorAll(".project-card");

console.log("Total projects displayed:", projects.length);


// ==========================================
// 6. CHECK THE CONTACT SECTION
// ==========================================

const contactSection = document.querySelector("#contact");

if (contactSection) {
    console.log("Contact section loaded successfully.");
}


// ==========================================
// 7. CHECK THE ABOUT SECTION
// ==========================================

const aboutSection = document.querySelector("#about");

if (aboutSection) {
    console.log("About section loaded successfully.");
}


// ==========================================
// 8. DISPLAY A MESSAGE WHEN THE PAGE LOADS
// ==========================================

window.addEventListener("load", function() {

    console.log("Portfolio loaded successfully!");

});