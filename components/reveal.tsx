import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** escalona itens de uma mesma grade, em porcentagem da faixa de rolagem */
  delay?: number;
  className?: string;
};

/**
 * Entrada por rolagem em CSS puro (animation-timeline: view()).
 *
 * O padrão do documento é conteúdo visível: quem pede menos movimento, quem usa
 * navegador sem suporte e qualquer crawler recebem a página inteira. Sem estado,
 * sem efeito colateral e sem diferença entre servidor e cliente, que era o que
 * causava erro de hidratação na versão com Motion.
 */
export function Reveal({ children, delay = 0, className }: Props) {
  const estilo = delay ? ({ "--atraso": `${delay}%` } as React.CSSProperties) : undefined;

  return (
    <div className={className ? `revelar ${className}` : "revelar"} style={estilo}>
      {children}
    </div>
  );
}
