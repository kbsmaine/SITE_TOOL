const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const year = document.querySelector('#year');
const auditForm = document.querySelector('#auditRequestBox');
const auditFormNote = document.querySelector('#auditFormNote');
const formRedirectUrl = document.querySelector('#formRedirectUrl');

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

const pageUrl = `${window.location.origin}${window.location.pathname}`;

if (window.location.search.includes('audit=sent') && auditFormNote) {
  auditFormNote.textContent = 'Thank you — your audit request was sent successfully. Verve AI Solutions will review it and follow up soon.';
  auditFormNote.classList.add('success');
}

if (auditForm && auditFormNote) {
  auditForm.addEventListener('submit', () => {
    if (formRedirectUrl && window.location.protocol !== 'file:') {
      formRedirectUrl.value = `${pageUrl}?audit=sent#contact`;
    }

    auditFormNote.textContent = 'Sending your secure request...';
    auditFormNote.classList.remove('error');
    auditFormNote.classList.remove('success');
  });
}
