import { Logo } from "./Logo";
import { MosaicStrip } from "./MosaicCorners";

const CREDITS = [
  {
    name: "Francesco Calabria",
    role: "Direzione artistica e organizzativa",
  },
  {
    name: "Massimo Torcivia",
    role: "Direzione creativa comunicazione, logistica",
  },
];

export function Footer() {
  return (
    <footer className="bg-ink">
      <MosaicStrip />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <Logo size="md" subClassName="text-cream/70" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/50">
            Una giovane orchestra senza schemi dove la musica accade.
            Laboratorio creativo multidisciplinare.
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
      <div className="border-t border-cream/10">
        <div className="mx-auto grid max-w-6xl gap-7 px-6 py-9 sm:grid-cols-2 md:px-10">
          {CREDITS.map((credit) => (
            <div key={credit.name} className="flex gap-4">
              <span
                className="mt-1 h-9 w-[3px] shrink-0 bg-orange"
                aria-hidden="true"
              />
              <div>
                <p className="font-heading text-sm tracking-[0.16em] text-cream uppercase">
                  {credit.name}
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed tracking-[0.14em] text-cream/45 uppercase">
                  {credit.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
