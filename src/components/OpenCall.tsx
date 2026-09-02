import { useReveal } from "../hooks/useReveal";
import { MosaicStrip } from "./MosaicCorners";

export function OpenCall() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="call" ref={ref} className="relative bg-ink">
      <MosaicStrip />
      <div className="reveal mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <p className="font-heading text-xs tracking-[0.5em] text-orange uppercase">
          Open Call
        </p>
        <h2 className="mt-4 font-display text-5xl tracking-wide text-cream sm:text-7xl md:text-8xl">
          COSTRUIAMO
          <br />
          IL <span className="mosaic-letter">MOSAICO</span>
        </h2>
        <blockquote className="mx-auto mt-10 max-w-3xl font-serif text-2xl text-cream/90 italic sm:text-3xl md:text-4xl">
          “La musica non è già scritta. La musica accade.”
        </blockquote>
        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-cream/60 sm:text-base">
          Non cerchiamo semplicemente nuovi componenti. Cerchiamo i nuovi pezzi
          del Mosaico.
        </p>
      </div>
    </section>
  );
}
