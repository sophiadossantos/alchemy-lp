type Props = {
  titulo: string;
  subtitulo: string;
  alinhamento?: 'centro' | 'esquerda';
  /** Espaço entre título e subtítulo (o Figma usa 8px na maioria e 16px na seção de solução). */
  espaco?: 'gap-2' | 'gap-4';
};

export function SectionTitle({ titulo, subtitulo, alinhamento = 'centro', espaco = 'gap-2' }: Props) {
  const centro = alinhamento === 'centro';
  return (
    <div className={`flex flex-col ${espaco} ${centro ? 'items-center text-center' : 'items-start'}`}>
      <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] md:text-h5">
        {titulo}
      </h2>
      <p>{subtitulo}</p>
    </div>
  );
}
