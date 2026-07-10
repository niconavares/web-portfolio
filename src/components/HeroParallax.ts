// Motion del hero: aparición orquestada (Motion One) + efectos de scroll (manual, rAF).
// El parallax/efectos se calculan a mano desde scrollY / alto del hero: robusto y
// sin depender de la firma de scroll() de la librería. Motion One solo para la entrada.
import { animate } from 'motion';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initHero() {
  const wordmark = document.querySelector<HTMLElement>('[data-hero-wordmark]');
  const portrait = document.querySelector<HTMLElement>('[data-hero-portrait]');
  const intro = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-intro]'));

  const wordmarkPx = document.querySelector<HTMLElement>('[data-hero-wordmark-parallax]');
  const portraitPx = document.querySelector<HTMLElement>('[data-hero-portrait-parallax]');
  const heroEl = document.querySelector<HTMLElement>('[data-hero]');

  if (prefersReduced) {
    // Aparición instantánea, sin efectos de scroll.
    [wordmark, portrait, ...intro].forEach((el) => {
      if (el) el.style.opacity = '1';
    });
    return;
  }

  // 1) Secuencia de entrada al cargar.
  if (wordmark) {
    animate(wordmark, { opacity: [0, 1], y: [28, 0] }, { duration: 0.6, easing: [0.22, 1, 0.36, 1] });
  }
  if (portrait) {
    animate(portrait, { opacity: [0, 1], scale: [1.03, 1] }, { duration: 0.7, delay: 0.15, easing: [0.22, 1, 0.36, 1] });
  }
  intro.forEach((el, i) => {
    animate(el, { opacity: [0, 1], y: [12, 0] }, { duration: 0.5, delay: 0.3 + i * 0.08, easing: 'ease-out' });
  });

  // 2) Efectos al hacer scroll (marcados pero controlados):
  //    - el nombre sube más rápido, deriva a la izquierda y se desvanece;
  //    - el retrato sube más lento, se reduce un poco y se atenúa;
  //    - eyebrow y status line se funden pronto.
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
