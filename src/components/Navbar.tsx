import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "../utils/cn";

const LINKS = [
  { href: "#visione", label: "Visione" },
  { href: "#call", label: "Open Call" },
  { href: "#chi", label: "Chi cerchiamo" },
  { href: "#candidati", label: "Candidati" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = LINKS.map((l) => l.href.slice(1));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ink/90 shadow-[0_1px_0_rgba(240,228,196,0.08)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="relative z-50" onClick={() => setOpen(false)}>
          <Logo size="sm" showSub={false} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "nav-link font-heading text-[13px] tracking-[0.22em] uppercase",
                active === l.href ? "active text-orange" : "text-cream/80",
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#candidati"
            className="bg-orange px-5 py-2.5 font-heading text-[13px] tracking-[0.2em] text-ink uppercase transition hover:bg-orange-hot"
          >
            Partecipa
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          <span
            className={cn(
              "h-0.5 w-7 bg-cream transition",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn("h-0.5 w-7 bg-orange transition", open && "opacity-0")}
          />
          <span
            className={cn(
              "h-0.5 w-7 bg-cream transition",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col justify-center gap-8 px-8">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl tracking-wide text-cream"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-orange">{String(i + 1).padStart(2, "0")}</span>{" "}
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
