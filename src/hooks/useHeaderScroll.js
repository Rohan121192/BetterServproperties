import { useEffect, useState } from 'react';

/**
 * Smart header scroll hook.
 * - scrolled: true when user has scrolled past `threshold` px (shows dark bg)
 * - hidden:   true when user is scrolling DOWN (header slides out of view)
 *             false when user is scrolling UP or is at the top (header slides back in)
 */
export function useHeaderScroll(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handler = () => {
      const currentY = window.scrollY;
      const atTop = currentY < threshold;

      // Always show at the top
      if (atTop) {
        setScrolled(false);
        setHidden(false);
        lastY = currentY;
        return;
      }

      setScrolled(true);

      // Hide when scrolling down, reveal when scrolling up
      if (currentY > lastY + 4) {
        // scrolling down — add a small dead-zone (4px) to avoid jitter
        setHidden(true);
      } else if (currentY < lastY - 4) {
        // scrolling up
        setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', handler, { passive: true });
    handler(); // run on mount
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return { scrolled, hidden };
}
