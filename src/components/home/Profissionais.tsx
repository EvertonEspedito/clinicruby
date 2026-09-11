type Profissional = {
  nome: string;
  especialidade: string;
  registro?: string;
  bio: string;
  servicos: string[];
};

const PROFISSIONAIS: Profissional[] = [
  {
    nome: "Dra. Camila Rocha",
    especialidade: "Medicina estética",
    registro: "CRM-PE 00000",
    bio: "Atua com harmonização facial e procedimentos minimamente invasivos, com foco em resultados naturais e avaliação individual de cada caso.",
    servicos: ["Harmonização facial", "Preenchimento labial"],
  },
  {
    nome: "Dra. Beatriz Lins",
    especialidade: "Dermatologia",
    registro: "CRM-PE 00000",
    bio: "Especialista em saúde e estética da pele, conduz avaliações completas antes de qualquer indicação de procedimento.",
    servicos: ["Limpeza de pele profunda"],
  },
  {
    nome: "Renata Farias",
    especialidade: "Terapias de bem-estar",
    bio: "Conduz protocolos corporais e de relaxamento personalizados, sempre alinhados ao objetivo de cada cliente.",
    servicos: ["Massagem modeladora", "Drenagem linfática"],
  },
];

export function Profissionais() {
  return (
    <section id="profissionais" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <h2 className="font-display text-4xl text-ink sm:text-5xl">
        Nossos <span className="italic text-wine">profissionais</span>
      </h2>
      <p className="mt-4 max-w-md font-body text-[15px] text-ink/60">
        Profissionais qualificados, escolhidos pela técnica e pelo cuidado
        com cada cliente.
      </p>

      <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {PROFISSIONAIS.map((pessoa) => (
          <div key={pessoa.nome} className="flex flex-col">
            <div className="aspect-[4/5] w-full rounded-[1.75rem] border border-gold/30 bg-blush" />

            <p className="mt-5 font-display text-2xl text-ink">
              {pessoa.nome}
            </p>
            <p className="mt-0.5 font-body text-sm text-wine">
              {pessoa.especialidade}
            </p>
            {pessoa.registro && (
              <p className="mt-0.5 font-body text-xs text-ink/40">
                {pessoa.registro}
              </p>
            )}

            <p className="mt-3 font-body text-sm leading-relaxed text-ink/65">
              {pessoa.bio}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {pessoa.servicos.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-gold/40 px-3 py-1 font-body text-xs text-wine/80"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-5">
              <a
                href="#contato"
                className="font-body text-sm font-medium text-wine underline decoration-gold/50 underline-offset-4 transition-colors hover:text-wine-deep"
              >
                Conhecer profissional
              </a>
              <a
                href="#contato"
                className="font-body text-sm text-ink/50 transition-colors hover:text-wine"
              >
                Tenho interesse
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
