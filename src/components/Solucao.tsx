import handshake from '../assets/handshake.svg';
import clock from '../assets/clock.svg';
import chartLineUp from '../assets/chart-line-up.svg';
import { CardLuz } from './CardLuz';
import { SectionTitle } from './SectionTitle';

const beneficios = [
  { icone: handshake, titulo: 'Clareza', texto: 'O cliente entende o que você faz e como funciona antes de chamar.' },
  { icone: clock, titulo: 'Tempo', texto: 'As dúvidas mais comuns são respondidas antes de chegar ao direct.' },
  {
    icone: chartLineUp,
    titulo: 'Credibilidade',
    texto: 'Sua presença online passa a mostrar o nível real do seu trabalho.',
  },
];

export function Solucao() {
  return (
    <section className="px-4">
      <div className="mx-auto flex max-w-page flex-col items-center gap-10">
        <div className="max-w-[690px]" data-reveal>
          <SectionTitle
            espaco="gap-4"
            titulo="Uma landing page bem construída resolve isso."
            subtitulo="Tudo num só lugar: bonito, claro e feito para levar ao contato."
          />
        </div>
        <ul className="grid w-full gap-4 md:grid-cols-3">
          {beneficios.map((b, i) => (
            <CardLuz
              key={b.titulo}
              atraso={i * 120}
              escuro
              className="flex flex-col gap-4 rounded-xl border border-white/[0.12] bg-neutro-900 p-6 text-neutro-50 backdrop-blur-[14px]"
            >
              <img src={b.icone} alt="" width={24} height={24} />
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">{b.titulo}</h3>
                <p>{b.texto}</p>
              </div>
            </CardLuz>
          ))}
        </ul>
      </div>
    </section>
  );
}
