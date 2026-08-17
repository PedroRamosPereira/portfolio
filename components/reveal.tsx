"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** atraso em segundos, para escalonar itens de uma mesma grade */
  delay?: number;
  className?: string;
};

/**
 * Entrada por rolagem. Serve à hierarquia: a seção chega depois do título,
 * na ordem de leitura. Quem pede menos movimento recebe a página pronta.
 */
export function Reveal({ children, delay = 0, className }: Props) {
  const reduzido = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduzido ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
