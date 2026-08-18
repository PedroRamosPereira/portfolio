# Portfólio · Pedro Ramos Pereira

Landing page de portfólio para venda de landing pages. Construída a partir do mock
em `design/Portfolio Landing.dc.html`, com os três projetos reais do GitHub como cases.

## Stack

- Next.js 16 (App Router, Server Components por padrão) + TypeScript
- Tailwind CSS v4, tokens em `app/globals.css`
- Sem biblioteca de animação: a entrada por rolagem é CSS puro (`animation-timeline: view()`),
  em `components/reveal.tsx` e no `@keyframes revelar` de `app/globals.css`
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

`public/projetos/` guarda capturas reais de cada projeto em WebP, tiradas do site publicado
na Vercel, em 1600x1000 (desktop) e 430x932 (celular). Clicar na captura abre o site.

| Projeto | Repositório | No ar |
| --- | --- | --- |
| Clínica Vismara (estética) | `PedroRamosPereira/landing-page-estetica` | https://landing-page-estetica-gray.vercel.app |
| Nogueira & Sampaio (advocacia) | `PedroRamosPereira/nogueira-sampaio-advocacia` | https://nogueira-sampaio-advocacia.vercel.app |

Para atualizar uma captura:

```bash
google-chrome --headless=new --hide-scrollbars --force-prefers-reduced-motion \
  --virtual-time-budget=20000 --window-size=1600,1000 \
  --screenshot=/tmp/NOME.png https://ENDERECO-DO-SITE/
convert /tmp/NOME.png -quality 82 public/projetos/NOME-desktop.webp
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
| Movimento | entrada por rolagem e escala no hover | Estado padrão é visível; a animação vive dentro de `prefers-reduced-motion: no-preference` |

## Celular

- Abaixo de 640px, herói e cases trocam a captura de tela larga pela captura de celular
  (`components/device-frames.tsx`). A captura desktop reduzida a 290px é ilegível, e nesses
  cards a captura é o conteúdo, não enfeite.
- `viewportFit: "cover"` no `app/layout.tsx` com `env(safe-area-inset-*)` no `body`, para
  aparelho com entalhe.
- Alvo de toque mínimo de 44px em botão, item de menu e link de rodapé.
- `overflow-x: hidden` no `body` como rede de segurança contra rolagem lateral.
- Testado em 320, 390, 768 e 1024px.

Nenhuma seção usa rótulo em caixa alta acima do título, e nenhuma repete a família de
layout da anterior: herói dividido, faixa de indicadores, bento de seis células com
larguras alternadas, cases em fundo escuro, régua de quatro etapas e cartão de contato.

## Antes de publicar

- `perfil.whatsapp` e `perfil.linkedin` em `lib/content.ts` estão como `null`. Preencher ou
  deixar de fora.
- Os indicadores (`03`, `100%`, `AA`) descrevem o que existe hoje. Atualizar quando entrar
  projeto novo.
