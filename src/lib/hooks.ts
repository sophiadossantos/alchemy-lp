import { useEffect, useState, type RefObject } from 'react';

const QUERY_MOVIMENTO = '(prefers-reduced-motion: reduce)';

export function prefereMenosMovimento() {
  return typeof window !== 'undefined' && window.matchMedia(QUERY_MOVIMENTO).matches;
}

export function useReducedMotion() {
  const [reduzido, setReduzido] = useState(prefereMenosMovimento);
  useEffect(() => {
    const mq = window.matchMedia(QUERY_MOVIMENTO);
    const onChange = () => setReduzido(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduzido;
}

/** true depois que a página rolou mais que `limite` px. */
export function useScrolled(limite = 8) {
  const [rolou, setRolou] = useState(false);
  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > limite);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [limite]);
  return rolou;
}

/** true enquanto o elemento está (parcialmente) visível na tela. */
export function useInView(ref: RefObject<Element>, rootMargin = '0px') {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisivel(entry.isIntersecting), { rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);
  return visivel;
}

/**
 * Chama `onProgress` a cada frame de scroll com o progresso do elemento atravessando a tela:
 * 0 quando o topo dele entra por baixo, 1 quando a base sai por cima.
 */
export function useScrollProgress(ref: RefObject<Element>, onProgress: (p: number) => void) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const atualizar = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const total = window.innerHeight + r.height;
      const p = (window.innerHeight - r.top) / total;
      onProgress(Math.min(1, Math.max(0, p)));
    };
    const agendar = () => {
      if (!frame) frame = requestAnimationFrame(atualizar);
    };
    atualizar();
    window.addEventListener('scroll', agendar, { passive: true });
    window.addEventListener('resize', agendar);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', agendar);
      window.removeEventListener('resize', agendar);
    };
  }, [ref, onProgress]);
}

/** Revela (fade + subida) todo elemento com [data-reveal] quando ele entra na tela. */
export function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (prefereMenosMovimento()) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/**
 * Atualiza --mx/--my no card .luz que está sob o mouse, para o degradê seguir a ponta do cursor.
 * Um único listener na página atende todos os cards.
 */
export function useLuzDoMouse() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>('.luz');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
}
