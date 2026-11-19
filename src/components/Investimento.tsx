import type { CSSProperties } from 'react';
import { WHATSAPP_URL } from '../config';
import { Button } from './Button';
import { Estrela } from './Estrela';

const inclusos = [
  'Design sob medida, sem template',
  'Página responsiva para qualquer tela',
  'Formulário com aviso por e-mail e WhatsApp',
  'Botão direto para o seu WhatsApp',
  '1 rodada de ajustes antes de publicar',
];

/** Detalhes práticos tirados do FAQ. */
const detalhes = ['50% para começar e 50% na entrega', 'Entrega em 2 a 3 semanas após o briefing'];

/**
 * Investimento em destaque: painel preto frio com o título e o que está incluso à esquerda,
 * e o card de preço claro à direita, contrastando com o fundo escuro.
 */
export function Investimento() {
  return (
    <section id="investimento" aria-labelledby="investimento-titulo" className="px-4">
      <div
        data-reveal
        className="relative isolate mx-auto max-w-page overflow-hidden rounded-[32px] bg-[#0E0F13] px-5 py-14 text-neutro-50 sm:px-10 md:py-20 lg:px-16"
      >
        {/* Luz vinho bem leve e a estrela da marca quase invisível ao fundo */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -right-32 -top-40 h-[620px] w-[760px] rounded-full blur-[100px]"
            style={{ background: 'radial-gradient(closest-side, rgba(178,109,113,0.28), transparent 75%)' }}
          />
          <Estrela
            tamanho={620}
            className="absolute -right-24 top-1/2 -translate-y-1/2 rotate-[24deg] text-vinho-200 opacity-[0.025]"
          />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-20">
          {/* Título + incluso */}
          <div className="flex flex-col">
            <h2
              id="investimento-titulo"
              className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-h5"
            >
              Investimento
            </h2>
            <p className="mt-2 text-neutro-300">Um valor fechado, sem surpresas no meio do caminho.</p>

            <h3 className="mt-10 text-lg font-semibold">Incluso</h3>
            <ul className="mt-2">
              {inclusos.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-white/10 py-3.5 last:border-b-0">
                  <Estrela tamanho={14} className="text-vinho-200" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-neutro-300">
              Adicionais: pixel e analytics, integração com CRM e páginas extras.
            </p>
          </div>

          {/* Card de preço claro */}
          <div
            className="luz relative flex flex-col rounded-[28px] bg-white p-7 text-neutro-900 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.65)] sm:p-9"
            style={{ '--cor-luz': 'rgba(122, 31, 46, 0.03)', '--raio-luz': '280px' } as CSSProperties}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-lg font-semibold">Landing page sob medida</span>
              <span className="rounded-full bg-vinho-800 px-3 py-1 text-xs font-medium text-neutro-50">
                Valor de lançamento
              </span>
            </div>

            <div className="mt-7 border-t border-neutro-900/[0.08] pt-7">
              <p className="text-neutro-500">
                <span className="sr-only">De </span>
                <s>A partir de R$ 1.200</s>
              </p>
              <p className="mt-1 flex items-start gap-1.5 text-vinho-800">
                <span className="sr-only">Por </span>
                <span className="mt-3 text-2xl font-semibold">R$</span>
                <span className="text-[72px] font-semibold leading-none tracking-[-0.04em]">900</span>
              </p>
              <p className="mt-3 text-neutro-600">Só para os 3 primeiros projetos.</p>
            </div>

            <ul className="mt-7 flex flex-col gap-2">
              {detalhes.map((d) => (
                <li key={d} className="flex items-center gap-3 rounded-xl bg-neutro-50 px-4 py-3 text-sm text-neutro-700">
                  <Estrela tamanho={12} className="text-vinho-800" />
                  {d}
                </li>
              ))}
            </ul>

            <Button href={WHATSAPP_URL} className="mt-7 w-full">
              Garantir minha vaga
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
