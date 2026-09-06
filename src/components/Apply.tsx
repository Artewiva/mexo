import { type ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

export function Apply() {
  const head = useReveal<HTMLDivElement>();
  const box = useReveal<HTMLDivElement>();

  return (
    <section id="candidati" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-12">
        <div ref={head} className="reveal lg:col-span-5">
          <p className="font-heading text-xs tracking-[0.5em] text-orange uppercase">
            04 · Partecipa alla Call
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-cream sm:text-6xl">
            INVIA LA TUA
            <br />
            CANDIDATURA
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/70">
            Raccontaci chi sei, cosa fai e quale linguaggio vuoi portare. Non
            cerchiamo semplicemente nuovi componenti. Cerchiamo i nuovi pezzi
            del Mosaico.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-cream/60">
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rotate-45 bg-orange" />
              Qualsiasi strumento, formazione o estrazione
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rotate-45 bg-purple" />
              Giovani e esperti, sullo stesso piano
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rotate-45 bg-green" />
              Musica, visivo, corpo, elettronica
            </li>
          </ul>
        </div>

        <div ref={box} className="reveal reveal-delay-1 lg:col-span-7">
          <div className="mosaic-border relative overflow-hidden bg-ink-soft p-8 sm:p-10 md:p-14">
            <img
              src="/images/mosaic-texture.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="relative">
              <p className="font-heading text-xs tracking-[0.4em] text-orange uppercase">
                Come candidarsi
              </p>
              <h3 className="mt-4 font-display text-4xl tracking-wide text-cream sm:text-5xl">
                RACCONTA
                <br />
                IL TUO MOSAICO
              </h3>
              <p className="mt-5 max-w-xl font-serif text-xl leading-relaxed text-cream/80 italic">
                Compila il Google Form con le tue informazioni, i tuoi link e
                il tuo racconto. La candidatura verrà ricevuta direttamente dal
                team di MEXO.
              </p>
              <ol className="mt-8 space-y-4 text-sm leading-relaxed text-cream/70">
                <li className="flex gap-4">
                  <span className="font-heading text-orange">01</span>
                  <span>Apri il modulo di candidatura.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-heading text-purple">02</span>
                  <span>Compila tutti i campi richiesti e aggiungi i tuoi link.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-heading text-green">03</span>
                  <span>Invia il modulo e attendi un nostro riscontro.</span>
                </li>
              </ol>
              <a
                href="https://forms.gle/gXUXetkXaUzDjjhE8"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center bg-orange px-8 py-4 text-center font-heading text-sm tracking-[0.2em] text-ink uppercase transition hover:bg-orange-hot sm:w-auto"
              >
                Compila il form di candidatura
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-heading text-[11px] tracking-[0.24em] text-cream/55 uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}
