import { useReveal } from "../hooks/useReveal";
import { MosaicStrip } from "./MosaicCorners";

export function OpenCall() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="call" ref={ref} className="relative bg-ink">
      <MosaicStrip />
    </section>
  );
}
