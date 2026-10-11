// Get the current year
const year = document.getElementById("year");

// Display the current year in the footer
year.textContent = new Date().getFullYear();


// Select all navigation links
const navLinks = document.querySelectorAll(".navbar ul li a");

// Close the mobile menu when a navigation link is clicked
navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation link clicked:", link.textContent);

    });

});


// Display a message when the page loads
console.log("Welcome to Akintayo Ibrahim Atanda's portfolio!");


// Display the number of projects on the website
const projects = document.querySelectorAll(".project-card");

console.log("Total projects displayed:", projects.length);