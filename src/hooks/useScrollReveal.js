import { useEffect } from 'react';

/**
 * Custom hook that applies IntersectionObserver-based scroll reveal
 * to elements with the `.reveal` class. Adds `.vis` when visible.
 * Call after render / data changes.
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.vis)');
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('vis');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, deps);
}
