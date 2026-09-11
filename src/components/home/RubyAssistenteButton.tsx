import { Monogram } from "@/components/ui/Monogram";

/**
 * Botão flutuante do agente de IA (Ruby Assistente).
 * Fase 1: apenas a presença visual no design system;
 * a lógica de conversa entra na Fase 5 (Agente de IA).
 */
export function RubyAssistenteButton() {
  return (
    <button
      type="button"
      aria-label="Abrir Ruby Assistente"
      className="fixed bottom-20 right-5 z-40 flex items-center gap-3 rounded-full bg-wine py-2 pl-2 pr-4 shadow-lg shadow-wine/30 transition-transform hover:scale-[1.03] lg:bottom-6 lg:right-6"
    >
      <Monogram className="h-10 w-10" />
      <span className="font-body text-sm font-medium text-ivory">
        Ruby Assistente
      </span>
    </button>
  );
}
