import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll: adds `is-visible` to elements with the `reveal` class
 * once they enter the viewport. Re-scans whenever `deps` change.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  deps: unknown[] = []
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current ?? document;
    const els = Array.from(
      (root as HTMLElement | Document).querySelectorAll<HTMLElement>('.reveal')
    );
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}
