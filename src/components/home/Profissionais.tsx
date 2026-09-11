type Profissional = {
  nome: string;
  especialidade: string;
};

const EQUIPE: Profissional[] = [
  { nome: "Dra. Camila Rocha", especialidade: "Medicina estética" },
  { nome: "Dra. Beatriz Lins", especialidade: "Dermatologia" },
  { nome: "Renata Farias", especialidade: "Terapias de bem-estar" },
];

export function Profissionais() {
  return (
    <section id="profissionais" className="bg-wine-deep">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <h2 className="font-display text-4xl text-ivory sm:text-5xl">
          Nossa <span className="italic text-gold-light">equipe</span>
        </h2>
        <p className="mt-4 max-w-md font-body text-[15px] text-ivory/60">
          Profissionais qualificados, escolhidos pela técnica e pelo cuidado
          com cada cliente.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {EQUIPE.map((pessoa) => (
            <div key={pessoa.nome} className="flex flex-col items-center text-center">
              <div className="h-28 w-28 rounded-full border border-gold/40 bg-ivory/10" />
              <p className="mt-5 font-display text-xl text-ivory">
                {pessoa.nome}
              </p>
              <p className="mt-1 font-body text-sm text-gold-light">
                {pessoa.especialidade}
              </p>
              <a
                href="#contato"
                className="mt-3 font-body text-xs uppercase tracking-[0.12em] text-ivory/50 transition-colors hover:text-ivory"
              >
                Conhecer profissional
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
