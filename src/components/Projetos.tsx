import { useCallback, useRef, type CSSProperties } from 'react';
import booking from '../assets/projeto-booking.webp';
import claraMendes from '../assets/projeto-clara-mendes.jpg';
import cursiva from '../assets/projeto-cursiva.png';
import doceAtelie from '../assets/projeto-doce-atelie.jpg';
import studioLumi from '../assets/projeto-studio-lumi.jpg';
import { WHATSAPP_URL } from '../config';
import { useReducedMotion, useScrollProgress } from '../lib/hooks';
import { Button } from './Button';
import { SectionTitle } from './SectionTitle';

type Projeto = { altura: number; imagem?: string; nome?: string; tipo?: string };

/**
 * As duas linhas da grade do Figma (alturas variadas). Os cards sem imagem são espaços para os próximos projetos.
 * Cada linha é repetida para preencher a largura enquanto desliza para o lado.
 */
const LINHAS: Projeto[][] = [
  [
    { altura: 187, imagem: claraMendes, nome: 'Clara Mendes', tipo: 'Conceito de landing page' },
    { altura: 217, imagem: cursiva, nome: 'Cursiva', tipo: 'Landing page' },
    { altura: 187, imagem: doceAtelie, nome: 'Doce Ateliê', tipo: 'Conceito de landing page' },
  ],
  [
    { altura: 144, imagem: studioLumi, nome: 'Studio Lumi', tipo: 'Conceito de landing page' },
    { altura: 179, imagem: booking, nome: 'Booking', tipo: 'Estudo de redesign' },
    { altura: 144 },
  ],
];
const REPETICOES = 3;
/** Quanto cada linha anda (px) do início ao fim da passagem da seção pela tela. */
const DESLOCAMENTO = 520;

function Card({ altura, imagem, nome, tipo }: Projeto) {
  return (
    <div
      className="group/card relative h-[calc(var(--altura)*0.7)] w-[288px] shrink-0 overflow-hidden rounded-3xl bg-[#c4c4c4] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-28px_rgba(33,28,26,0.45)] md:h-[var(--altura)] md:w-[411px]"
      style={{ '--altura': `${altura}px` } as CSSProperties}
    >
      {imagem ? (
        <>
          {/* No hover a página "rola" dentro do card, como um preview do site */}
          <img
            src={imagem}
            alt={`${nome}: ${tipo}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-[object-position] duration-[6000ms] ease-in-out group-hover/card:object-bottom"
          />
          <span className="pointer-events-none absolute bottom-3 left-3 translate-y-2 rounded-full bg-neutro-900/80 px-3 py-1 text-xs font-medium text-neutro-50 opacity-0 backdrop-blur transition-[opacity,transform] duration-500 group-hover/card:translate-y-0 group-hover/card:opacity-100">
            {nome} · {tipo}
          </span>
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/25 to-white/0 opacity-0 transition-opacity duration-700 group-hover/card:opacity-100" />
      )}
    </div>
  );
}

export function Projetos() {
  const faixa = useRef<HTMLDivElement>(null);
  const linhas = useRef<(HTMLDivElement | null)[]>([]);
  const reduzido = useReducedMotion();

  // Linha 1 anda para a esquerda e linha 2 para a direita, conforme a seção atravessa a tela.
  const mover = useCallback(
    (p: number) => {
      const desloc = reduzido ? 0 : (p - 0.5) * DESLOCAMENTO;
      linhas.current.forEach((el, i) => {
        if (el) el.style.transform = `translate3d(calc(-50% + ${i % 2 === 0 ? -desloc : desloc}px), 0, 0)`;
      });
    },
    [reduzido],
  );
  useScrollProgress(faixa, mover);

  return (
    <section id="projetos" className="overflow-hidden">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-4 xl:px-0">
        <div className="flex flex-col items-start gap-6" data-reveal>
          <SectionTitle
            alinhamento="esquerda"
            titulo="Projetos"
            subtitulo="Páginas pensadas para cada tipo de negócio. A próxima pode ser a sua."
          />
          <Button href={WHATSAPP_URL}>
            Quero minha página
          </Button>
        </div>
      </div>

      {/* Faixas: ocupam a largura toda da tela e deslizam para os lados com o scroll */}
      <div ref={faixa} className="relative mt-10 flex flex-col gap-4 py-2 md:gap-6" data-reveal>
        {LINHAS.map((linha, i) => (
          <div
            key={i}
            ref={(el) => {
              linhas.current[i] = el;
            }}
            className="relative left-1/2 flex w-max items-start gap-4 will-change-transform md:gap-6"
            style={{ transform: 'translate3d(-50%, 0, 0)' }}
          >
            {Array.from({ length: REPETICOES }, () => linha)
              .flat()
              .map((p, j) => (
                <Card key={j} {...p} />
              ))}
          </div>
        ))}
        {/* Degradê branco nas laterais (como no Figma) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(to right, #fff, rgba(255,255,255,0) 22%, rgba(255,255,255,0) 78%, #fff)' }}
        />
      </div>
    </section>
  );
}
