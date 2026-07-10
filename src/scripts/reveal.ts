// Reveals fade-up escalonados al entrar en viewport.
// Respeta prefers-reduced-motion (el CSS ya deja el contenido visible).
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveals() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  els.forEach((el) => io.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveals);
} else {
  initReveals();
}
