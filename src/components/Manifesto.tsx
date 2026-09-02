import { useReveal } from "../hooks/useReveal";

const PAIRS = [
  {
    old: "Gerarchia rigida",
    next: "Dialogo trans-generazionale",
    copy: "L'esperienza incontra la ricerca; la tradizione incontra la contemporaneità.",
  },
  {
    old: "Singolo genere musicale",
    next: "Mosaico di culture",
    copy: "Jazz, musica africana, elettronica, funk, hip hop, musica mediterranea e tradizioni popolari.",
  },
  {
    old: "Repertorio di sola musica già scritta",
    next: "Nuovo linguaggio collettivo",
    copy: "Una comunità capace di generare nuova musica, non solo di interpretarla.",
  },
  {
    old: "Esclusivamente musicisti classici o standard",
    next: "Ecosistema espanso",
    copy: "Un organismo che unisce musicisti, DJ, producer, visual artist e danzatori.",
  },
];

const GENRES = [
  "Jazz",
  "Musica africana",
  "Elettronica",
  "Funk",
  "Hip Hop",
  "Musica mediterranea",
  "Tradizioni popolari",
];

export function Manifesto() {
  const head = useReveal<HTMLDivElement>();
  const list = useReveal<HTMLDivElement>();
  const quote = useReveal<HTMLQuoteElement>();

  return (
    <section id="visione" className="relative overflow-hidden bg-ink-soft">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-20"
        style={{
          backgroundImage: "url(/images/mosaic-texture.jpg)",
          backgroundSize: "cover",
          maskImage: "linear-gradient(to left, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div ref={head} className="reveal mb-16 max-w-3xl">
          <p className="font-heading text-xs tracking-[0.5em] text-orange uppercase">
            01 · Manifesto e Visione
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-cream sm:text-6xl md:text-7xl">
            NON UN’ORCHESTRA
            <br />
            TRADIZIONALE
          </h2>
          <p className="mt-4 font-display text-3xl tracking-wide text-orange sm:text-5xl">
            MA UN LABORATORIO CREATIVO
            <br className="hidden sm:block" /> MULTIDISCIPLINARE
          </p>
        </div>

        <div ref={list} className="reveal space-y-0 border-t border-cream/10">
          {PAIRS.map((p, i) => (
            <article
              key={p.old}
              className="grid gap-4 border-b border-cream/10 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <span className="font-heading text-xs tracking-[0.3em] text-orange uppercase md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-heading text-sm tracking-wide text-cream/35 line-through decoration-cream/30 uppercase md:col-span-4">
                {p.old}
              </p>
              <div className="md:col-span-7">
                <h3 className="font-heading text-xl tracking-wide text-cream uppercase sm:text-2xl">
                  {p.next}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/65 sm:text-base">
                  {p.copy}
                </p>
              </div>
            </article>
          ))}
        </div>

        <blockquote
          ref={quote}
          className="reveal mt-20 max-w-4xl font-serif text-2xl leading-snug text-cream italic sm:text-4xl md:text-5xl"
        >
          “Ogni individualità diventa parte di un organismo musicale più
          grande.”
        </blockquote>
      </div>

      <div className="border-y border-cream/10 bg-ink py-5 overflow-hidden">
        <div className="marquee-track flex w-max gap-0">
          {[...GENRES, ...GENRES].map((g, i) => (
            <span
              key={`${g}-${i}`}
              className="flex items-center gap-6 px-6 font-heading text-sm tracking-[0.28em] text-cream/80 uppercase"
            >
              <span
                className="inline-block h-3 w-3 rotate-45"
                style={{
                  background: [
                    "#FF6B00",
                    "#6B2A70",
                    "#2D5C38",
                    "#F0E4C4",
                    "#5C1A38",
                    "#1A3D32",
                    "#E8A060",
                  ][i % 7],
                }}
              />
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
