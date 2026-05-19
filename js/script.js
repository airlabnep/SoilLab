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

    // Initialize map if map container exists
    initMap();

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
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

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Log form data (in production, send to backend)
    console.log('Form submitted:', { name, email, subject, message });

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    document.getElementById('contactForm').reset();
}

// Map initialization (for Leaflet.js)
function initMap() {
    const mapContainer = document.getElementById('map-container');

    if (!mapContainer) {
        return; // Map container doesn't exist on this page
    }

    // Lab coordinates
    const lat = 27.607486;
    const lng = 84.565625;

    // Create map
    const map = L.map('map-container').setView([lat, lng], 15);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        maxNativeZoom: 18
    }).addTo(map);

    // Add marker for lab location
    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(
        '<b>Soil Science and Precision Agriculture Lab</b><br>' +
        'IAAS, Rampur Campus<br>' +
        'Chitwan, Nepal<br>' +
        '<a href="mailto:krishna.aryal@rc.tu.edu.np">krishna.aryal@rc.tu.edu.np</a>'
    ).openPopup();

    // Fit map to bounds
    map.invalidateSize();
}
