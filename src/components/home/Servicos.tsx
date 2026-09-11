type Servico = {
  nome: string;
  categoria: string;
  descricao: string;
};

const SERVICOS: Servico[] = [
  {
    nome: "Harmonização facial",
    categoria: "Estética avançada",
    descricao:
      "Procedimentos personalizados para realçar traços naturais, com avaliação individual e acompanhamento próximo.",
  },
  {
    nome: "Terapias de bem-estar",
    categoria: "Saúde integrativa",
    descricao:
      "Protocolos voltados a equilíbrio e qualidade de vida, conduzidos por profissionais qualificados.",
  },
  {
    nome: "Cuidados corporais",
    categoria: "Estética corporal",
    descricao:
      "Tratamentos para autoestima e cuidado contínuo do corpo, em ambiente reservado e confortável.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-display text-4xl text-ink sm:text-5xl">
          Nossos <span className="italic text-wine">serviços</span>
        </h2>
        <p className="max-w-sm font-body text-[15px] text-ink/60">
          Uma seleção dos cuidados oferecidos pela Clinic Ruby. Fale com a
          nossa equipe para conhecer o catálogo completo.
        </p>
      </div>

      <div className="mt-14 divide-y divide-gold/20 border-y border-gold/20">
        {SERVICOS.map((servico, index) => (
          <div
            key={servico.nome}
            className="grid gap-4 py-8 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10"
          >
            <span className="font-display text-3xl italic text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <p className="font-body text-xs uppercase tracking-[0.14em] text-wine/70">
                {servico.categoria}
              </p>
              <h3 className="mt-1 font-display text-2xl text-ink">
                {servico.nome}
              </h3>
              <p className="mt-2 max-w-lg font-body text-[15px] leading-relaxed text-ink/65">
                {servico.descricao}
              </p>
            </div>

            <a
              href="#contato"
              className="font-body text-sm font-medium text-wine underline decoration-gold/50 underline-offset-4 transition-colors hover:text-wine-deep sm:justify-self-end"
            >
              Tenho interesse
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
