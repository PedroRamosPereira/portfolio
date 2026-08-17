# Portfólio · Pedro Ramos Pereira

Landing page de portfólio para venda de landing pages. Construída a partir do mock
em `design/Portfolio Landing.dc.html`, com os três projetos reais do GitHub como cases.

## Stack

- Next.js 16 (App Router, Server Components por padrão) + TypeScript
- Tailwind CSS v4, tokens em `app/globals.css`
- Motion (`motion/react`) só na entrada por rolagem, isolada em `components/reveal.tsx`
- Phosphor Icons
- Fontes via `next/font`: Space Grotesk (títulos), DM Sans (texto), JetBrains Mono (rótulos)

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Onde trocar o conteúdo

Tudo que é texto, contato e case vive em `lib/content.ts`. Os componentes não
carregam string solta.

## Capturas dos projetos

`public/projetos/` guarda capturas reais de cada projeto, feitas do build de produção
rodando local, em 1600x1000 (desktop) e 430x932 (celular):

| Projeto | Repositório |
| --- | --- |
| Nogueira & Sampaio (advocacia) | `PedroRamosPereira/nogueira-sampaio-advocacia` |
| Clínica Vismara (estética) | `PedroRamosPereira/landing-page-estetica` |
| Clínica odontológica (whitelabel) | `PedroRamosPereira/Lading-page-odontologia` |

Para atualizar uma captura, suba o projeto em produção e rode:

```bash
google-chrome --headless=new --hide-scrollbars --force-prefers-reduced-motion \
  --virtual-time-budget=12000 --window-size=1600,1000 \
  --screenshot=public/projetos/NOME-desktop.png http://localhost:PORTA/
```

O `--force-prefers-reduced-motion` é o que impede a captura de sair em branco nos
projetos que escondem as seções até a rolagem.

## Decisões de design

| Item | Escolha | Por quê |
| --- | --- | --- |
| Paleta | papel `#f6f5f1`, tinta `#17150f`, accent `#c2410c` | Um accent só, herdado do mock, em todas as seções |
| Tipografia | Space Grotesk em título, DM Sans em texto | Duas famílias, hierarquia por peso e tamanho |
| Forma | pill em interativo, 18px em superfície, 12px dentro de superfície | Uma regra de canto documentada, sem exceção |
| Tema | claro fixo | A seção de projetos em fundo escuro é um corte de cor único, não alternância |
| Movimento | entrada por rolagem e escala no hover | `useReducedMotion` desliga tudo; nada em laço infinito |

Nenhuma seção usa rótulo em caixa alta acima do título, e nenhuma repete a família de
layout da anterior: herói dividido, faixa de indicadores, bento de seis células com
larguras alternadas, cases em fundo escuro, régua de quatro etapas e cartão de contato.

## Antes de publicar

- `perfil.whatsapp` e `perfil.linkedin` em `lib/content.ts` estão como `null`. Preencher ou
  deixar de fora.
- Os indicadores (`03`, `100%`, `AA`) descrevem o que existe hoje. Atualizar quando entrar
  projeto novo.
