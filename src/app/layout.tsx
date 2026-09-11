import type { Metadata } from "next";
import "@fontsource/cormorant/300.css";
import "@fontsource/cormorant/400.css";
import "@fontsource/cormorant/500.css";
import "@fontsource/cormorant/600.css";
import "@fontsource/cormorant/400-italic.css";
import "@fontsource/cormorant/500-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clinic Ruby PNZ | Um novo padrão em saúde, beleza e bem-estar",
  description:
    "Clinic Ruby PNZ — clínica de saúde, beleza e bem-estar em Petrolina-PE. Trade Center, 5º andar. Agende sua experiência.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
