const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');
const yearEl = document.getElementById('year');

const closeNav = () => {
  if (nav) {
    nav.setAttribute('data-open', 'false');
  }
  if (navToggle) {
    navToggle.setAttribute('aria-expanded', 'false');
  }
};

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!isOpen));
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNav();
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
    const formData = new FormData(contactForm);
    const name = formData.get('name') || 'there';
    alert(`Thank you, ${name}! Our launchpad advisors will WhatsApp you within 6 working hours.`);
    contactForm.reset();
  });
}

const supportFab = document.querySelector('.support-fab');

if (supportFab) {
  supportFab.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
