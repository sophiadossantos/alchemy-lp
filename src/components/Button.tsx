import type { AnchorHTMLAttributes } from 'react';

type Variante = 'vinho' | 'escuro' | 'gelo' | 'contorno' | 'contorno-claro';

const estilos: Record<Variante, string> = {
  vinho: 'bg-vinho-800 text-neutro-50 hover:bg-vinho-900 hover:shadow-[0_12px_28px_-10px_rgba(122,31,46,0.65)]',
  escuro: 'bg-neutro-900 text-neutro-50 hover:bg-neutro-700 hover:shadow-[0_12px_28px_-10px_rgba(21,23,28,0.55)]',
  gelo: 'bg-neutro-50 text-vinho-800 hover:bg-white hover:shadow-[0_12px_28px_-10px_rgba(0,0,0,0.45)]',
  /** Secundário em fundo claro. */
  contorno: 'border border-neutro-900/15 bg-white/60 text-neutro-900 hover:border-neutro-900/30 hover:bg-white',
  /** Secundário em fundo escuro ou vinho. */
  'contorno-claro': 'border border-white/25 text-neutro-50 hover:border-white/50 hover:bg-white/10',
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variante?: Variante };

/** Botão pílula. No hover: muda de tom, sobe 2px, ganha sombra e a seta desliza. */
export function Button({ variante = 'vinho', className = '', children, ...props }: Props) {
  const externo = props.href?.startsWith('http');
  return (
    <a
      {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
      className={`inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full px-6 py-3 text-base leading-[1.5] group/btn transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${estilos[variante]} ${className}`}
    >
      {children}
      <svg
        viewBox="0 0 16 16"
        width="14"
        height="14"
        fill="none"
        aria-hidden
        className="ml-0 w-0 opacity-0 transition-all duration-300 ease-out group-hover/btn:ml-2 group-hover/btn:w-3.5 group-hover/btn:opacity-100"
      >
        <path d="M3 8h9m-3.5-4L12.5 8 8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
