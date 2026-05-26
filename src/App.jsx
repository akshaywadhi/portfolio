import { lazy, Suspense, useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ScrollProgress from "./Components/ScrollProgress/ScrollProgress";
import TechMarquee from "./Components/TechMarquee/TechMarquee";
import Stats from "./Components/Stats/Stats";
import Footer from "./Components/Footer/Footer";
import { scrollToSection } from "./Components/Scroll";

const About = lazy(() => import("./Components/About/About"));
const Skills = lazy(() => import("./Components/Skills/Skills"));
const Projects = lazy(() => import("./Components/Projects/Projects"));
const WorkExperience = lazy(() => import("./Components/WorkExperience/WorkExperience"));
const Education = lazy(() => import("./Components/Education/Education"));
const ContactMe = lazy(() => import("./Components/ContactMe/ContactMe"));
const CTA = lazy(() => import("./Components/CTA/CTA"));

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />;
}

function App() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);
  const section7 = useRef(null);

  const sectionRefs = {
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
  };

  return (
    <>
      <ScrollProgress />
      <Navbar sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      <main className="container">
        <Hero
          section={section4}
          scrollToSection={scrollToSection}
          sectionRefs={sectionRefs}
        />
        <TechMarquee />
        <Stats />
        <Suspense fallback={<SectionFallback />}>
          <About section={section6} />
          <Skills section={section1} />
          <Projects section={section5} />
          <WorkExperience section={section2} />
          <Education section={section7} />
          <CTA scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
          <ContactMe section={section3} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
