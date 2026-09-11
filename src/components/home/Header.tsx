import { Monogram } from "@/components/ui/Monogram";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#topo" className="flex items-center gap-3">
          <Monogram tone="wine-on-ivory" className="h-10 w-10" />
          <span className="font-display text-xl tracking-wide text-ink">
            Clinic Ruby <span className="italic text-wine">PNZ</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[15px] text-ink/70 transition-colors hover:text-wine"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#agendar"
          className="hidden rounded-full bg-wine px-5 py-2.5 font-body text-sm font-medium text-ivory transition-colors hover:bg-wine-deep lg:inline-block"
        >
          Agendar atendimento
        </a>

        <a
          href="https://wa.me/message/OH4VG6OTEHI3N1"
          className="rounded-full border border-wine px-4 py-2 font-body text-sm font-medium text-wine lg:hidden"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
