const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const year = document.querySelector('#year');
const auditForm = document.querySelector('#auditRequestBox');
const auditFormNote = document.querySelector('#auditFormNote');

if (year) year.textContent = new Date().getFullYear();

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (auditForm && auditFormNote) {
  auditForm.addEventListener('submit', () => {
    auditFormNote.textContent = 'Sending your secure request...';
    auditFormNote.classList.remove('error');
  });
}
