import { cn } from "../utils/cn";

type Size = "sm" | "md" | "lg" | "xl";

const SIZE: Record<
  Size,
  { row: string; sub: string; gap: string }
> = {
  sm: {
    row: "text-[28px] leading-none tracking-tight",
    sub: "text-[7px] tracking-[0.22em] mt-1",
    gap: "gap-0",
  },
  md: {
    row: "text-[44px] leading-none tracking-tight",
    sub: "text-[9px] tracking-[0.26em] mt-1.5",
    gap: "gap-0",
  },
  lg: {
    row: "text-[72px] sm:text-[88px] leading-[0.85] tracking-tight",
    sub: "text-[11px] sm:text-sm tracking-[0.28em] mt-2",
    gap: "gap-0",
  },
  xl: {
    row: "text-[70px] sm:text-[118px] md:text-[152px] leading-[0.82] tracking-tight",
    sub: "text-[8px] sm:text-lg md:text-[22px] tracking-[0.14em] sm:tracking-[0.2em] mt-1.5 sm:mt-3 whitespace-nowrap",
    gap: "gap-0",
  },
};

export function Logo({
  size = "md",
  showSub = true,
  className,
  subClassName,
}: {
  size?: Size;
  showSub?: boolean;
  className?: string;
  subClassName?: string;
}) {
  const s = SIZE[size];
  return (
    <div className={cn("select-none", className)}>
      <div className={cn("flex items-end font-display", s.row, s.gap)}>
        <span className="mosaic-letter logo-stroke">M</span>
        <span className="text-orange">EXO</span>
      </div>
      {showSub && (
        <p
          className={cn(
            "font-heading font-semibold uppercase text-cream/80",
            s.sub,
            subClassName,
          )}
        >
          Mosaic Exhibition Orchestra
        </p>
      )}
    </div>
  );
}
