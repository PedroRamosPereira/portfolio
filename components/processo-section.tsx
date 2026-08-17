import { etapas } from "@/lib/content";
import { Reveal } from "./reveal";

export function ProcessoSection() {
  return (
    <section id="processo" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal>
        <h2 className="max-w-[16ch] font-display text-[clamp(1.75rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">
          Do briefing ao site no ar
        </h2>
      </Reveal>

      {/* Régua horizontal: uma linha contínua, cada etapa marcada por um traço. */}
      <ol className="mt-12 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
        {etapas.map((e, i) => (
          <Reveal key={e.titulo} delay={i * 0.07}>
            <li className="relative">
              <span
                className="absolute -top-[42px] left-0 block h-0.5 w-8 rounded bg-accent"
                aria-hidden
              />
              <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em]">
                {e.titulo}
              </h3>
              <p className="mt-2 max-w-[36ch] text-[15px] leading-relaxed text-ink-2">{e.texto}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
