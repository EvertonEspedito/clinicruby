import { Monogram } from "@/components/ui/Monogram";

export function Footer() {
  return (
    <footer id="contato" className="bg-ink text-ivory/80">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-[1fr_1fr_1fr]">
          <div>
            <Monogram className="h-12 w-12" />
            <p className="mt-4 font-display text-xl italic text-ivory">
              Clinic Ruby PNZ
            </p>
            <p className="mt-2 max-w-xs font-body text-sm text-ivory/50">
              Um novo padrão em saúde, beleza e bem-estar.
            </p>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-gold-light">
              Contato
            </p>
            <ul className="mt-4 flex flex-col gap-2 font-body text-sm">
              <li>
                <a href="https://wa.me/message/OH4VG6OTEHI3N1" className="hover:text-ivory">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com/clinicrubypnz" className="hover:text-ivory">
                  @clinicrubypnz
                </a>
              </li>
              <li>Trade Center, 5º andar — Petrolina-PE</li>
            </ul>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.14em] text-gold-light">
              Horários
            </p>
            <ul className="mt-4 flex flex-col gap-2 font-body text-sm text-ivory/70">
              <li>Segunda a sexta — a confirmar</li>
              <li>Sábado — a confirmar</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/10 pt-8 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Clinic Ruby PNZ. Todos os direitos reservados.</p>
          <p>Política de privacidade em conformidade com a LGPD.</p>
        </div>
      </div>
    </footer>
  );
}
