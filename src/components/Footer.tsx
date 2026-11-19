import { INSTAGRAM_URL, NAV_LINKS, WHATSAPP_URL } from '../config';
import { Button } from './Button';
import { Logo } from './Logo';
import { irParaOTopo } from '../lib/topo';

export function Footer() {
  return (
    <footer className="bg-neutro-900 text-neutro-50">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 pb-10 pt-16 md:px-10 xl:px-[120px]">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <a href="#topo" onClick={irParaOTopo} aria-label="Alchemy, voltar ao topo" className="text-neutro-50">
            <Logo />
          </a>
          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-neutro-50/80 transition-colors duration-300 hover:text-neutro-50">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button variante="gelo" href={WHATSAPP_URL}>
            Quero minha página
          </Button>
        </div>
        <hr className="border-neutro-700" />
        <div className="flex flex-col gap-4 text-sm text-neutro-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Alchemy · Sites e landing pages sob medida</p>
          <ul className="flex gap-6">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neutro-50">
                @alchemybr
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-neutro-50">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
