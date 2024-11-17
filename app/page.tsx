import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"], // Specify character subsets
  weight: ["400", "700"], // Load only necessary weights
});

export default function Home() {
  return (
    <div className={inter.className}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
