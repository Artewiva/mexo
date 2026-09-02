import { Logo } from "./Logo";

export function Vinyl() {
  return (
    <div className="group relative mx-auto aspect-square w-[min(88vw,640px)]">
      <div className="absolute inset-[3%] overflow-hidden rounded-full shadow-[0_0_80px_rgba(255,107,0,0.14)]">
        <img
          src="/images/vinyl.jpg"
          alt="Vinile MEXO"
          className="spin-slow h-full w-full scale-[1.12] object-cover brightness-110 contrast-105 group-hover:[animation-play-state:paused]"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(240,228,196,0.78) 0%, rgba(240,228,196,0.42) 28%, rgba(240,228,196,0.08) 42%, transparent 52%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="px-4 text-center">
          <Logo size="xl" subClassName="text-plum" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-[3%] rounded-full ring-1 ring-cream/15" />
    </div>
  );
}
