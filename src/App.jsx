import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <MobileNavbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Contact />
    </>
  );
}
