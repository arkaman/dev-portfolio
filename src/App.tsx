import Navbar from "./components/navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}