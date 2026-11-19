import type { MouseEvent } from 'react';
import { prefereMenosMovimento } from './hooks';

/** Tira o "#secao" do endereço, sem recarregar e sem pular a página. */
function limparHash() {
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

/**
 * Ao abrir ou recarregar a página: sempre começa no topo.
 * Desliga a restauração de rolagem do navegador e ignora um "#secao" que tenha ficado no endereço.
 */
export function comecarNoTopo() {
  if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  limparHash();
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

/** Clique na logo: sobe suavemente até o topo e limpa o endereço. */
export function irParaOTopo(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  limparHash();
  window.scrollTo({ top: 0, behavior: prefereMenosMovimento() ? 'instant' : 'smooth' });
}
