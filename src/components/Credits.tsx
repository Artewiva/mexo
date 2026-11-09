const CREDITS = [
  {
    name: "Francesco Calabria",
    role: "Direzione artistica e organizzativa",
    logo: "/images/MMS%20LOGO.png",
    logoAlt: "MMS Mosaic Music Session Exhibition",
    logoClassName: "origin-left scale-115",
  },
  {
    name: "Massimo Torcivia",
    role: "Direzione creativa comunicazione, logistica",
    logo: "/images/ARTEWIVA%205-01.%20linee%20Bianche.png",
    logoAlt: "Artewiva",
  },
];

export function Credits() {
  return (
    <section className="bg-ink">
      <div className="border-t border-cream/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 md:px-10">
          {CREDITS.map((credit) => (
            <div key={credit.name} className="flex flex-col gap-5">
              <img
                src={credit.logo}
                alt={credit.logoAlt}
                width={945}
                height={945}
                loading="lazy"
                decoding="async"
                className={`h-16 w-auto max-w-[12rem] object-contain object-left ${credit.logoClassName ?? ""}`}
              />
              <div className="flex gap-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
