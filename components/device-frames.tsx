import Image from "next/image";

type Tema = "claro" | "escuro";

const cores = {
  claro: {
    moldura: "border-line-soft bg-surface",
    barra: "border-line-soft bg-paper-deep",
    ponto: "bg-ink/15",
    pill: "bg-ink/5 text-ink-3",
  },
  escuro: {
    moldura: "border-night-line bg-night-2",
    barra: "border-night-line bg-paper/5",
    ponto: "bg-paper/20",
    pill: "bg-paper/5 text-paper/40",
  },
} as const;

type Props = {
  src: string;
  alt: string;
  largura: number;
  altura: number;
  url?: string;
  tema?: Tema;
  prioridade?: boolean;
  sizes?: string;
};

/** Captura em tela larga, dentro de uma moldura de navegador. */
export function BrowserFrame({
  src,
  alt,
  largura,
  altura,
  url,
  tema = "claro",
  prioridade = false,
  sizes = "(max-width: 1024px) 100vw, 700px",
}: Props) {
  const c = cores[tema];

  return (
    <div className={`overflow-hidden rounded-[12px] border ${c.moldura}`}>
      <div className={`flex items-center gap-2 border-b px-3.5 py-2.5 ${c.barra}`}>
        <span className={`block size-2 rounded-full ${c.ponto}`} aria-hidden />
        <span className={`block size-2 rounded-full ${c.ponto}`} aria-hidden />
        <span className={`block size-2 rounded-full ${c.ponto}`} aria-hidden />
        {url && (
          <span
            className={`ml-2 flex h-5 min-w-0 flex-1 items-center truncate rounded-full px-3 font-mono text-[11px] ${c.pill}`}
          >
            {url}
          </span>
        )}
      </div>
      <Image
        src={src}
        alt={alt}
        width={largura}
        height={altura}
        priority={prioridade}
        sizes={sizes}
        className="h-auto w-full"
      />
    </div>
  );
}

/**
 * Captura de celular, em moldura de aparelho.
 * Usada abaixo de 640px, onde a captura de tela larga fica ilegível.
 */
export function PhoneFrame({
  src,
  alt,
  tema = "claro",
  prioridade = false,
}: Omit<Props, "largura" | "altura" | "url" | "sizes">) {
  const c = cores[tema];

  return (
    <div
      className={`mx-auto w-full max-w-[220px] overflow-hidden rounded-[22px] border p-1.5 ${c.moldura}`}
    >
      <div className="overflow-hidden rounded-[16px]">
        <Image
          src={src}
          alt={alt}
          width={430}
          height={932}
          priority={prioridade}
          sizes="220px"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
