import { CardLuz } from './CardLuz';
import { SectionTitle } from './SectionTitle';

const etapas = [
  { titulo: 'Entendimento', texto: 'Análise do negócio, do público e do conteúdo do site.' },
  { titulo: 'Design', texto: 'Criação do visual e ajustes até a sua aprovação final.' },
  { titulo: 'Desenvolvimento', texto: 'Construção do site, responsivo e testado em toda tela.' },
  { titulo: 'Publicação', texto: 'Site no ar, revisado e pronto para receber os contatos.' },
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
        <ol className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
