const WHATSAPP_BASE = 'https://wa.me/message/I73W2OYLCHD3M1';
const DEFAULT_MSG = 'Olá! Vi o site da CDE Imports e gostaria de receber a tabela atualizada.';

const META_STANDARD_EVENTS = {
  whatsapp_click: 'Contact',
  table_request: 'Lead',
  retail_lead: 'Lead',
  professional_lead: 'Lead',
  wholesale_lead: 'Lead',
  product_interest: 'ViewContent',
};

function track(name, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });

  if (typeof fbq === 'function') {
    const metaEvent = META_STANDARD_EVENTS[name];
    if (metaEvent) {
      fbq('track', metaEvent, { event_source: name, ...params });
    } else {
      fbq('trackCustom', name, params);
    }
  }

  if (typeof gtag === 'function') gtag('event', name, params);
}

document.querySelectorAll('.wa').forEach((el) => {
  const msg = el.dataset.msg || DEFAULT_MSG;
  el.href = `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
  el.target = '_blank';
  el.rel = 'noopener noreferrer';
  el.addEventListener('click', () => {
    track('whatsapp_click', { source: el.textContent.trim() });
    if (el.dataset.event) track(el.dataset.event, { source: el.textContent.trim() });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
menuBtn?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
});
mobileMenu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
