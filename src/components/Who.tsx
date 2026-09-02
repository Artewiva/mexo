import { useReveal } from "../hooks/useReveal";

const ROLES = [
  {
    title: "Musicisti",
    kicker: "Giovani & Esperti",
    copy: "Qualsiasi strumento, formazione o estrazione. L’esperienza incontra la ricerca.",
    image:
      "https://images.pexels.com/photos/9002889/pexels-photo-9002889.jpeg?auto=compress&cs=tinysrgb&w=1600",
    accent: "#FF6B00",
  },
  {
    title: "DJ & Producer",
    kicker: "Suono elettronico",
    copy: "Beatmaker, sound designer, live electronics. Il groove come tessera del mosaico.",
    image:
      "https://images.pexels.com/photos/18419350/pexels-photo-18419350.jpeg?auto=compress&cs=tinysrgb&w=1600",
    accent: "#6B2A70",
  },
  {
    title: "Video & Visual Artist",
    kicker: "Immagine e spazio",
    copy: "Per esplorare la relazione tra suono, immagine e spazio. La scena come organismo.",
    image:
      "https://images.pexels.com/photos/23921451/pexels-photo-23921451.jpeg?auto=compress&cs=tinysrgb&w=1600",
    accent: "#2D5C38",
  },
  {
    title: "Danzatori & Performer",
    kicker: "Corpo in composizione",
    copy: "Il corpo e il movimento come parte integrante della composizione.",
    image:
      "https://images.pexels.com/photos/24408960/pexels-photo-24408960.jpeg?auto=compress&cs=tinysrgb&w=1600",
    accent: "#5C1A38",
  },
];

export function Who() {
  const head = useReveal<HTMLDivElement>();

  return (
    <section id="chi" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={head} className="reveal mb-14 max-w-2xl">
          <p className="font-heading text-xs tracking-[0.5em] text-orange uppercase">
            02 · Chi può candidarsi
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-cream sm:text-6xl">
            I PEZZI DEL MOSAICO
          </h2>
          <p className="mt-4 text-cream/65">
            Un ecosistema espanso. Non un’orchestra chiusa: un organismo che
            cresce tessera dopo tessera.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {ROLES.map((r, i) => (
            <RoleCard key={r.title} role={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleCard({
  role,
  index,
}: {
  role: (typeof ROLES)[number];
  index: number;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`reveal tile-hover group relative min-h-[340px] overflow-hidden sm:min-h-[400px] ${index % 2 ? "reveal-delay-1" : ""}`}
    >
      <img
        src={role.image}
        alt={role.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      <div
        className="absolute top-0 left-0 h-1 w-24"
        style={{ background: role.accent }}
      />
      <div className="relative flex h-full min-h-[340px] flex-col justify-end p-7 sm:min-h-[400px]">
        <p className="font-heading text-[11px] tracking-[0.32em] text-orange uppercase">
          {role.kicker}
        </p>
        <h3 className="mt-2 font-display text-3xl tracking-wide text-cream sm:text-4xl">
          {role.title}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
          {role.copy}
        </p>
      </div>
    </article>
  );
}
