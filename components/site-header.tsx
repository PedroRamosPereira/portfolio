"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { perfil } from "@/lib/content";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-6 px-4 sm:px-8 lg:h-[72px] lg:px-12">
        <a href="#topo" className="flex flex-none items-center gap-2.5">
          <span className="block size-6 rounded-[8px] bg-accent" aria-hidden />
          <span className="font-display text-[15px] font-bold tracking-[-0.02em] lg:text-[17px]">
            {perfil.nome}
            <span className="text-ink-3"> {perfil.sobrenome}</span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-7 text-[15px] text-ink-2 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="ml-auto hidden flex-none rounded-full bg-ink px-5 py-2.5 text-[15px] font-medium whitespace-nowrap text-paper transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98] lg:ml-0 lg:block"
        >
          Orçamento
        </a>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-movel"
          className="ml-auto flex size-11 flex-none items-center justify-center rounded-full border border-line text-ink lg:hidden"
        >
          {aberto ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
        </button>
      </div>

      {aberto && (
        <nav
          id="menu-movel"
          className="border-t border-line bg-paper px-4 pb-5 pt-3 sm:px-8 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setAberto(false)}
                  className="flex min-h-12 items-center text-[17px] text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={() => setAberto(false)}
            className="mt-2 block rounded-full bg-ink px-5 py-3.5 text-center text-[16px] font-medium text-paper"
          >
            Orçamento
          </a>
        </nav>
      )}
    </header>
  );
}
