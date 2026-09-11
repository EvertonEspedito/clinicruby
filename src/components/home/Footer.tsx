import { Monogram } from "@/components/ui/Monogram";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center gap-3">
          <Monogram className="h-9 w-9" />
          <span className="font-display text-lg italic text-ivory">
            Clinic Ruby PNZ
          </span>
        </div>

        <p className="font-body text-xs text-ivory/40">
          © {new Date().getFullYear()} Clinic Ruby PNZ. Todos os direitos
          reservados. Política de privacidade em conformidade com a LGPD.
        </p>
      </div>
    </footer>
  );
}
