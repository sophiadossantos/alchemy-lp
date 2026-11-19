import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';

/** Tamanho de desenho da janela; escala para caber na largura disponível. */
const LARGURA = 980;
/** Altura visível: a janela é mais alta e fica cortada embaixo pela borda da hero. */
const ALTURA_VISIVEL = 510;

/** "Fotos" feitas só com CSS (degradês e formas), para não depender de imagens. */
const FOTOS: Record<'campo' | 'arco' | 'flores', CSSProperties> = {
  campo: {
    background: [
      'radial-gradient(circle at 70% 46%, rgba(255,238,214,0.95) 0 7%, rgba(255,221,190,0.5) 12%, transparent 30%)',
      'linear-gradient(180deg, #F4D3C4 0%, #EBB3A1 46%, #B9766A 54%, #7E4B45 72%, #4F302D 100%)',
    ].join(', '),
  },
  arco: {
    background: [
      'radial-gradient(60% 75% at 50% 100%, #8E5A54 0 58%, transparent 59%)',
      'radial-gradient(48% 62% at 50% 100%, #E7C3B6 0 58%, transparent 59%)',
      'linear-gradient(180deg, #EAD9D2, #D9BFB5)',
    ].join(', '),
  },
  flores: {
    background: [
      'radial-gradient(circle at 30% 35%, #B26D71 0 9%, transparent 18%)',
      'radial-gradient(circle at 62% 55%, #7A1F2E 0 10%, transparent 20%)',
      'radial-gradient(circle at 45% 75%, #F1C9CA 0 9%, transparent 19%)',
      'radial-gradient(circle at 75% 25%, #E6A9AC 0 7%, transparent 15%)',
      'linear-gradient(160deg, #3E2C2A, #2A1E1D)',
    ].join(', '),
  },
};

const SERVICOS = [
  { titulo: 'Casamentos', texto: 'Cobertura completa, do making of à festa.' },
  { titulo: 'Ensaios', texto: 'Casais, gestantes e família, ao ar livre.' },
  { titulo: 'Eventos', texto: 'Aniversários, batizados e celebrações.' },
  { titulo: 'Retratos', texto: 'Para perfil, marca pessoal e portfólio.' },
];

/**
 * Ilustração estática e realista de uma landing page (um site fictício de fotógrafa)
 * numa janela de navegador larga, com moldura de vidro, cortada embaixo pela borda da hero.
 */
export function IlustracaoLP() {
  const ref = useRef<HTMLDivElement>(null);
  const [escala, setEscala] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setEscala(Math.min(1, entry.contentRect.width / LARGURA)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative mx-auto w-full max-w-[980px] overflow-hidden"
      style={{ height: ALTURA_VISIVEL * escala }}
    >
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: LARGURA, transform: `scale(${escala})` }}>
        {/* Moldura de vidro */}
        <div className="rounded-[28px] border border-white/70 bg-white/40 p-3 pb-0 shadow-[0_30px_80px_-30px_rgba(122,31,46,0.35)] backdrop-blur-[16px]">
          {/* Janela */}
          <div className="overflow-hidden rounded-t-[18px] border border-b-0 border-neutro-900/[0.06] bg-[#FCFAF8]">
            <div className="flex h-10 items-center gap-2 border-b border-neutro-900/[0.06] bg-white px-4">
              <span className="size-3 rounded-full bg-[#FF5F57]" />
              <span className="size-3 rounded-full bg-[#FEBC2E]" />
              <span className="size-3 rounded-full bg-[#28C840]" />
              <span className="mx-auto flex h-6 w-72 items-center justify-center gap-1.5 rounded-md bg-neutro-900/[0.05] text-[11px] text-neutro-500">
                <svg viewBox="0 0 12 12" width="9" height="9" fill="none">
                  <rect x="2.5" y="5.5" width="7" height="5" rx="1" fill="currentColor" />
                  <path d="M4 5.5V4a2 2 0 014 0v1.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                claramendes.com.br
              </span>
            </div>

            <div className="px-12 pb-16 pt-6 text-[#2B2321]">
              {/* Cabeçalho do site */}
              <div className="flex items-center justify-between">
                <span className="text-[17px] font-semibold tracking-tight">
                  Clara Mendes<span className="font-normal text-[#9B7B72]"> · fotografia</span>
                </span>
                <span className="flex items-center gap-7 text-[13px] text-[#6E5C57]">
                  <span>Portfólio</span>
                  <span>Serviços</span>
                  <span>Sobre</span>
                  <span>Depoimentos</span>
                </span>
                <span className="rounded-full bg-[#2B2321] px-4 py-2 text-[12px] font-medium text-white">Agendar conversa</span>
              </div>

              {/* Hero do site */}
              <div className="mt-12 grid grid-cols-[1fr_1.05fr] items-center gap-12">
                <div className="flex flex-col items-start">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9B7B72]">São Paulo e região</span>
                  <p className="mt-3 text-[38px] font-semibold leading-[1.08] tracking-[-0.02em]">
                    Fotografia de casamento com olhar autoral.
                  </p>
                  <p className="mt-4 max-w-[340px] text-[14px] leading-relaxed text-[#6E5C57]">
                    Imagens leves e verdadeiras, que contam o seu dia do jeito que ele foi.
                  </p>
                  <div className="mt-6 flex gap-2.5 text-[13px] font-medium">
                    <span className="rounded-full bg-vinho-800 px-5 py-2.5 text-white">Ver portfólio</span>
                    <span className="rounded-full border border-[#E3D6D1] px-5 py-2.5">Pedir orçamento</span>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[12px] text-[#6E5C57]">
                    <span className="tracking-[0.1em] text-[#C89B5E]">★★★★★</span>
                    Avaliação 5,0 no Google
                  </div>
                </div>
                <div className="grid h-[260px] grid-cols-[1.3fr_1fr] grid-rows-2 gap-2.5">
                  <div className="row-span-2 rounded-2xl" style={FOTOS.campo} />
                  <div className="rounded-2xl" style={FOTOS.arco} />
                  <div className="rounded-2xl" style={FOTOS.flores} />
                </div>
              </div>

              {/* Serviços */}
              <div className="mt-12 grid grid-cols-4 gap-4">
                {SERVICOS.map((s) => (
                  <div key={s.titulo} className="rounded-xl border border-[#EFE6E2] bg-white p-4">
                    <span className="flex size-8 items-center justify-center rounded-full bg-vinho-200/50 text-vinho-800">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                        <rect x="2" y="4.5" width="12" height="8.5" rx="2" stroke="currentColor" strokeWidth="1.3" />
                        <circle cx="8" cy="8.75" r="2.3" stroke="currentColor" strokeWidth="1.3" />
                        <path d="M5.5 4.5l1-1.5h3l1 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="mt-3 text-[14px] font-semibold">{s.titulo}</p>
                    <p className="mt-1 text-[12px] leading-snug text-[#6E5C57]">{s.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
