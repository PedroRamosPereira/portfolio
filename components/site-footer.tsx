import { perfil } from "@/lib/content";

export function SiteFooter() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-8 text-[14px] text-ink-3 sm:px-8 lg:px-12">
        <span>
          © {ano} {perfil.nome} {perfil.sobrenome}
        </span>
        <div className="flex flex-wrap gap-6">
          <a href={`mailto:${perfil.email}`} className="transition-colors hover:text-ink">
            E-mail
          </a>
          <a
            href={perfil.github}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-ink"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
