/* ============================================================
   Carimbos em 1H — Interações
   - Menu mobile
   - Ano dinâmico no footer
============================================================ */
(function () {
  'use strict';

  // ---------- Ano dinâmico ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Menu mobile ----------
  const toggle = document.getElementById('menuToggle');
  const drawer = document.getElementById('drawer');
  if (!toggle || !drawer) return;

  const closeMenu = () => {
    toggle.classList.remove('is-open');
    drawer.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('is-open');
    drawer.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fecha ao clicar num link
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Fecha com ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Fecha ao redimensionar pra desktop
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768) closeMenu();
    }, 120);
  });

  // ---------- FAQ Accordion ----------
  document.querySelectorAll('.faq__q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });

  // ---------- Form de contato ----------
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (form && formStatus) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const nome = (data.get('nome') || '').toString().trim();
      const tel = (data.get('telefone') || '').toString().trim();

      if (!nome || !tel) {
        formStatus.textContent = 'Preencha pelo menos nome e telefone.';
        formStatus.style.color = '#d9534f';
        return;
      }

      // Monta mensagem WhatsApp com os dados do formulário
      const modelo = (data.get('modelo') || 'Não informado').toString();
      const obs = (data.get('observacoes') || '').toString();
      const msg = `Olá! Vim pelo site.%0A%0A*Nome:* ${encodeURIComponent(nome)}%0A*Telefone:* ${encodeURIComponent(tel)}%0A*Modelo:* ${encodeURIComponent(modelo)}%0A*Observações:* ${encodeURIComponent(obs)}`;
      window.open(`https://wa.me/552139527434?text=${msg}`, '_blank');

      formStatus.textContent = '✅ Abrimos o WhatsApp pra você! Se não abriu, ligue (21) 3952-7434.';
      formStatus.style.color = '#7CB342';
      form.reset();
    });
  }
})();
