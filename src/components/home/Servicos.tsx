type Servico = {
  nome: string;
  categoria: string;
  descricao: string;
  beneficios: string[];
  duracao?: string;
};

const SERVICOS: Servico[] = [
  {
    nome: "Harmonização facial",
    categoria: "Estética avançada",
    descricao:
      "Procedimentos personalizados para realçar traços naturais, com avaliação individual e acompanhamento próximo em cada etapa.",
    beneficios: ["Avaliação individual", "Resultado natural", "Acompanhamento pós-procedimento"],
    duracao: "a partir de 40 min",
  },
  {
    nome: "Preenchimento labial",
    categoria: "Estética avançada",
    descricao:
      "Técnica para equilíbrio e volume labial, respeitando a proporção do rosto e o desejo de cada cliente.",
    beneficios: ["Técnica minimamente invasiva", "Avaliação prévia detalhada"],
    duracao: "a partir de 30 min",
  },
  {
    nome: "Limpeza de pele profunda",
    categoria: "Estética facial",
    descricao:
      "Higienização, esfoliação e hidratação da pele, indicada para manutenção da saúde e viço da pele do rosto.",
    beneficios: ["Renovação da pele", "Indicado para todos os tipos de pele"],
    duracao: "a partir de 50 min",
  },
  {
    nome: "Terapias de bem-estar",
    categoria: "Saúde integrativa",
    descricao:
      "Protocolos voltados a equilíbrio físico e emocional, conduzidos por profissionais qualificados em ambiente reservado.",
    beneficios: ["Foco em qualidade de vida", "Ambiente privativo"],
  },
  {
    nome: "Massagem modeladora",
    categoria: "Estética corporal",
    descricao:
      "Sessões voltadas ao contorno corporal e relaxamento, com protocolo definido conforme objetivo de cada cliente.",
    beneficios: ["Protocolo personalizado", "Sessões de manutenção disponíveis"],
    duracao: "a partir de 50 min",
  },
  {
    nome: "Drenagem linfática",
    categoria: "Estética corporal",
    descricao:
      "Técnica indicada para redução de inchaço e sensação de leveza, com abordagem suave e individualizada.",
    beneficios: ["Indicada para pós-procedimentos", "Sensação imediata de leveza"],
    duracao: "a partir de 50 min",
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
          Uma seleção dos cuidados oferecidos pela Clinic Ruby. Valores e
          disponibilidade são confirmados diretamente com a nossa equipe.
        </p>
      </div>

      <div className="mt-14 divide-y divide-gold/20 border-y border-gold/20">
        {SERVICOS.map((servico, index) => (
          <div
            key={servico.nome}
            className="grid gap-4 py-9 sm:grid-cols-[auto_1fr] sm:gap-10"
          >
            <span className="font-display text-3xl italic text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr] sm:items-start sm:gap-10">
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
                {servico.duracao && (
                  <p className="mt-3 font-body text-xs text-ink/45">
                    Duração {servico.duracao}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-4 sm:items-end">
                <ul className="flex flex-col gap-1.5 sm:items-end">
                  {servico.beneficios.map((b) => (
                    <li
                      key={b}
                      className="font-body text-sm text-ink/55 sm:text-right"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="font-body text-sm font-medium text-wine underline decoration-gold/50 underline-offset-4 transition-colors hover:text-wine-deep"
                >
                  Tenho interesse
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
