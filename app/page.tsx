import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { IndicadoresBand } from "@/components/indicadores-band";
import { ServicosSection } from "@/components/servicos-section";
import { ProjetosSection } from "@/components/projetos-section";
import { ProcessoSection } from "@/components/processo-section";
import { ContatoSection } from "@/components/contato-section";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <IndicadoresBand />
        <ServicosSection />
        <ProjetosSection />
        <ProcessoSection />
        <ContatoSection />
      </main>
      <SiteFooter />
    </>
  );
}
