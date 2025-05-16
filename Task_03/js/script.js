// Dropdown Menu
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Modal Window
const modal = document.getElementById('modal');
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!username || !email || !message) {
    alert('All fields are required.');
    return;
  }

  alert('Form submitted successfully!');
  contactForm.reset();
});
