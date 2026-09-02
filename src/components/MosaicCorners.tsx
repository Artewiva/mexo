const TILES = {
  orange: "#FF6B00",
  peach: "#E8A060",
  cream: "#F0E4C4",
  purple: "#6B2A70",
  plum: "#3D1530",
  green: "#2D5C38",
  teal: "#1A3D32",
  wine: "#5C1A38",
  dark: "#1A1014",
};

export function MosaicCorners() {
  return (
    <>
      <svg
        className="pointer-events-none absolute top-0 left-0 z-20 w-[42vw] max-w-[420px] min-w-[180px]"
        viewBox="0 0 420 420"
        fill="none"
        aria-hidden
      >
        <polygon points="0,0 118,0 0,148" fill={TILES.orange} />
        <polygon points="118,0 196,0 86,132 0,148" fill={TILES.purple} />
        <polygon points="196,0 268,0 170,78 86,132" fill={TILES.cream} />
        <polygon points="268,0 318,0 230,92 170,78" fill={TILES.green} />
        <polygon points="0,148 86,132 70,210 0,228" fill={TILES.teal} />
        <polygon points="86,132 170,78 158,168 70,210" fill={TILES.orange} />
        <polygon points="170,78 230,92 188,176 158,168" fill={TILES.wine} />
        <polygon points="230,92 318,0 300,64 188,176" fill={TILES.plum} />
        <polygon points="0,228 70,210 48,286 0,310" fill={TILES.cream} />
        <polygon points="70,210 158,168 112,262 48,286" fill={TILES.purple} />
        <polygon points="158,168 188,176 150,250 112,262" fill={TILES.green} />
        <polygon points="0,310 48,286 22,360 0,390" fill={TILES.wine} />
        <polygon points="48,286 112,262 72,340 22,360" fill={TILES.orange} />
        <polygon points="0,390 22,360 8,410 0,420" fill={TILES.green} />
        <polygon points="318,0 360,0 300,64" fill={TILES.peach} />
        <polygon points="360,0 390,0 338,42 300,64" fill={TILES.teal} />
      </svg>

      <svg
        className="pointer-events-none absolute right-0 bottom-0 z-20 w-[42vw] max-w-[420px] min-w-[180px]"
        viewBox="0 0 420 420"
        fill="none"
        aria-hidden
      >
        <polygon points="420,420 302,420 420,272" fill={TILES.purple} />
        <polygon points="302,420 224,420 334,288 420,272" fill={TILES.orange} />
        <polygon points="224,420 152,420 250,342 334,288" fill={TILES.cream} />
        <polygon points="152,420 102,420 190,328 250,342" fill={TILES.green} />
        <polygon points="420,272 334,288 350,210 420,192" fill={TILES.wine} />
        <polygon points="334,288 250,342 262,252 350,210" fill={TILES.teal} />
        <polygon points="250,342 190,328 232,244 262,252" fill={TILES.plum} />
        <polygon points="190,328 102,420 120,356 232,244" fill={TILES.orange} />
        <polygon points="420,192 350,210 372,134 420,110" fill={TILES.cream} />
        <polygon points="350,210 262,252 308,158 372,134" fill={TILES.purple} />
        <polygon points="262,252 232,244 270,170 308,158" fill={TILES.green} />
        <polygon points="420,110 372,134 398,60 420,30" fill={TILES.orange} />
        <polygon points="372,134 308,158 348,80 398,60" fill={TILES.wine} />
        <polygon points="420,30 398,60 412,10 420,0" fill={TILES.teal} />
        <polygon points="102,420 60,420 120,356" fill={TILES.peach} />
        <polygon points="60,420 30,420 82,378 120,356" fill={TILES.plum} />
      </svg>
    </>
  );
}

export function MosaicStrip({ className = "" }: { className?: string }) {
  const colors = [
    "#FF6B00",
    "#6B2A70",
    "#2D5C38",
    "#F0E4C4",
    "#5C1A38",
    "#1A3D32",
    "#E8A060",
    "#3D1530",
  ];
  return (
    <div className={`flex h-2 w-full overflow-hidden ${className}`} aria-hidden>
      {Array.from({ length: 48 }).map((_, i) => (
        <span
          key={i}
          className="h-full flex-1"
          style={{
            background: colors[i % colors.length],
            clipPath:
              i % 3 === 0
                ? "polygon(0 0, 100% 0, 85% 100%, 0 100%)"
                : i % 3 === 1
                  ? "polygon(15% 0, 100% 0, 100% 100%, 0 100%)"
                  : "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
          }}
        />
      ))}
    </div>
  );
}
