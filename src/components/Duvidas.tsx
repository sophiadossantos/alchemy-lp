import { useId, useState } from 'react';
import iconeMais from '../assets/icone-mais.svg';
import iconeMenos from '../assets/icone-menos.svg';
import { SectionTitle } from './SectionTitle';

const perguntas = [
  { pergunta: 'Quanto tempo leva?', resposta: 'De 2 a 3 semanas após o briefing.' },
  {
    pergunta: 'Como funciona a rodada de ajustes?',
    resposta: 'Todos os ajustes são enviados de uma vez, depois de ver o design, e aplicados antes da publicação.',
  },
  {
    pergunta: 'Preciso ter domínio e hospedagem?',
    resposta: 'Não precisa ter antes. A contratação é orientada no processo, e os custos ficam no seu nome.',
  },
  { pergunta: 'E se eu quiser mudar algo depois?', resposta: 'Ajustes extras ou após a entrega são orçados à parte.' },
  { pergunta: 'Como funciona o pagamento?', resposta: '50% para começar e 50% na entrega.' },
  {
    pergunta: 'Por que o valor de lançamento?',
    resposta:
      'São os primeiros projetos da Alchemy. Em troca do desconto, o projeto entra no portfólio, com um depoimento seu.',
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
          className="group flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-semibold transition-colors duration-300 hover:text-vinho-800"
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
