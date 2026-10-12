(() => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  // GitHub Pages static site: demo form creates a pre-filled email.
  // Replace with Formspree, Basin, a CRM form, or your chosen lead service before launch.
  const form = document.querySelector('[data-estimate-form]');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const email = form.dataset.email;
      if (!email || email.includes('REPLACE-WITH')) {
        alert('The estimate form is not connected yet. Please configure the business email or connect a form service before launch.');
        return;
      }
      const subject = encodeURIComponent('Painting estimate request — ' + (data.get('name') || 'Website visitor'));
      const body = encodeURIComponent(
        'Name: ' + (data.get('name') || '') + '\n' +
        'Email: ' + (data.get('email') || '') + '\n' +
        'Phone: ' + (data.get('phone') || '') + '\n' +
        'Project address / city: ' + (data.get('location') || '') + '\n' +
        'Service: ' + (data.get('service') || '') + '\n\n' +
        'Project details:\n' + (data.get('details') || '')
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
