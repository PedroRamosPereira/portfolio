import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { contato, perfil } from "@/lib/content";
import { Reveal } from "./reveal";

const assunto = encodeURIComponent("Orçamento de landing page");

export function ContatoSection() {
  return (
    <section id="contato" className="px-4 pb-20 sm:px-8 lg:px-12 lg:pb-28">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-10 rounded-[18px] border border-line-soft bg-surface p-8 shadow-[0_20px_50px_rgba(23,21,15,0.09)] sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-16">
          <div className="min-w-0">
            <h2 className="font-display text-[clamp(1.75rem,3.4vw,3.25rem)] font-bold leading-[1.03] tracking-[-0.035em] text-balance">
              {contato.titulo}
            </h2>
            <p className="mt-4 max-w-[44ch] text-[16px] leading-relaxed text-ink-2 lg:text-[18px]">
              {contato.texto}
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <a
              href={`mailto:${perfil.email}?subject=${assunto}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-[16px] font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <EnvelopeSimple size={19} weight="bold" />
              Orçamento
            </a>
            <a
              href={perfil.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-4 text-[16px] font-medium text-ink transition-colors duration-200 hover:bg-ink/5"
            >
              <GithubLogo size={19} weight="bold" />
              Perfil no GitHub
            </a>
            <span className="text-center font-mono text-[12px] text-ink-3">{perfil.email}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
