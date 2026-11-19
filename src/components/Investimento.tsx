import type { CSSProperties } from 'react';
import { whatsappCom } from '../config';
import { Button } from './Button';
import { Estrela } from './Estrela';

type Plano = {
  nome: string;
  paraQuem: string;
  /** O que a pessoa recebe, em linguagem de cliente. */
  itens: string[];
  /** Prazo e ajustes, numa linha discreta. */
  prazo: string;
  /** Preço cheio do documento de planos. */
  preco: string;
  /** Valor de lançamento (3 primeiros projetos), quando existe. */
  lancamento?: string;
  destaque?: boolean;
};

/** Planos do documento de planos e propostas (seções 1.1 e 1.2), escritos sem termos técnicos. */
const planos: Plano[] = [
  {
    nome: 'Portfólio Express',
    paraQuem: 'Para fotógrafos e criativos que querem mostrar o trabalho',
    itens: [
      'Página com sua apresentação, galeria, depoimentos e contato',
      'Galeria com até 30 fotos e 1 vídeo de destaque',
      'Sua marca aplicada: logo, cores e fontes',
      'Pedidos de orçamento chegando no seu e-mail',
      'Botões para o seu WhatsApp e Instagram',
      'Você mesmo troca as fotos quando quiser',
    ],
    prazo: 'Pronta em 7 dias úteis · 1 rodada de ajustes',
    preco: '850',
    lancamento: '600',
  },
  {
    nome: 'Essencial',
    paraQuem: 'Para quem já tem alguém para colocar o site no ar',
    itens: [
      'O visual completo da sua página, pronto para construir',
      'Até 8 seções pensadas para levar o cliente ao contato',
      'Sua marca aplicada: logo, cores e fontes',
      'Versões para celular e computador',
      'Tudo organizado para quem for montar o site',
    ],
    prazo: 'Pronta em 10 dias úteis · 2 rodadas de ajustes',
    preco: '1.100',
    lancamento: '800',
  },
  {
    nome: 'Completo',
    paraQuem: 'Para negócios que querem vender mais pela internet',
    itens: [
      'Sua página criada do zero e no ar, com o seu endereço',
      'Pedidos chegando no seu e-mail e no WhatsApp',
      'Abre rápido e funciona bem no celular',
      'Pronta para receber visitas de anúncios',
      'Um guia para você mesmo atualizar os textos',
      'Acompanhamento do começo ao fim',
    ],
    prazo: 'Pronta em 15 a 20 dias úteis · 2 rodadas de ajustes',
    preco: '2.500',
    lancamento: '1.500',
    destaque: true,
  },
  {
    nome: 'Completo+',
    paraQuem: 'Para quem não quer se preocupar nem com os textos',
    itens: [
      'Tudo o que vem no Completo',
      'Textos escritos por nós, pensados para vender',
      'Respostas para as dúvidas que travam os seus clientes',
      'Perguntas no contato que filtram quem quer mesmo contratar',
      'Uma conversa a mais para aprovar os textos com você',
    ],
    prazo: 'Pronta em 20 a 25 dias úteis · 3 rodadas de ajustes',
    preco: '3.200',
  },
];

function CardPlano({ nome, paraQuem, itens, prazo, preco, lancamento, destaque }: Plano) {
  const claro = destaque;
  const suave = claro ? 'text-neutro-500' : 'text-neutro-300';
  const estrela = claro ? 'text-vinho-800' : 'text-vinho-200';
  return (
    <li
      data-reveal
      className={`luz relative flex flex-col rounded-3xl p-6 md:p-7 ${
        claro
          ? 'bg-white text-neutro-900 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.65)]'
          : 'border border-white/10 bg-white/[0.04] text-neutro-50'
      }`}
      style={
        {
          '--cor-luz': claro ? 'rgba(122, 31, 46, 0.03)' : 'rgba(241, 201, 202, 0.05)',
          '--raio-luz': '240px',
        } as CSSProperties
      }
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{nome}</h3>
        {claro && (
          <span className="rounded-full bg-vinho-800 px-3 py-1 text-xs font-medium text-neutro-50">Recomendado</span>
        )}
      </div>
      <p className={`mt-1 text-sm ${suave}`}>{paraQuem}</p>

      <div className={`mt-6 border-t pt-6 ${claro ? 'border-neutro-900/[0.08]' : 'border-white/10'}`}>
        <p className={`text-sm ${suave}`}>
          A partir de
          {lancamento && (
            <>
              <span className="sr-only">, de</span> <s className="ml-1">R$ {preco}</s>
            </>
          )}
        </p>
        <p className={`mt-1 flex items-start gap-1 ${claro ? 'text-vinho-800' : 'text-neutro-50'}`}>
          <span className="sr-only">por </span>
          <span className="mt-1.5 text-base font-semibold">R$</span>
          <span className="text-4xl font-semibold leading-none tracking-[-0.03em]">{lancamento ?? preco}</span>
        </p>
      </div>

      <ul className={`mt-6 flex flex-1 flex-col gap-3 text-sm ${claro ? 'text-neutro-700' : 'text-neutro-100'}`}>
        {itens.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Estrela tamanho={12} className={`mt-1 shrink-0 ${estrela}`} />
            {item}
          </li>
        ))}
      </ul>

      <p className={`mt-6 border-t pt-4 text-xs ${claro ? 'border-neutro-900/[0.08] text-neutro-500' : 'border-white/10 text-neutro-300'}`}>
        {prazo}
      </p>

      <Button
        variante={claro ? 'vinho' : 'contorno-claro'}
        href={whatsappCom(`Olá! Vim pelo site da Alchemy e quero saber mais sobre o plano ${nome}.`)}
        className="mt-5 w-full"
      >
        Saiba mais
      </Button>
    </li>
  );
}

/**
 * Investimento: painel preto frio com os quatro planos lado a lado, cada um com "a partir de"
 * e um "Saiba mais" que abre o WhatsApp já com o nome do plano. O detalhe fica para a conversa.
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

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[560px]">
            <h2
              id="investimento-titulo"
              className="text-2xl font-semibold leading-tight tracking-[-0.02em] md:text-4xl md:leading-[1.1]"
            >
              Investimento
            </h2>
            <p className="mt-2 text-neutro-300">Valores fechados, sem surpresa. Escolha o ponto de partida do seu projeto.</p>
          </div>
          <p className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutro-200 md:self-auto">
            <Estrela tamanho={10} className="text-vinho-200" />
            Valor de lançamento para os 3 primeiros projetos
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {planos.map((p) => (
            <CardPlano key={p.nome} {...p} />
          ))}
        </ul>

        <p className="mt-8 text-sm text-neutro-300">
          Pagamento: 50% para começar e 50% na entrega, via Pix. Adicionais: domínio próprio, formulário qualificado e
          manutenção mensal.
        </p>
      </div>
    </section>
  );
}
