import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { projetos, type Projeto } from "@/lib/content";
import { BrowserFrame, PhoneFrame } from "./device-frames";
import { Reveal } from "./reveal";

/** A captura inteira é o link para o site publicado. */
function Preview({ p }: { p: Projeto }) {
  const alt = `Topo da landing page ${p.nome}, do segmento de ${p.segmento.toLowerCase()}.`;

  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Abrir o site ${p.nome} em uma nova aba`}
      className="group block min-w-0 transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Abaixo de 640px a captura de tela larga fica ilegível: entra a de celular. */}
      <div className="sm:hidden">
        <PhoneFrame src={p.imagemMobile} alt={alt} tema="escuro" />
      </div>
      <div className="hidden sm:block">
        <BrowserFrame
          src={p.imagem}
          alt={alt}
          largura={p.largura}
          altura={p.altura}
          url={p.url}
          tema="escuro"
        />
      </div>
    </a>
  );
}

function Texto({ p }: { p: Projeto }) {
  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-display text-[26px] font-semibold tracking-[-0.025em] lg:text-[34px]">
          {p.nome}
        </h3>
        <span className="text-[14px] text-paper/45">{p.segmento}</span>
      </div>

      <p className="mt-3 max-w-[56ch] text-[16px] leading-relaxed text-night-text lg:text-[17px]">
        {p.resumo}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-night-line px-2.5 py-1 font-mono text-[11px] text-paper/50"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-[15px] font-medium text-ink transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
        >
          Abrir site
          <ArrowUpRight size={16} weight="bold" />
        </a>
        <a
          href={p.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-night-line px-5 py-2.5 text-[15px] font-medium text-paper transition-colors duration-200 hover:bg-paper/10"
        >
          <GithubLogo size={17} weight="bold" />
          Ver código
        </a>
      </div>
    </div>
  );
}

export function ProjetosSection() {
  return (
    /* Corte de cor deliberado: uma única seção escura, o resto da página é claro. */
    <section id="projetos" className="bg-night text-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <h2 className="max-w-[22ch] font-display text-[clamp(1.75rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">
            Dois sites no ar, duas formas de resolver
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-16 lg:mt-16 lg:gap-24">
          {projetos.map((p, i) => (
            <Reveal key={p.nome}>
              {/* O segundo case inverte os lados, para a página não virar duas fileiras iguais. */}
              <article className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
                <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                  <Preview p={p} />
                </div>
                <Texto p={p} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
