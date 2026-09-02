import { FormEvent, useState, type ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

const CATEGORIES = [
  "Musicista",
  "DJ / Producer",
  "Video & Visual Artist",
  "Danzatore / Performer",
  "Altro",
];

type FormState = {
  name: string;
  email: string;
  city: string;
  category: string;
  language: string;
  links: string;
  story: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  city: "",
  category: "",
  language: "",
  links: "",
  story: "",
};

export function Apply() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [sent, setSent] = useState(false);
  const head = useReveal<HTMLDivElement>();
  const box = useReveal<HTMLDivElement>();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
          {sent ? (
            <div className="mosaic-border relative overflow-hidden bg-ink-soft p-10 md:p-14">
              <img
                src="/images/mosaic-texture.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-25"
              />
              <div className="relative">
                <p className="font-heading text-xs tracking-[0.4em] text-orange uppercase">
                  Candidatura ricevuta
                </p>
                <h3 className="mt-4 font-display text-4xl tracking-wide text-cream sm:text-5xl">
                  BENVENUTO
                  <br />
                  NEL MOSAICO
                </h3>
                <p className="mt-5 max-w-md font-serif text-xl text-cream/80 italic">
                  “La musica non è già scritta. La musica accade.”
                </p>
                <p className="mt-4 text-sm text-cream/60">
                  Grazie {form.name ? form.name.split(" ")[0] : ""}. Abbiamo
                  ricevuto il tuo racconto. Ti ricontatteremo al più presto.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm(EMPTY);
                  }}
                  className="mt-8 border border-cream/30 px-6 py-3 font-heading text-xs tracking-[0.22em] text-cream uppercase hover:border-orange hover:text-orange"
                >
                  Invia un’altra candidatura
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mosaic-border space-y-4 bg-ink-soft p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome e cognome">
                  <input
                    required
                    className="input-field"
                    placeholder="Il tuo nome"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    className="input-field"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Città">
                  <input
                    className="input-field"
                    placeholder="Da dove vieni"
                    value={form.city}
                    onChange={(e) =>
                      setForm({ ...form, city: e.target.value })
                    }
                  />
                </Field>
                <Field label="Categoria">
                  <select
                    required
                    className="input-field"
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                  >
                    <option value="">Seleziona</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Quale linguaggio vuoi portare">
                <input
                  required
                  className="input-field"
                  placeholder="Strumento, pratica, disciplina…"
                  value={form.language}
                  onChange={(e) =>
                    setForm({ ...form, language: e.target.value })
                  }
                />
              </Field>
              <Field label="Link (sito, SoundCloud, reel, portfolio)">
                <input
                  className="input-field"
                  placeholder="https://"
                  value={form.links}
                  onChange={(e) => setForm({ ...form, links: e.target.value })}
                />
              </Field>
              <Field label="Raccontaci chi sei">
                <textarea
                  required
                  rows={5}
                  className="input-field resize-y"
                  placeholder="Cosa fai, cosa cerchi, quale tessera sei."
                  value={form.story}
                  onChange={(e) =>
                    setForm({ ...form, story: e.target.value })
                  }
                />
              </Field>
              <button
                type="submit"
                className="w-full bg-orange px-8 py-4 font-heading text-sm tracking-[0.28em] text-ink uppercase transition hover:bg-orange-hot"
              >
                Invia candidatura
              </button>
            </form>
          )}
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
