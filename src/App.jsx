import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import { useRef } from "react";
import { PROJECTS } from "./utils/data";
import Projects from "./Components/Projects/Projects";

function App() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  const sectionRefs = {
    section1,
    section2,
    section3,
    section4,
    section5,
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      <Navbar sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      <div className="container">
        <Hero section={section4} />
        <br />
        <Skills section={section1} />
        <br />
        <Projects section={section5} />
        <br />
        <WorkExperience section={section2} />
        <br />
        <ContactMe section={section3} />
      </div>
      <Footer />
    </>
  );
}

export default App;
