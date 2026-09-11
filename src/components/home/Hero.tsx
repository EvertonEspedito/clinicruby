import { Monogram } from "@/components/ui/Monogram";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-10 lg:pb-28 lg:pt-20">
        {/* Coluna de texto */}
        <div className="flex flex-col justify-center">
          <p className="font-display text-lg italic text-wine">
            Trade Center, 5º andar · Petrolina-PE
          </p>

          <h1 className="mt-4 font-display text-5xl leading-[1.08] text-ink sm:text-6xl lg:text-[4.2rem]">
            Um novo padrão
            <br />
            em saúde, beleza
            <br />
            <span className="italic text-wine">e bem-estar.</span>
          </h1>

          <p className="mt-7 max-w-md font-body text-lg leading-relaxed text-ink/70">
            A Clinic Ruby PNZ reúne cuidado clínico, estética e bem-estar em
            um mesmo espaço, pensado para quem busca resultados reais com
            elegância, atenção e discrição.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#agendar"
              className="rounded-full bg-wine px-7 py-3.5 font-body text-[15px] font-medium text-ivory shadow-sm shadow-wine/20 transition-colors hover:bg-wine-deep"
            >
              Agendar atendimento
            </a>
            <a
              href="https://wa.me/message/OH4VG6OTEHI3N1"
              className="rounded-full border border-gold px-7 py-3.5 font-body text-[15px] font-medium text-wine transition-colors hover:bg-blush"
            >
              Falar com a Clinic Ruby
            </a>
          </div>

          <a
            href="#sobre"
            className="mt-10 inline-flex items-center gap-2 font-body text-sm text-ink/50 transition-colors hover:text-wine"
          >
            Conheça a clínica
            <span aria-hidden>↓</span>
          </a>
        </div>

        {/* Coluna visual */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[26rem] w-[26rem] rounded-full bg-blush/60 blur-2xl" />

          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-gold/40 bg-wine">
            <div className="flex h-full flex-col items-center justify-center gap-6 p-10 text-center">
              <Monogram className="h-28 w-28" />
              <p className="font-display text-2xl italic text-gold-light">
                “Agende sua experiência”
              </p>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-ivory/60">
                @clinicrubypnz
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gold/30 bg-ivory px-6 py-4 shadow-lg shadow-black/5 sm:block">
            <p className="font-display text-2xl text-wine">24h</p>
            <p className="font-body text-xs text-ink/60">
              atendimento virtual disponível
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
