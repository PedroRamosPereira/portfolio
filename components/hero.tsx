import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { hero, projetos } from "@/lib/content";
import { PhoneFrame } from "./device-frames";

/** O primeiro case da lista é a vitrine do herói. */
const destaque = projetos[0];
const alt = `Topo da landing page ${destaque.nome}, do segmento de ${destaque.segmento.toLowerCase()}.`;

export function Hero() {
  return (
    <section
      id="topo"
      className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 pt-10 sm:gap-12 sm:px-8 sm:pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12 lg:pb-24 lg:pt-24"
    >
      <div className="min-w-0">
        <h1 className="font-display text-[clamp(2rem,7vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.03em] text-balance sm:tracking-[-0.035em]">
          {hero.titulo[0]}
          <br />
          <span className="text-accent">{hero.titulo[1]}</span>
          <br />
          {hero.titulo[2]}
        </h1>

        <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-ink-2 sm:mt-6 sm:text-[17px] lg:text-[19px]">
          {hero.texto}
        </p>

        <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
          <a
            href={hero.ctaPrimario.href}
            className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[16px] font-medium text-paper transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
          >
            {hero.ctaPrimario.label}
            <ArrowRight
              size={17}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href={hero.ctaSecundario.href}
            className="inline-flex min-h-12 items-center rounded-full border border-line px-7 py-3.5 text-[16px] font-medium text-ink transition-colors duration-200 hover:bg-ink/5"
          >
            {hero.ctaSecundario.label}
          </a>
        </div>
      </div>

      {/* A captura inteira leva ao site publicado. */}
      <a
        href={destaque.link}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Abrir o site ${destaque.nome} em uma nova aba`}
        className="block min-w-0 transition-transform duration-300 hover:-translate-y-1"
      >
        {/* Abaixo de 640px a captura de tela larga fica ilegível: entra a de celular. */}
        <div className="sm:hidden">
          <PhoneFrame src={destaque.imagemMobile} alt={alt} prioridade />
        </div>

        {/* Moldura de navegador com a captura real, e a versão de celular sobreposta.
            Só a partir de 640px, onde o texto ainda se lê. */}
        <div className="relative hidden pb-14 sm:block sm:pb-16 lg:pb-0">
          <div className="overflow-hidden rounded-[18px] border border-line-soft bg-surface shadow-[0_24px_60px_rgba(23,21,15,0.14),0_2px_6px_rgba(23,21,15,0.06)]">
            <div className="flex items-center gap-2 border-b border-line-soft bg-paper-deep px-4 py-3">
              <span className="block size-2.5 rounded-full bg-ink/15" aria-hidden />
              <span className="block size-2.5 rounded-full bg-ink/15" aria-hidden />
              <span className="block size-2.5 rounded-full bg-ink/15" aria-hidden />
              <span className="ml-2 flex h-[22px] min-w-0 flex-1 items-center truncate rounded-full bg-ink/5 px-3 font-mono text-[11px] text-ink-3">
                {destaque.url}
              </span>
            </div>
            <Image
              src={destaque.imagem}
              alt={alt}
              width={destaque.largura}
              height={destaque.altura}
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="h-auto w-full"
            />
          </div>

          <div className="absolute -bottom-2 right-0 w-[32%] max-w-[150px] overflow-hidden rounded-[12px] border border-line-soft bg-surface shadow-[0_18px_44px_rgba(23,21,15,0.18)] lg:-bottom-10 lg:-right-8">
            <div className="h-4 border-b border-line-soft bg-paper-deep" aria-hidden />
            <Image
              src={destaque.imagemMobile}
              alt="A mesma página em tela de celular, com a navegação recolhida."
              width={430}
              height={932}
              sizes="150px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </a>
    </section>
  );
}
