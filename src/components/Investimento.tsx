import type { CSSProperties } from 'react';
import { WHATSAPP_URL } from '../config';
import { Button } from './Button';
import { Estrela } from './Estrela';

/** Plano Portfólio Express, o de entrada (documento de planos e propostas, seção 1.2). */
const inclusos = [
  'Página única com apresentação, sobre, galeria, depoimentos e contato',
  'Sua identidade visual aplicada: logo, cores e tipografia',
  'Galeria com até 30 fotos e 1 vídeo de destaque',
  'Formulário no fim da página, com aviso por e-mail',
  'Botões de WhatsApp e Instagram',
  'Versões para celular, tablet e computador',
  'Publicação no Framer, com acesso para você trocar as fotos',
  '1 rodada de ajustes',
];

/** Condições do documento de planos: pagamento e prazo do Portfólio Express. */
const detalhes = ['50% para começar e 50% na entrega, via Pix', 'Pronta em 7 dias úteis'];

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
              className="text-2xl font-semibold leading-tight tracking-[-0.02em] md:text-4xl md:leading-[1.1]"
            >
              Investimento
            </h2>
            <p className="mt-2 text-neutro-300">Um valor fechado, sem surpresas no meio do caminho.</p>

            <h3 className="mt-8 text-base font-semibold md:mt-10 md:text-lg">Incluso</h3>
            <ul className="mt-2">
              {inclusos.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-white/10 py-3.5 last:border-b-0">
                  <Estrela tamanho={14} className="text-vinho-200" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-neutro-300">
              Adicionais: formulário qualificado, domínio próprio e manutenção mensal.
            </p>
            <p className="mt-2 text-neutro-300">
              Precisa de mais? Também temos os planos Essencial, Completo e Completo+.
            </p>
          </div>

          {/* Card de preço claro */}
          <div
            className="luz relative flex flex-col rounded-[28px] bg-white p-7 text-neutro-900 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.65)] sm:p-9"
            style={{ '--cor-luz': 'rgba(122, 31, 46, 0.03)', '--raio-luz': '280px' } as CSSProperties}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="flex flex-col">
                <span className="text-lg font-semibold">Portfólio Express</span>
                <span className="text-sm text-neutro-500">Plano de entrada</span>
              </span>
              <span className="rounded-full bg-vinho-800 px-3 py-1 text-xs font-medium text-neutro-50">
                Valor de lançamento
              </span>
            </div>

            <div className="mt-7 border-t border-neutro-900/[0.08] pt-7">
              <p className="text-neutro-500">
                <span className="sr-only">De </span>
                <s>R$ 850</s>
              </p>
              <p className="mt-1 flex items-start gap-1.5 text-vinho-800">
                <span className="sr-only">Por </span>
                <span className="mt-2 text-xl font-semibold md:mt-3 md:text-2xl">R$</span>
                <span className="text-5xl font-semibold leading-none tracking-[-0.04em] md:text-7xl">600</span>
              </p>
              <p className="mt-3 text-neutro-600">Só para os 3 primeiros projetos.</p>
            </div>

            <ul className="mt-7 flex flex-col gap-2">
              {detalhes.map((d) => (
                <li key={d} className="flex items-center gap-3 rounded-xl bg-neutro-50 px-4 py-3 text-neutro-700">
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
