import NavbarComp from "./components/NavbarComp";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Experience from "./sections/Experience";

function App() {
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

export default App;
