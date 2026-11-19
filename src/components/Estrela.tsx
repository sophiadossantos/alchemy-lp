/**
 * Estrela de quatro pontas: é o mesmo desenho (o mesmo path) da estrela da logo, recortado no tamanho dela.
 * SVG inline, então fica nítida em qualquer tamanho; a cor vem de `currentColor`.
 */
export function Estrela({ tamanho = 14, className = '' }: { tamanho?: number; className?: string }) {
  return (
    <svg
      viewBox="74.1825 6.5307 11.7553 11.7553"
      width={tamanho}
      height={tamanho}
      fill="currentColor"
      shapeRendering="geometricPrecision"
      aria-hidden
      className={`shrink-0 ${className}`}
    >
      <path d="M80.0601 6.5307C80.6479 11.2328 81.2357 11.8206 85.9378 12.4083C81.2357 12.9961 80.6479 13.5839 80.0601 18.286C79.4724 13.5839 78.8846 12.9961 74.1825 12.4083C78.8846 11.8206 79.4724 11.2328 80.0601 6.5307Z" />
    </svg>
  );
}
