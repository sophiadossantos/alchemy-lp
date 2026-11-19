import type { CSSProperties } from 'react';
import { WHATSAPP_URL } from '../config';
import { Button } from './Button';
import { Selo } from './Selo';

/**
 * CTA final: card vinho com o selo encaixado na borda de cima (metade dentro, metade fora),
 * um filete interno que ecoa o anel do selo e a luz que segue o mouse (classe .luz).
 */
export function CtaFinal() {
  return (
    <section aria-labelledby="cta-titulo" className="px-4 pt-16">
      <div data-reveal className="relative mx-auto max-w-page">
        {/* Selo sobre a borda de cima */}
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
          <Selo tamanho={128} />
        </div>

        <div
          className="luz luz-escura rounded-3xl bg-vinho-800 p-2.5 md:p-3"
          style={{ '--cor-luz': 'rgba(241, 201, 202, 0.06)', '--raio-luz': '420px' } as CSSProperties}
        >
          <div className="flex flex-col items-center gap-4 rounded-[18px] border border-white/10 px-6 pb-14 pt-24 text-center md:px-10 md:pb-20 md:pt-28">
            <h2
              id="cta-titulo"
              className="max-w-[760px] text-[34px] font-semibold leading-[1.1] text-neutro-50 [text-wrap:balance] md:text-h3"
            >
              Pronto para transformar a sua presença?
            </h2>
            <p className="max-w-[520px] text-vinho-200">
              Sua página à altura do seu negócio começa com uma conversa.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
              <Button variante="gelo" href={WHATSAPP_URL}>
                Chamar no WhatsApp
              </Button>
              <Button variante="contorno-claro" href="#investimento">
                Ver investimento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
