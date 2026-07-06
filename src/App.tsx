import DarkVeil from "./components/DarkVeil";
import Navbar from "./components/navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";

export default function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0.5}
          warpAmount={0}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
      </main>
    </>
  );
}