import { useEffect, useState } from 'react';

/**
 * Detects scroll position and returns whether the header should show
 * a dark/scrolled background (scrollY > threshold).
 */
export function useHeaderScroll(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    handler(); // run on mount
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}
