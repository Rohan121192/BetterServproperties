import { useEffect, useRef, useState } from 'react';

/**
 * Animated counter hook. Returns the current display value.
 * Triggers once when the ref element enters the viewport.
 */
export function useCountUp(target, suffix = '', duration = 2000) {
  const [value, setValue] = useState('0' + suffix);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const step = Math.ceil(target / 125);
          let current = 0;
          const id = setInterval(() => {
            current += step;
            if (current >= target) {
              setValue(target + suffix);
              clearInterval(id);
            } else {
              setValue(current + suffix);
            }
          }, 16);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix]);

  return { ref, value };
}
