// Motion del hero: aparición orquestada + efectos de scroll. SIN librerías:
// la entrada usa la Web Animations API nativa (element.animate) y el scroll
// se calcula a mano con rAF. Respeta prefers-reduced-motion.
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

function animateEl(
  el: HTMLElement | null,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions
) {
  if (el && typeof el.animate === 'function') el.animate(keyframes, options);
}

function initHero() {
  const wordmark = document.querySelector<HTMLElement>('[data-hero-wordmark]');
  const portrait = document.querySelector<HTMLElement>('[data-hero-portrait]');
  const intro = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-intro]'));

  const wordmarkPx = document.querySelector<HTMLElement>('[data-hero-wordmark-parallax]');
  const portraitPx = document.querySelector<HTMLElement>('[data-hero-portrait-parallax]');
  const heroEl = document.querySelector<HTMLElement>('[data-hero]');

  if (prefersReduced) {
    [wordmark, portrait, ...intro].forEach((el) => {
      if (el) el.style.opacity = '1';
    });
    return;
  }

  // 1) Secuencia de entrada (Web Animations API nativa).
  animateEl(
    wordmark,
    [{ opacity: 0, transform: 'translateY(28px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: 600, easing: EASE, fill: 'both' }
  );
  animateEl(
    portrait,
    [{ opacity: 0, transform: 'scale(1.03)' }, { opacity: 1, transform: 'scale(1)' }],
    { duration: 700, delay: 150, easing: EASE, fill: 'both' }
  );
  intro.forEach((el, i) => {
    // fill 'backwards' para que, tras la entrada, el scroll controle la opacidad.
    animateEl(
      el,
      [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 500, delay: 300 + i * 80, easing: 'ease-out', fill: 'backwards' }
    );
  });

  // 2) Efectos al hacer scroll (rAF, cálculo manual desde scrollY / alto del hero).
  if (heroEl && wordmarkPx && portraitPx) {
    let ticking = false;

    const update = () => {
      const h = heroEl.offsetHeight || window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / h)); // 0 → 1 saliendo el hero

      wordmarkPx.style.setProperty('--parallax', `${-p * 120}px`);
      wordmarkPx.style.setProperty('--drift', `${-p * 60}px`);
      wordmarkPx.style.opacity = `${Math.max(0, 1 - p * 1.15)}`;

      portraitPx.style.setProperty('--parallax', `${-p * 40}px`);
      portraitPx.style.setProperty('--pscale', `${1 - p * 0.08}`);
      portraitPx.style.opacity = `${Math.max(0, 1 - p * 0.7)}`;

      const introOpacity = `${Math.max(0, 1 - p * 1.8)}`;
      intro.forEach((el) => {
        el.style.opacity = introOpacity;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHero);
} else {
  initHero();
}
