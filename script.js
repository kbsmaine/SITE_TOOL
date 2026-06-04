const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const year = document.querySelector('#year');

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


const auditSendButton = document.querySelector('#auditSendButton');
const auditFormNote = document.querySelector('#auditFormNote');

function getFieldValue(selector) {
  const field = document.querySelector(selector);
  return field ? field.value.trim() : '';
}

function setAuditMessage(message, isError = false) {
  if (!auditFormNote) return;
  auditFormNote.textContent = message;
  auditFormNote.classList.toggle('error', Boolean(isError));
}

if (auditSendButton) {
  auditSendButton.addEventListener('click', () => {
    const name = getFieldValue('#auditName');
    const business = getFieldValue('#auditBusiness');
    const contact = getFieldValue('#auditContact');
    const message = getFieldValue('#auditMessage');

    if (!name || !business || !contact || !message) {
      setAuditMessage('Please fill out every box, then click Send Audit Request again.', true);
      return;
    }

    const subject = 'Free AI Audit Request';
    const body = [
      'Hi Verve AI Solutions,',
      '',
      'I am interested in a free AI audit for my business.',
      '',
      `Name: ${name}`,
      `Business name: ${business}`,
      `Email or phone: ${contact}`,
      '',
      'What I want AI to help with:',
      message,
      '',
      'Thanks,'
    ].join('\n');

    const mailto = `mailto:krpelletier33@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setAuditMessage('Your email app should open with the message ready to review and send.');
  });
}
