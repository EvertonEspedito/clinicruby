export function Localizacao() {
  return (
    <section id="localizacao" className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="aspect-[4/3] w-full rounded-[2rem] border border-gold/30 bg-blush" />

        <div>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Onde <span className="italic text-wine">estamos</span>
          </h2>
          <p className="mt-5 font-body text-[17px] leading-relaxed text-ink/70">
            Trade Center, 5º andar
            <br />
            Petrolina — PE
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Trade+Center+Petrolina+PE"
              className="rounded-full bg-wine px-6 py-3 font-body text-sm font-medium text-ivory transition-colors hover:bg-wine-deep"
            >
              Ver rota
            </a>
            <a
              href="https://wa.me/message/OH4VG6OTEHI3N1"
              className="rounded-full border border-gold px-6 py-3 font-body text-sm font-medium text-wine transition-colors hover:bg-blush"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
