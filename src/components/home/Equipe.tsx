export function Equipe() {
  return (
    <section id="equipe" className="bg-wine-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16 lg:px-10 lg:py-20">
        <div>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">
            Uma equipe, <span className="italic text-gold-light">um propósito</span>
          </h2>
          <p className="mt-5 font-body text-[15px] leading-relaxed text-ivory/65">
            Por trás de cada atendimento da Clinic Ruby está uma equipe
            unida por um mesmo compromisso: cuidar de cada cliente com
            atenção, técnica e respeito.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <div className="col-span-2 row-span-2 aspect-square rounded-2xl border border-gold/25 bg-ivory/10" />
          <div className="aspect-square rounded-2xl border border-gold/25 bg-ivory/10" />
          <div className="aspect-square rounded-2xl border border-gold/25 bg-ivory/10" />
        </div>
      </div>
    </section>
  );
}
