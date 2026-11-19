import type { CSSProperties } from 'react';
import { whatsappCom } from '../config';
import { Button } from './Button';
import { Estrela } from './Estrela';

/** Pacote base: a landing page desenhada e publicada (plano Completo do documento de planos). */
const inclusos = [
  'Design exclusivo, criado do zero (sem template)',
  'Até 8 seções',
  'Versão responsiva: celular, tablet e computador',
  'Desenvolvimento e publicação',
  'Formulário de contato com aviso por e-mail e WhatsApp',
  '2 rodadas de ajustes',
  'Entrega em 15 a 20 dias úteis após o briefing',
];

const adicionais = [
  'Integração com pixel e analytics',
  'Integração com CRM',
  'Seções ou páginas extras',
  'Textos escritos do zero',
  'Rodada extra de ajustes',
  'Manutenção mensal',
];

/** Todos os caminhos da seção levam ao mesmo lugar: o WhatsApp, já pedindo a proposta. */
const PROPOSTA_URL = whatsappCom('Olá! Vim pelo site da Alchemy e quero solicitar uma proposta para a minha landing page.');

/**
 * Investimento: um pacote base com "a partir de", o selo de lançamento, adicionais sem preço
 * e as condições de pagamento. O valor final sai na proposta, depois do briefing.
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

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-20">
          {/* Título, lançamento, adicionais e pagamento */}
          <div className="flex flex-col">
            <h2
              id="investimento-titulo"
              className="text-2xl font-semibold leading-tight tracking-[-0.02em] md:text-4xl md:leading-[1.1]"
            >
              Investimento
            </h2>
            <p className="mt-3 max-w-[520px] text-neutro-300">
              Cada projeto é pensado para o seu negócio. O valor final depende do escopo, e você recebe uma proposta
              personalizada após o briefing.
            </p>

            <p className="mt-8 flex items-start gap-3 rounded-2xl border border-vinho-200/20 bg-vinho-200/[0.06] px-4 py-3.5 text-sm text-neutro-100">
              <Estrela tamanho={14} className="mt-0.5 shrink-0 text-vinho-200" />
              <span>
                <strong className="font-semibold text-neutro-50">Condição de lançamento:</strong> valores especiais para os
                primeiros 3 projetos.
              </span>
            </p>

            <h3 className="mt-10 text-base font-semibold md:text-lg">Adicionais sob consulta</h3>
            <ul className="mt-3 grid gap-x-6 sm:grid-cols-2">
              {adicionais.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-white/10 py-3 text-neutro-200">
                  <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-vinho-200" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-base font-semibold md:text-lg">Pagamento</h3>
            <p className="mt-2 text-neutro-300">50% no início do projeto e 50% na entrega, via Pix.</p>
          </div>

          {/* Card do pacote base */}
          <div className="flex lg:items-start">
            <div
              className="luz relative flex w-full flex-col rounded-[28px] bg-white p-7 text-neutro-900 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.65)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_56px_110px_-30px_rgba(0,0,0,0.8)] sm:p-9"
              style={{ '--cor-luz': 'rgba(122, 31, 46, 0.03)', '--raio-luz': '280px' } as CSSProperties}
            >
              <h3 className="text-lg font-semibold">Landing Page</h3>

              <div className="mt-6 border-t border-neutro-900/[0.08] pt-6">
                <p className="text-sm text-neutro-500">
                  a partir de
                  <span className="sr-only">, de</span> <s className="ml-1">R$ 2.500</s>
                </p>
                <p className="mt-1 flex items-start gap-1.5 text-vinho-800">
                  <span className="sr-only">por </span>
                  <span className="mt-2 text-xl font-semibold md:mt-3 md:text-2xl">R$</span>
                  <span className="text-5xl font-semibold leading-none tracking-[-0.04em] md:text-6xl">1.500</span>
                </p>
              </div>

              <p className="mt-7 text-sm font-semibold">O que está incluso</p>
              <ul className="mt-3 flex flex-col gap-3 text-sm text-neutro-700">
                {inclusos.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Estrela tamanho={12} className="mt-1 shrink-0 text-vinho-800" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-neutro-900/[0.08] pt-4 text-xs text-neutro-500">
                Domínio e hospedagem ficam por conta do cliente.
              </p>

              <Button href={PROPOSTA_URL} className="mt-5 w-full">
                Solicitar proposta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
