import type { CSSProperties, ReactNode } from 'react';

type Props = {
  /** Atraso da entrada ao rolar (ms). */
  atraso?: number;
  /** Card escuro: o degradê ilumina em vez de escurecer. */
  escuro?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Card de texto em lista. Parado: limpo, só a superfície.
 * Com o mouse por cima: um degradê acompanha a ponta do cursor (classe .luz em index.css).
 */
export function CardLuz({ atraso = 0, escuro = false, className = '', children }: Props) {
  return (
    <li
      data-reveal
      style={{ '--d': `${atraso}ms` } as CSSProperties}
      className={`luz ${escuro ? 'luz-escura' : ''} ${className}`}
    >
      {children}
    </li>
  );
}
