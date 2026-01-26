import NavbarComp from "./components/NavbarComp";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavbarComp />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}
