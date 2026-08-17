import {
  SquaresFour,
  PencilSimple,
  Lightning,
  DeviceMobile,
  MagnifyingGlass,
  Eye,
} from "@phosphor-icons/react/dist/ssr";
import { servicos, type Servico } from "@/lib/content";
import { Reveal } from "./reveal";

const icones = {
  layout: SquaresFour,
  pen: PencilSimple,
  zap: Lightning,
  phone: DeviceMobile,
  search: MagnifyingGlass,
  chart: Eye,
} as const;

/** Células 1, 4 e 6 ocupam duas colunas: 9 unidades em 3 colunas, sem célula vazia. */
const largas = new Set([0, 3, 5]);

/** Fundos variados para a grade não virar seis cartões brancos iguais. */
const fundos: Record<number, string> = {
  0: "bg-[linear-gradient(135deg,rgba(194,65,12,0.09),rgba(194,65,12,0.02)_55%,transparent)]",
  3: "bg-paper-deep",
  5: "bg-[repeating-linear-gradient(135deg,rgba(23,21,15,0.035)_0_10px,transparent_10px_20px)]",
};

function Card({ s, i }: { s: Servico; i: number }) {
  const Icone = icones[s.icone];
  return (
    <Reveal
      delay={(i % 3) * 0.06}
      className={largas.has(i) ? "lg:col-span-2" : undefined}
    >
      <article
        className={`h-full rounded-[18px] border border-line-soft p-6 shadow-[0_10px_24px_rgba(23,21,15,0.06)] transition-transform duration-200 hover:-translate-y-0.5 lg:p-8 ${
          fundos[i] ?? "bg-surface"
        }`}
      >
        <span className="flex size-11 items-center justify-center rounded-[12px] bg-ink/5 text-accent">
          <Icone size={22} weight="regular" />
        </span>
        <h3 className="mt-5 font-display text-[19px] font-semibold tracking-[-0.02em] lg:text-[21px]">
          {s.titulo}
        </h3>
        <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-ink-2">{s.texto}</p>
        <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
          {s.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-ink/5 px-2.5 py-1 font-mono text-[11px] text-ink-3"
            >
              {t}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export function ServicosSection() {
  return (
    <section id="servicos" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
      <Reveal>
        <h2 className="max-w-[20ch] font-display text-[clamp(1.75rem,3.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">
          O que entra em cada projeto
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-6">
        {servicos.map((s, i) => (
          <Card key={s.titulo} s={s} i={i} />
        ))}
      </div>
    </section>
  );
}
