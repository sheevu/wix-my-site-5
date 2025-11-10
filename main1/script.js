const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');
const yearEl = document.getElementById('year');

if (navToggle && nav) {
  const toggleNav = () => {
    const isOpen = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!isOpen));
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  };

  navToggle.addEventListener('click', toggleNav);

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.setAttribute('data-open', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      nav.setAttribute('data-open', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get('name') || 'there';
    alert(`Thank you, ${name}! Our team will reach out within one business day.`);
    contactForm.reset();
  });
}
