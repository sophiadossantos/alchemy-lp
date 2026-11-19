import selo from '../assets/selo.svg';
import { Estrela } from './Estrela';

/**
 * Selo da Alchemy (A com estrela dentro do lacre), componente "Selo" dos Assets do Figma.
 * O SVG exportado tem 345×348 porque inclui a sombra; o selo em si ocupa 300×300 dentro dele.
 * Com o mouse por cima, a estrela do selo dá uma brilhadinha (uma estrela clara cintila por cima dela).
 */
export function Selo({ tamanho = 160, className = '' }: { tamanho?: number; className?: string }) {
  const escala = tamanho / 300;
  return (
    <span aria-hidden className={`group/selo relative inline-block shrink-0 ${className}`} style={{ width: tamanho, height: tamanho }}>
      <img
        src={selo}
        alt=""
        width={345 * escala}
        height={348 * escala}
        className="pointer-events-none absolute max-w-none"
        style={{ left: -22.5 * escala, top: -14 * escala, width: 345 * escala, height: 348 * escala }}
      />
      {/* Brilho da estrela: mesma posição da estrela do selo no Figma (44% / 26%, 11,33% do tamanho) */}
      <span
        className="pointer-events-none absolute flex items-center justify-center"
        style={{ left: '44%', top: '26%', width: '11.33%', height: '11.33%' }}
      >
        <span className="absolute size-[260%] rounded-full bg-white/70 opacity-0 blur-md group-hover/selo:motion-safe:animate-[halo-estrela_900ms_ease-out]" />
        <Estrela
          tamanho={tamanho * 0.17}
          className="relative text-white opacity-0 drop-shadow-[0_0_4px_rgba(255,255,255,0.9)] group-hover/selo:motion-safe:animate-[brilho-estrela_900ms_ease-out]"
        />
      </span>
    </span>
  );
}
