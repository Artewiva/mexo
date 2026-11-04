import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { OpenCall } from "./components/OpenCall";
import { Manifesto } from "./components/Manifesto";
import { Apply } from "./components/Apply";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-ink text-cream">
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <OpenCall />
        <Manifesto />
        <Apply />
      </main>
      <Footer />
    </div>
  );
}
