import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="font-mono">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
