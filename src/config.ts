// WhatsApp da Alchemy: só dígitos, com DDI 55 + DDD.
const WHATSAPP_NUMERO = '5548998380521';

const mensagem = 'Olá! Vim pelo site da Alchemy e quero a minha página.';

/** Link do WhatsApp com uma mensagem pronta. */
export const whatsappCom = (texto: string) => `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;

export const WHATSAPP_URL = whatsappCom(mensagem);
export const INSTAGRAM_URL = 'https://instagram.com/alchemybr';

export const NAV_LINKS = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Investimento', href: '#investimento' },
  { label: 'Dúvidas', href: '#duvidas' },
];
