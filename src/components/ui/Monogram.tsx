type MonogramProps = {
  className?: string;
  tone?: "gold-on-wine" | "wine-on-ivory";
};

/**
 * Monograma CR inspirado no logotipo da Clinic Ruby: um C e um R
 * entrelaçados dentro de um anel duplo.
 */
export function Monogram({ className, tone = "gold-on-wine" }: MonogramProps) {
  const ring = tone === "gold-on-wine" ? "var(--color-gold)" : "var(--color-wine)";
  const fill = tone === "gold-on-wine" ? "var(--color-wine)" : "var(--color-ivory)";
  const letter = tone === "gold-on-wine" ? "var(--color-gold-light)" : "var(--color-wine)";

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Monograma Clinic Ruby"
    >
      <circle cx="60" cy="60" r="58" fill={fill} stroke={ring} strokeWidth="1.5" />
      <circle cx="60" cy="60" r="50" fill="none" stroke={ring} strokeWidth="1" />
      <text
        x="60"
        y="70"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontStyle="italic"
        fontWeight="500"
        fontSize="44"
        fill={letter}
      >
        CR
      </text>
    </svg>
  );
}
