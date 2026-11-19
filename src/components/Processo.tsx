import { CardLuz } from './CardLuz';
import { SectionTitle } from './SectionTitle';

/** A etapa de proposta mostra que o "a partir de" leva a um valor combinado, não a uma surpresa. */
const etapas = [
  { titulo: 'Contato', texto: 'Você chama no WhatsApp e conta o que precisa.' },
  { titulo: 'Briefing', texto: 'Entendemos o seu negócio, o seu público e os seus objetivos.' },
  { titulo: 'Proposta', texto: 'Você recebe escopo, valor e prazo antes de começar.' },
  { titulo: 'Criação', texto: 'Design e desenvolvimento da sua página.' },
  { titulo: 'Ajustes e entrega', texto: 'Rodadas de ajustes e a página publicada.' },
];

export function Processo() {
  return (
    <section id="como-funciona" className="px-4">
      <div className="mx-auto flex max-w-page flex-col items-center gap-10">
        <div data-reveal>
          <SectionTitle
            titulo="A alquimia, passo a passo"
            subtitulo="Do briefing à página no ar, com o mesmo contato do início ao fim."
          />
        </div>
        <ol className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {etapas.map((etapa, i) => (
            <CardLuz
              key={etapa.titulo}
              atraso={i * 110}
              className="flex flex-col gap-4 rounded-xl border border-white/[0.12] bg-neutro-50 p-6 backdrop-blur-[14px]"
            >
              <span className="font-bold">{String(i + 1).padStart(2, '0')}.</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">{etapa.titulo}</h3>
                <p>{etapa.texto}</p>
              </div>
            </CardLuz>
          ))}
        </ol>
      </div>
    </section>
  );
}
