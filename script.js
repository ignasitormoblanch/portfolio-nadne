/* Progressive enhancement: content and project pages work without JavaScript. */
(() => {
  'use strict';
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-nav');
  const setMenu = (open, restoreFocus = false) => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    document.querySelectorAll('main, .site-footer').forEach(el => { el.inert = open; });
    if (restoreFocus) toggle.focus();
  };
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (toggle?.getAttribute('aria-expanded') === 'true' && !event.target.closest('.site-header')) setMenu(false);
  });
  const mobileQuery = window.matchMedia('(max-width: 760px)');
  mobileQuery.addEventListener('change', event => { if (!event.matches) setMenu(false); });

  const filters = document.querySelector('.filters');
  const cards = [...document.querySelectorAll('.project-card')];
  if (filters && cards.length) {
    filters.hidden = false;
    filters.addEventListener('click', event => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      const filter = button.dataset.filter;
      filters.querySelectorAll('button').forEach(item => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      let count = 0;
      cards.forEach(card => {
        const matches = filter === 'all' || card.dataset.category.split(' ').includes(filter);
        card.hidden = !matches;
        if (matches) count++;
      });
      document.querySelector('.project-grid').classList.toggle('is-filtered', filter !== 'all');
      document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'proyecto' : 'proyectos'}`;
    });
  }

  document.querySelector('[data-copy-email]')?.addEventListener('click', async event => {
    const email = event.currentTarget.dataset.copyEmail;
    const status = document.querySelector('#copy-status');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      status.textContent = 'Correo copiado. ¡Hablamos pronto!';
    } catch {
      status.textContent = 'Puedes copiar la dirección o pulsarla para abrir tu correo.';
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.querySelector('.email-link'));
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });

  const dialog = document.querySelector('.lightbox');
  if (dialog && typeof dialog.showModal === 'function') {
    let origin;
    document.querySelectorAll('[data-lightbox]').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        origin = link;
        const thumbnail = link.querySelector('img');
        dialog.querySelector('img').src = link.href;
        dialog.querySelector('img').alt = thumbnail.alt;
        dialog.querySelector('.lightbox-caption').textContent = thumbnail.alt;
        document.body.classList.add('modal-open');
        dialog.showModal();
      });
    });
    dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('modal-open');
      origin?.focus();
    });
  }

  // Preserve useful anchors from both previous versions of the portfolio.
  const aliases = {top:'inicio',home:'inicio',work:'proyectos',galeria:'proyectos',marcas:'proyectos',cortos:'proyectos',about:'sobre-mi',contact:'contacto'};
  const old = location.hash.slice(1);
  if (aliases[old] && document.getElementById(aliases[old])) {
    const target = document.getElementById(aliases[old]);
    target.scrollIntoView();
  }
})();
