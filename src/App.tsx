import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MosaicStrip } from "./components/MosaicCorners";
import { Manifesto } from "./components/Manifesto";
import { Apply } from "./components/Apply";
import { Credits } from "./components/Credits";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-ink text-cream">
      <div className="grain" />
      <Navbar />
      <main id="top">
        <Hero />
        <MosaicStrip />
        <Manifesto />
        <Apply />
        <Credits />
      </main>
      <Footer />
    </div>
  );
}
