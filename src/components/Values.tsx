import { useReveal } from "../hooks/useReveal";

const VALUES = [
  {
    n: "01",
    title: "Ascolto",
    copy: "Capacità di ascoltare gli altri prima ancora di suonare.",
    color: "#FF6B00",
  },
  {
    n: "02",
    title: "Curiosità",
    copy: "Voglia di confrontarsi con linguaggi differenti.",
    color: "#6B2A70",
  },
  {
    n: "03",
    title: "Apertura",
    copy: "Disponibilità a uscire dai propri confini artistici.",
    color: "#2D5C38",
  },
  {
    n: "04",
    title: "Improvvisazione",
    copy: "Capacità di reagire e creare nel momento presente.",
    color: "#F0E4C4",
  },
  {
    n: "05",
    title: "Condivisione",
    copy: "Volontà di costruire qualcosa insieme.",
    color: "#5C1A38",
  },
];

export function Values() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
      <img
        src="/images/mosaic-fragments.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-soft via-ink-soft/90 to-ink-soft" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div ref={head} className="reveal mb-14 max-w-2xl">
          <p className="font-heading text-xs tracking-[0.5em] text-orange uppercase">
            03 · Cosa cerchiamo oltre la tecnica
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-cream sm:text-6xl">
            CINQUE TESSERE
          </h2>
          <p className="mt-4 text-cream/65">
            La tecnica è un punto di partenza. Il mosaico si tiene insieme
            grazie a queste qualità.
          </p>
        </div>

        <div ref={grid} className="reveal grid gap-4 md:grid-cols-5">
          {VALUES.map((v) => (
            <article
              key={v.n}
              className="group mosaic-border flex flex-col bg-ink p-6 transition hover:-translate-y-1"
            >
              <span
                className="mb-8 inline-block h-3 w-8"
                style={{ background: v.color }}
              />
              <p className="font-heading text-xs tracking-[0.3em] text-cream/40">
                {v.n}
              </p>
              <h3 className="mt-2 font-heading text-xl tracking-wide text-cream uppercase">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">
                {v.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
