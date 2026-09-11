export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-gold/20 bg-ivory/95 backdrop-blur lg:hidden">
      <a
        href="https://wa.me/message/OH4VG6OTEHI3N1"
        className="flex flex-1 flex-col items-center gap-0.5 py-3 font-body text-xs text-ink/70"
      >
        <span aria-hidden className="text-lg">💬</span>
        WhatsApp
      </a>
      <a
        href="#agendar"
        className="flex flex-1 flex-col items-center gap-0.5 border-x border-gold/20 bg-wine py-3 font-body text-xs font-medium text-ivory"
      >
        <span aria-hidden className="text-lg">📅</span>
        Agendar
      </a>
      <a
        href="#topo"
        className="flex flex-1 flex-col items-center gap-0.5 py-3 font-body text-xs text-ink/70"
      >
        <span aria-hidden className="text-lg">☰</span>
        Menu
      </a>
    </div>
  );
}
