// 1. PROJECT FILTER LOGIC
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(button => button.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 2. MODAL LOGIC & KEYBOARD ACCESSIBILITY
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close-btn");
const viewBtns = document.querySelectorAll(".view-btn");

// Function to open modal
function openModal(card) {
    const title = card.getAttribute("data-title");
    const desc = card.getAttribute("data-desc");
    
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.style.display = "flex";
    
    // Focus on close button for accessibility
    closeBtn.focus();
}

// Function to close modal
function closeModal() {
    modal.style.display = "none";
}

// Click event for view details buttons
viewBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        openModal(e.target.closest('.project-card'));
    });
});

// Click event for close button
closeBtn.addEventListener("click", closeModal);

// Click outside modal to close
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Escape key to close modal (Keyboard-friendly requirement)
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
        closeModal();
    }
});

// 3. MOCK CONTACT FORM
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        alert('Thank you! Your message has been successfully sent.');
        contactForm.reset();
    });
}
