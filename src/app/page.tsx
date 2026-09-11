import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Sobre } from "@/components/home/Sobre";
import { Servicos } from "@/components/home/Servicos";
import { Profissionais } from "@/components/home/Profissionais";
import { Localizacao } from "@/components/home/Localizacao";
import { Footer } from "@/components/home/Footer";
import { MobileActionBar } from "@/components/home/MobileActionBar";
import { RubyAssistenteButton } from "@/components/home/RubyAssistenteButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <Sobre />
        <Servicos />
        <Profissionais />
        <Localizacao />
      </main>
      <Footer />
      <RubyAssistenteButton />
      <MobileActionBar />
    </>
  );
}
