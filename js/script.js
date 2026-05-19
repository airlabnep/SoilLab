// Menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

// Project Modal functionality
function openProjectModal(projectId) {
    const modal = document.getElementById(projectId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeProjectModal(projectId) {
    const modal = document.getElementById(projectId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Gallery Modal functionality
function openGalleryModal(imageSrc) {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = imageSrc;
    }
}

function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const projectModals = document.querySelectorAll('[id*="modal"]');
    projectModals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Form submission handler
function handleFormSubmit(e) {
    if (e) e.preventDefault();
    // Form handling would go here
    console.log('Form submitted');
}

// Map initialization (for Leaflet.js)
function initMap() {
    // Map initialization would go here if using Leaflet
    console.log('Map initialized');
}
