import { NAV_LINKS, WHATSAPP_URL } from '../config';
import { irParaOTopo } from '../lib/topo';
import { Button } from './Button';
import { Logo } from './Logo';

/** Navbar fixa: pílula branca, arredondada e com sombra, desde o início da página. */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-6 md:px-10 md:pt-9 xl:px-20">
      {/* Grade de 3 colunas: logo à esquerda, links sempre no centro exato, botão à direita */}
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1fr_auto] items-center gap-4 rounded-[96px] border border-neutro-900/[0.06] bg-white py-1.5 pl-4 pr-1.5 text-neutro-900 shadow-[0_12px_28px_rgba(20,23,28,0.08)] md:py-2 md:pl-6 md:pr-2 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#topo" onClick={irParaOTopo} aria-label="Alchemy, início" className="justify-self-start">
          <Logo className="h-10 w-auto md:h-12" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors duration-300 hover:text-vinho-800">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button href={WHATSAPP_URL} className="justify-self-end px-5 py-2.5 max-sm:px-4 max-sm:py-2">
          Quero minha página
        </Button>
      </div>
    </header>
  );
}
