import { useId, useState } from 'react';
import iconeMais from '../assets/icone-mais.svg';
import iconeMenos from '../assets/icone-menos.svg';
import { SectionTitle } from './SectionTitle';

/** Respostas conferidas com o documento de planos e propostas. */
const perguntas = [
  {
    pergunta: 'Quanto tempo leva?',
    resposta:
      'Depende do plano: 7 dias úteis no Portfólio Express, 10 no Essencial, de 15 a 20 no Completo e de 20 a 25 no Completo+. O prazo começa quando todos os materiais chegam e a entrada é paga.',
  },
  {
    pergunta: 'Como funciona a rodada de ajustes?',
    resposta:
      'Você envia todos os ajustes de uma vez, depois de ver o design, e eles são aplicados antes da publicação. São 1 rodada no Portfólio Express, 2 no Essencial e no Completo e 3 no Completo+. Rodadas extras custam R$ 180 cada.',
  },
  {
    pergunta: 'Preciso ter domínio e hospedagem?',
    resposta:
      'Não precisa ter antes. A página fica no Framer, numa conta no seu nome, com assinatura a partir de cerca de US$ 10 por mês. A configuração do domínio já vem no Completo e é um adicional de R$ 150 no Portfólio Express.',
  },
  {
    pergunta: 'E se eu quiser mudar algo depois?',
    resposta:
      'No Framer dá para trocar fotos e textos simples por conta própria. Novas seções ou mudanças de layout são orçadas à parte, e também existe a manutenção mensal de até 2 horas por R$ 250.',
  },
  {
    pergunta: 'Como funciona o pagamento?',
    resposta: '50% para começar e 50% na entrega, antes da publicação, via Pix.',
  },
  {
    pergunta: 'Por que o valor de lançamento?',
    resposta: 'A Alchemy está começando, e os 3 primeiros projetos têm um valor especial de lançamento.',
  },
];

function ItemDeFaq({ pergunta, resposta, aberto, onToggle }: {
  pergunta: string;
  resposta: string;
  aberto: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  return (
    <li className="border-b border-neutro-100">
      <h3>
        <button
          type="button"
          aria-expanded={aberto}
          aria-controls={id}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold md:py-6 md:text-lg transition-colors duration-300 hover:text-vinho-800"
        >
          {pergunta}
          <img
            src={aberto ? iconeMenos : iconeMais}
            alt=""
            width={20}
            height={20}
            className="shrink-0"
          />
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          aberto ? '-mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        {...(aberto ? {} : ({ inert: '' } as object))}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-neutro-700">{resposta}</p>
        </div>
      </div>
    </li>
  );
}

export function Duvidas() {
  const [aberto, setAberto] = useState<number | null>(0);
  return (
    <section id="duvidas" className="px-4">
      <div className="mx-auto flex max-w-page flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div data-reveal className="lg:sticky lg:top-28">
          <SectionTitle alinhamento="esquerda" titulo="Dúvidas" subtitulo="O que costumam perguntar antes de começar." />
        </div>
        <ul className="w-full lg:w-[812px]" data-reveal>
          {perguntas.map((item, i) => (
            <ItemDeFaq
              key={item.pergunta}
              {...item}
              aberto={aberto === i}
              onToggle={() => setAberto(aberto === i ? null : i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
