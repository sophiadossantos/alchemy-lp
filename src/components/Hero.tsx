import { WHATSAPP_URL } from '../config';
import { Button } from './Button';
import { Estrela } from './Estrela';
import { IlustracaoLP } from './IlustracaoLP';
import { Selo } from './Selo';

/** Entrada em cascata ao carregar a página (só fade). */
const entra = (ms: number) => ({
  className: 'motion-safe:animate-[entra_1s_ease_both]',
  style: { animationDelay: `${ms}ms` },
});

/** Para quem é: os públicos da seção de solução e outros negócios que vendem serviço. */
const IDEAL_PARA = [
  'Quem vende pelo Instagram',
  'Fotógrafos',
  'Criativos com portfólio',
  'Lançamentos',
  'Eventos',
  'Estúdios de beleza',
  'Consultorias',
  'Cursos e mentorias',
  'Arquitetos e designers',
  'Profissionais da saúde',
  'Confeitarias',
  'Prestadores de serviço',
];

/** Fundo do bloco da hero: branco em cima, rosado no meio e um vinho suave nos cantos de baixo. */
const FUNDO = [
  'radial-gradient(80% 60% at 15% 100%, rgba(178,109,113,0.35), transparent 70%)',
  'radial-gradient(70% 60% at 90% 95%, rgba(241,201,202,0.55), transparent 70%)',
  'radial-gradient(90% 70% at 50% 75%, rgba(241,201,202,0.6), transparent 75%)',
  'linear-gradient(180deg, #FBFBFC 0%, #FBF6F6 45%, #F6E7E8 100%)',
].join(', ');

/**
 * Hero centralizada dentro de um bloco arredondado com degradê rosado suave:
 * título, subtítulo e botões no centro, e uma janela larga de landing page saindo por baixo,
 * cortada pela borda do bloco. Embaixo, a faixa "Ideal para".
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="px-3 pt-3 md:px-5 md:pt-5">
      <div
        className="relative isolate overflow-hidden rounded-[28px] px-4 pt-32 md:rounded-[36px] md:px-10 md:pt-40"
        style={{ background: FUNDO }}
      >
        {/* Grade bem leve no canto de baixo à esquerda, sumindo para o centro */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(rgba(122,31,46,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(122,31,46,0.08) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(60% 60% at 0% 100%, #000, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(60% 60% at 0% 100%, #000, transparent 70%)',
          }}
        />

        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-5">
            <h1
              id="hero-titulo"
              style={entra(100).style}
              className={`max-w-[720px] text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-neutro-900 md:text-5xl md:leading-[1.1] lg:text-6xl lg:leading-[1.08] ${entra(100).className}`}
            >
              Seu negócio merece uma página{' '}
              <span className="bg-gradient-to-r from-vinho-800 to-vinho-500 bg-clip-text text-transparent">à altura.</span>
            </h1>
            <p style={entra(240).style} className={`text-neutro-600 md:whitespace-nowrap ${entra(240).className}`}>
              Landing pages sob medida que transformam visitas em clientes.
            </p>
          </div>
          <div style={entra(360).style} className={`flex flex-wrap items-center justify-center gap-3 ${entra(360).className}`}>
            <Button href={WHATSAPP_URL}>Quero minha página</Button>
            <Button variante="contorno" href="#como-funciona">
              Como funciona
            </Button>
          </div>
        </div>

        <div style={entra(500).style} className={`relative mx-auto mt-14 max-w-[980px] md:mt-16 ${entra(500).className}`}>
          <IlustracaoLP />
          {/* Selo pequeno, inclinado, encaixado no canto de cima da janela */}
          <div className="absolute -right-1 -top-7 z-10 -rotate-12 md:-right-6 md:-top-10">
            <Selo tamanho={64} className="md:hidden" />
            <Selo tamanho={92} className="hidden md:inline-block" />
          </div>
        </div>
      </div>

      {/* Faixa "Ideal para": desliza devagar e vai ficando clarinha nas pontas, como nos Projetos */}
      <div
        style={entra(600).style}
        className={`mx-auto mt-10 flex max-w-[1200px] flex-col items-center gap-4 lg:flex-row lg:gap-8 ${entra(600).className}`}
      >
        <span className="shrink-0 text-sm text-neutro-600">Ideal para</span>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent)',
          }}
        >
          <ul className="flex w-max motion-safe:animate-[desliza_60s_linear_infinite] hover:[animation-play-state:paused]">
            {[...IDEAL_PARA, ...IDEAL_PARA].map((item, i) => (
              <li
                key={i}
                aria-hidden={i >= IDEAL_PARA.length}
                className="flex shrink-0 items-center gap-2.5 whitespace-nowrap pr-10 text-neutro-900"
              >
                <Estrela tamanho={12} className="text-vinho-800" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
