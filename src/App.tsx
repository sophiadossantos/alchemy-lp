import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problema } from './components/Problema';
import { Solucao } from './components/Solucao';
import { Projetos } from './components/Projetos';
import { Processo } from './components/Processo';
import { Investimento } from './components/Investimento';
import { Duvidas } from './components/Duvidas';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { useLuzDoMouse, useRevealOnScroll } from './lib/hooks';

export function App() {
  useRevealOnScroll();
  useLuzDoMouse();
  return (
    <div id="topo">
      <Header />
      {/* Mesmo respiro entre todas as seções: 96px no celular, 140px no desktop (como no Figma) */}
      <main className="flex flex-col gap-24 pb-16 md:pb-[83px] lg:gap-[140px]">
        <Hero />
        <Problema />
        <Solucao />
        <Projetos />
        <Processo />
        <Investimento />
        <Duvidas />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
