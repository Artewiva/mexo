import { MosaicCorners } from "./MosaicCorners";
import { Vinyl } from "./Vinyl";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-ink pt-20 pb-16"
    >
      <MosaicCorners />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-4">
        <p className="mb-4 font-heading text-[11px] tracking-[0.48em] text-orange uppercase sm:text-xs">
          Open Call · Costruiamo il mosaico
        </p>

        <Vinyl />

        <h1 className="sr-only">
          MEXO Mosaic Exhibition Orchestra — Una nuova orchestra per un nuovo
          modo di fare musica
        </h1>

        <p className="mt-8 max-w-2xl text-center font-serif text-2xl font-medium text-cream italic sm:text-3xl md:text-4xl">
          Una nuova orchestra per un nuovo modo di fare musica.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#candidati"
            className="pulse-glow bg-orange px-8 py-3.5 font-heading text-sm tracking-[0.22em] text-ink uppercase transition hover:bg-orange-hot"
          >
            Partecipa alla Call
          </a>
          <a
            href="#visione"
            className="border border-cream/30 px-8 py-3.5 font-heading text-sm tracking-[0.22em] text-cream uppercase transition hover:border-orange hover:text-orange"
          >
            Il Manifesto
          </a>
        </div>
      </div>

      <a
        href="#call"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/50 transition hover:text-orange"
        aria-label="Scorri"
      >
        <span className="font-heading text-[10px] tracking-[0.3em] uppercase">
          Scorri
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-orange to-transparent" />
      </a>
    </section>
  );
}
