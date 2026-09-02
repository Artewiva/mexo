import { Logo } from "./Logo";
import { MosaicStrip } from "./MosaicCorners";

export function Footer() {
  return (
    <footer className="bg-ink">
      <MosaicStrip />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <Logo size="md" subClassName="text-cream/70" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/50">
            Una nuova orchestra per un nuovo modo di fare musica. Laboratorio
            creativo multidisciplinare.
          </p>
        </div>
        <div>
          <p className="font-heading text-xs tracking-[0.3em] text-orange uppercase">
            Naviga
          </p>
          <ul className="mt-4 space-y-2 font-heading text-sm tracking-wide text-cream/70 uppercase">
            <li>
              <a href="#visione" className="hover:text-orange">
                Visione
              </a>
            </li>
            <li>
              <a href="#call" className="hover:text-orange">
                Open Call
              </a>
            </li>
            <li>
              <a href="#chi" className="hover:text-orange">
                Chi cerchiamo
              </a>
            </li>
            <li>
              <a href="#candidati" className="hover:text-orange">
                Candidati
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-heading text-xs tracking-[0.3em] text-orange uppercase">
            Manifesto
          </p>
          <p className="mt-4 font-serif text-lg text-cream/80 italic">
            La musica non è già scritta.
            <br />
            La musica accade.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 px-6 py-6 text-[11px] tracking-[0.18em] text-cream/40 uppercase sm:flex-row md:px-10">
        <span>© {new Date().getFullYear()} Mosaic Exhibition Orchestra</span>
        <span>MEXO · Costruiamo il mosaico</span>
      </div>
    </footer>
  );
}
