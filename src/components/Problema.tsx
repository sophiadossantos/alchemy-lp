import type { CSSProperties } from 'react';
import { Estrela } from './Estrela';

const dores = [
  'Seu link da bio não explica o que você oferece.',
  'As mesmas perguntas chegam todo dia no direct.',
  'Seu perfil não mostra o nível do seu trabalho.',
];

export function Problema() {
  return (
    <section aria-labelledby="problema-titulo" className="px-4">
      <div
        data-reveal
        className="vidro luz relative mx-auto flex max-w-page bg-gradient-to-br from-white/80 via-white/60 to-vinho-200/40 items-center justify-center rounded-3xl px-6 py-12 md:min-h-[341px] md:px-10 md:py-[82px]"
      >
        <div className="relative flex w-full flex-col items-start gap-8 lg:w-auto lg:flex-row lg:items-center lg:gap-[104px]">
          <div className="relative flex flex-col gap-2 lg:w-[332px]">
            <Estrela
              tamanho={28}
              className="mb-2 text-vinho-800 lg:absolute lg:-left-[38px] lg:top-[20px] lg:mb-0"
            />
            <h2
              id="problema-titulo"
              className="text-2xl font-semibold leading-tight tracking-[-0.02em] [text-wrap:balance] md:text-4xl md:leading-[1.1]"
            >
              Todo bom negócio tem ouro escondido.
            </h2>
            <p>O problema é quando ninguém consegue ver:</p>
          </div>
          <ul className="flex w-full flex-col gap-4 lg:w-[411px]">
            {dores.map((dor, i) => (
              <li key={dor} data-reveal style={{ '--d': `${150 + i * 120}ms` } as CSSProperties}>
                {/* Hover leve: sobe 2px, escurece um pouco e ganha sombra */}
                <div className="rounded-xl bg-vinho-800 px-6 py-3 text-neutro-50 transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-vinho-900 hover:shadow-[0_12px_24px_-12px_rgba(122,31,46,0.6)]">
                  {dor}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
