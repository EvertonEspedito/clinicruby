const DIFERENCIAIS = [
  "Equipe multidisciplinar em saúde, beleza e bem-estar",
  "Ambiente privativo, pensado para conforto e discrição",
  "Atendimento acompanhado do início ao pós-procedimento",
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-ivory-deep">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10 lg:py-28">
        <div className="relative">
          <div className="aspect-[3/4] w-full rounded-[2rem] border border-gold/30 bg-blush" />
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-gold/50 sm:-right-8 sm:-top-8 sm:h-32 sm:w-32" />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Sobre a <span className="italic text-wine">Clinic Ruby</span>
          </h2>

          <p className="mt-6 max-w-xl font-body text-[17px] leading-relaxed text-ink/70">
            A Clinic Ruby PNZ nasceu do desejo de oferecer, em Petrolina, uma
            experiência de cuidado que une técnica e sensibilidade. Cada
            detalhe do espaço — do acolhimento à escolha da equipe — foi
            pensado para que cada cliente se sinta ouvido, respeitado e bem
            cuidado, do primeiro contato ao resultado final.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {DIFERENCIAIS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="font-body text-[15px] text-ink/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
