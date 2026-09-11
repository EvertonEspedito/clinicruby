# Clinic Ruby PNZ — Fase 1 (Design system + Homepage)

## Como rodar localmente
1. `npm install`
2. `npm run dev`
3. Abrir http://localhost:3000

## O que foi entregue nesta fase
- Projeto Next.js 16 + TypeScript + Tailwind CSS v4 (App Router)
- Design system em `src/app/globals.css` (paleta de cores, tipografia)
  - Cores: ivory (marfim), wine (bordô), gold (dourado/champagne), ink (preto quente)
  - Tipografia: Cormorant (display/serifada, itálico para destaques) + Manrope (corpo)
  - Fontes self-hospedadas via `@fontsource` (sem dependência de fonts.googleapis.com)
- Componente de marca: monograma "CR" em SVG (`src/components/ui/Monogram.tsx`)
- Homepage completa (`src/app/page.tsx`) com as seções do briefing:
  Header/nav, Hero, Sobre, Serviços (preview), Profissionais/Equipe (preview),
  Localização, Footer/Contato
- Botão flutuante "Ruby Assistente" (placeholder visual — lógica de conversa
  entra na Fase 5) e barra de ações fixa no mobile (WhatsApp / Agendar / Menu)
- Responsivo mobile-first, foco visível, `prefers-reduced-motion` respeitado

## Estrutura
```
src/
  app/
    layout.tsx      → fontes + metadata
    globals.css      → design tokens (cores, tipografia)
    page.tsx         → composição da homepage
  components/
    ui/Monogram.tsx  → logo/monograma CR reutilizável
    home/            → seções da homepage (Header, Hero, Sobre, Servicos,
                        Profissionais, Localizacao, Footer, MobileActionBar,
                        RubyAssistenteButton)
```

## Próximas fases (conforme o plano do projeto)
- Fase 2: páginas completas de Serviços, Profissionais, Sobre e Contato
- Fase 3: backend + banco de dados (PostgreSQL)
- Fase 4: painel administrativo
- Fase 5: agente de IA (Ruby Assistente) funcional
- Fase 6+: WhatsApp, leads, agendamento, analytics, segurança
