import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import FlagshipProjects from "./components/FlagshipProjects";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <MobileNavbar />
      <Hero />
      <About />
      <Projects />
      <FlagshipProjects />
      <Skills />
      <Certifications />
      <Achievements />
      <Contact />
    </>
  );
}
