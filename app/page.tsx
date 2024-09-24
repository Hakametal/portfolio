import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="font-mono">
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
