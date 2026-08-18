import { indicadores } from "@/lib/content";
import { Reveal } from "./reveal";

export function IndicadoresBand() {
  return (
    <section className="border-y border-line bg-paper-deep">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-10 sm:grid-cols-3 sm:px-8 lg:gap-16 lg:px-12 lg:py-12">
        {indicadores.map((i, idx) => (
          <Reveal key={i.rotulo} delay={idx * 6}>
            <div className="flex items-baseline gap-3 sm:block">
              <div className="font-display text-[32px] font-semibold leading-none tracking-[-0.03em] lg:text-[40px]">
                {i.valor}
              </div>
              <div className="text-[14px] text-ink-2 sm:mt-2 lg:text-[15px]">{i.rotulo}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
