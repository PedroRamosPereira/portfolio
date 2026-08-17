/**
 * Fonte única de conteúdo do portfólio.
 * Trocar texto, contato e projetos aqui, não dentro dos componentes.
 */

export const perfil = {
  nome: "Pedro Ramos",
  sobrenome: "Pereira",
  papel: "Landing pages para clínicas, escritórios e serviços locais",
  email: "pramospereira1@gmail.com",
  github: "https://github.com/PedroRamosPereira",
  // TODO: trocar pelo número real antes de publicar (formato https://wa.me/55DDDNUMERO)
  whatsapp: null as string | null,
  // TODO: confirmar/ajustar o perfil do LinkedIn antes de publicar
  linkedin: null as string | null,
};

export const hero = {
  titulo: ["Landing pages que", "convertem visitas", "em clientes"],
  // 19 palavras
  texto:
    "Página única, escrita e construída do zero para o seu serviço. Do briefing ao domínio no ar, sem template de builder.",
  ctaPrimario: { label: "Ver projetos", href: "#projetos" },
  ctaSecundario: { label: "Como funciona", href: "#processo" },
};

export const indicadores = [
  { valor: "03", rotulo: "projetos publicados" },
  { valor: "100%", rotulo: "código próprio, sem builder" },
  { valor: "AA", rotulo: "contraste mínimo em todos" },
];

export type Servico = {
  icone: "layout" | "pen" | "zap" | "phone" | "search" | "chart";
  titulo: string;
  texto: string;
  tags: string[];
  destaque?: boolean;
};

export const servicos: Servico[] = [
  {
    icone: "layout",
    titulo: "Landing page sob medida",
    texto:
      "Estrutura desenhada para o seu serviço, não um tema comprado. Cada seção existe porque resolve uma objeção de quem vai contratar.",
    tags: ["design", "next.js", "html estático"],
    destaque: true,
  },
  {
    icone: "pen",
    titulo: "Texto e estrutura",
    texto: "Ordem das seções, títulos e chamadas escritos junto com o layout.",
    tags: ["copy", "hierarquia"],
  },
  {
    icone: "zap",
    titulo: "Peso e velocidade",
    texto: "Fonte local, imagem no tamanho certo, sem biblioteca que não paga o próprio peso.",
    tags: ["core web vitals"],
  },
  {
    icone: "phone",
    titulo: "Responsivo de verdade",
    texto: "Cada quebra de coluna decidida no componente, testada em 390px e em 1600px.",
    tags: ["mobile-first"],
  },
  {
    icone: "search",
    titulo: "SEO técnico",
    texto: "Título, descrição, dados estruturados, sitemap e Open Graph resolvidos na entrega.",
    tags: ["metadata", "og"],
  },
  {
    icone: "chart",
    titulo: "Acessibilidade",
    texto: "Contraste AA, foco visível, navegação por teclado e respeito a prefers-reduced-motion.",
    tags: ["wcag aa"],
  },
];

export type Projeto = {
  nome: string;
  segmento: string;
  url: string;
  repo: string;
  imagem: string;
  imagemMobile: string;
  largura: number;
  altura: number;
  resumo: string;
  stack: string[];
};

export const projetos: Projeto[] = [
  {
    nome: "Nogueira & Sampaio",
    segmento: "Advocacia",
    url: "nogueira-sampaio-advocacia",
    repo: "https://github.com/PedroRamosPereira/nogueira-sampaio-advocacia",
    imagem: "/projetos/advocacia-desktop.png",
    imagemMobile: "/projetos/advocacia-mobile.png",
    largura: 1600,
    altura: 1000,
    resumo:
      "Escritório de família e sucessões. Azul sozinho no lugar do dourado que vira clichê na categoria, uma família tipográfica só e formulário que abre o WhatsApp já preenchido.",
    stack: ["HTML", "CSS", "JS sem framework"],
  },
  {
    nome: "Clínica Vismara",
    segmento: "Estética",
    url: "landing-page-estetica",
    repo: "https://github.com/PedroRamosPereira/landing-page-estetica",
    imagem: "/projetos/estetica-desktop.png",
    imagemMobile: "/projetos/estetica-mobile.png",
    largura: 1600,
    altura: 1000,
    resumo:
      "Harmonização facial. Entrada das seções em CSS puro com animation-timeline, sem biblioteca de animação, e o dourado da marca recalibrado para passar em contraste AA.",
    stack: ["Next.js 16", "Tailwind v4", "CSS scroll-driven"],
  },
  {
    nome: "Clínica odontológica",
    segmento: "Odontologia",
    url: "lading-page-odontologia",
    repo: "https://github.com/PedroRamosPereira/Lading-page-odontologia",
    imagem: "/projetos/odontologia-desktop.png",
    imagemMobile: "/projetos/odontologia-mobile.png",
    largura: 1600,
    altura: 1000,
    resumo:
      "Base whitelabel: todo o conteúdo mora em um arquivo só, com espaço reservado marcado para foto, CRO e contato. Serve de ponto de partida para qualquer clínica.",
    stack: ["Next.js 16", "Tailwind v4", "Motion"],
  },
];

export const etapas = [
  {
    titulo: "Briefing",
    texto: "Uma conversa para entender o serviço, quem contrata e o que trava a decisão hoje.",
  },
  {
    titulo: "Estrutura",
    texto: "Ordem das seções e texto de cada uma aprovados antes de qualquer pixel.",
  },
  {
    titulo: "Design e build",
    texto: "Protótipo e código na mesma semana, com revisão no meio do caminho.",
  },
  {
    titulo: "Publicação",
    texto: "Domínio, deploy, medição e um guia curto de como trocar o conteúdo depois.",
  },
];

export const contato = {
  titulo: "Vamos falar do seu projeto",
  texto:
    "Resposta em até um dia útil. Primeira entrega em duas a três semanas, dependendo do material que você já tem.",
};
