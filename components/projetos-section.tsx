import Image from "next/image";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { projetos, type Projeto } from "@/lib/content";
import { Reveal } from "./reveal";

function Moldura({ p, prioridade = false }: { p: Projeto; prioridade?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-night-line bg-night-2">
      <div className="flex items-center gap-2 border-b border-night-line bg-paper/5 px-3.5 py-2.5">
        <span className="block size-2 rounded-full bg-paper/20" aria-hidden />
        <span className="block size-2 rounded-full bg-paper/20" aria-hidden />
        <span className="block size-2 rounded-full bg-paper/20" aria-hidden />
        <span className="ml-2 flex h-5 flex-1 items-center rounded-full bg-paper/5 px-3 font-mono text-[11px] text-paper/40">
          {p.url}
        </span>
      </div>
      <Image
        src={p.imagem}
        alt={`Topo da landing page ${p.nome}, do segmento de ${p.segmento.toLowerCase()}.`}
        width={p.largura}
        height={p.altura}
        priority={prioridade}
        sizes="(max-width: 1024px) 100vw, 700px"
        className="h-auto w-full"
      />
    </div>
  );
}

function Texto({ p, grande = false }: { p: Projeto; grande?: boolean }) {
  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3
          className={`font-display font-semibold tracking-[-0.025em] ${
            grande ? "text-[26px] lg:text-[34px]" : "text-[21px]"
          }`}
        >
          {p.nome}
        </h3>
        <span className="text-[14px] text-paper/45">{p.segmento}</span>
      </div>
      <p
        className={`mt-3 max-w-[56ch] leading-relaxed text-night-text ${
          grande ? "text-[16px] lg:text-[17px]" : "text-[15px]"
        }`}
      >
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
      <a
        href={p.repo}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-night-line px-5 py-2.5 text-[15px] font-medium text-paper transition-colors duration-200 hover:bg-paper/10"
      >
        <GithubLogo size={17} weight="bold" />
        Ver código
      </a>
    </div>
  );
}

export function ProjetosSection() {
  const [principal, ...restantes] = projetos;

  return (
    /* Corte de cor deliberado: uma única seção escura, o resto da página é claro. */
    <section id="projetos" className="bg-night text-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <h2 className="max-w-[22ch] font-display text-[clamp(1.75rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">
            Três páginas, três formas de resolver
          </h2>
        </Reveal>

        <Reveal className="mt-10 lg:mt-16">
          <article className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <Moldura p={principal} prioridade />
            <Texto p={principal} grande />
          </article>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-10">
          {restantes.map((p, i) => (
            <Reveal key={p.nome} delay={i * 0.08}>
              <article className="flex h-full flex-col gap-6">
                <Moldura p={p} />
                <Texto p={p} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
