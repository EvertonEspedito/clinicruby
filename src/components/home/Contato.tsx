export function Contato() {
  return (
    <section id="contato" className="bg-ivory-deep">
      <div id="agendar" className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:py-28">
        <div>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Vamos <span className="italic text-wine">conversar</span>
          </h2>
          <p className="mt-5 max-w-sm font-body text-[15px] leading-relaxed text-ink/65">
            Preencha o formulário ou fale diretamente com a nossa equipe.
            Retornamos o quanto antes.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            <a
              href="https://wa.me/message/OH4VG6OTEHI3N1"
              className="flex items-center gap-3 font-body text-[15px] text-ink/80 transition-colors hover:text-wine"
            >
              <span aria-hidden>💬</span> WhatsApp
            </a>
            <a
              href="https://instagram.com/clinicrubypnz"
              className="flex items-center gap-3 font-body text-[15px] text-ink/80 transition-colors hover:text-wine"
            >
              <span aria-hidden>◎</span> @clinicrubypnz
            </a>
            <p className="flex items-center gap-3 font-body text-[15px] text-ink/80">
              <span aria-hidden>⌂</span> Trade Center, 5º andar — Petrolina-PE
            </p>
          </div>
        </div>

        <form
          className="flex flex-col gap-5 rounded-[1.75rem] border border-gold/30 bg-ivory p-8"
          aria-label="Formulário de contato"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className="font-body text-xs uppercase tracking-[0.1em] text-ink/50">
                Nome
              </span>
              <input
                type="text"
                name="nome"
                required
                className="rounded-lg border border-gold/30 bg-transparent px-4 py-2.5 font-body text-sm text-ink outline-none focus-visible:border-wine"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-body text-xs uppercase tracking-[0.1em] text-ink/50">
                Telefone
              </span>
              <input
                type="tel"
                name="telefone"
                required
                className="rounded-lg border border-gold/30 bg-transparent px-4 py-2.5 font-body text-sm text-ink outline-none focus-visible:border-wine"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="font-body text-xs uppercase tracking-[0.1em] text-ink/50">
              Serviço de interesse
            </span>
            <select
              name="servico"
              className="rounded-lg border border-gold/30 bg-transparent px-4 py-2.5 font-body text-sm text-ink outline-none focus-visible:border-wine"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione um serviço
              </option>
              <option>Harmonização facial</option>
              <option>Preenchimento labial</option>
              <option>Limpeza de pele profunda</option>
              <option>Terapias de bem-estar</option>
              <option>Massagem modeladora</option>
              <option>Drenagem linfática</option>
              <option>Ainda não sei</option>
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="font-body text-xs uppercase tracking-[0.1em] text-ink/50">
              Mensagem
            </span>
            <textarea
              name="mensagem"
              rows={4}
              className="resize-none rounded-lg border border-gold/30 bg-transparent px-4 py-2.5 font-body text-sm text-ink outline-none focus-visible:border-wine"
            />
          </label>

          <button
            type="submit"
            className="mt-2 rounded-full bg-wine px-7 py-3.5 font-body text-[15px] font-medium text-ivory transition-colors hover:bg-wine-deep"
          >
            Enviar mensagem
          </button>

          <p className="font-body text-xs text-ink/40">
            Ao enviar, você concorda com o uso dos seus dados apenas para
            retorno da Clinic Ruby, conforme a LGPD.
          </p>
        </form>
      </div>
    </section>
  );
}
