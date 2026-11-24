// ==========================================
// LEARNSPHERE PORTFOLIO JAVASCRIPT
// ==========================================


// ==========================================
// 1. WAIT FOR THE PAGE TO LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================================
    // 2. DISPLAY THE CURRENT YEAR
    // ======================================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // ======================================
    // 3. SELECT NAVIGATION LINKS
    // ======================================

    const navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "Navigation clicked:",
                link.textContent.trim()
            );

        });

    });


    // ======================================
    // 4. COUNT PROJECTS
    // ======================================

    const projects = document.querySelectorAll(".project-card");

    console.log("Total projects:", projects.length);


    // ======================================
    // 5. CHECK IMPORTANT SECTIONS
    // ======================================

    const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "education",
        "contact"
    ];

    sections.forEach(function (sectionName) {

        const section = document.getElementById(sectionName);

        if (section) {
            console.log(sectionName + " section loaded successfully.");
        } else {
            console.warn(sectionName + " section was not found.");
        }

    });


    // ======================================
    // 6. WELCOME MESSAGE
    // ======================================

    console.log("Welcome to Akintayo Ibrahim Atanda's portfolio!");


    // ======================================
    // 7. PAGE LOADED MESSAGE
    // ======================================

    console.log("Portfolio is ready!");

});