import "./HomePage.scss";
import "../../index.scss";

import { headerProps } from "../../data/headerProps";

import Title from "../Title/Title";
import Header from "../Header/Header";
import SectionTitle from "../SectionTitle/SectionTitle";
import Presentation from "../Presentation/Presentation";
import Projects from "../Projects/Projects";
import Techno from "../Techno/Techno";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function HomePage() {
  const refPresentation = useRef();
  const refProject = useRef();
  const refTechnos = useRef();
  const refContact = useRef();
  return (
    <>
      <Header
        headerProps={headerProps}
        mobile={useMediaQuery({
          query: "(max-width: 800px)",
        })}
        refList={["", refPresentation, refProject, refTechnos, refContact]}
      />
      <Title />
      <SectionTitle name={"Présentation"} ref={refPresentation} />
      <Presentation />
      <SectionTitle name={"Projets"} ref={refProject} />
      <Projects />
      <SectionTitle name={"Technologies"} ref={refTechnos} />
      <Techno />
      <SectionTitle name={"Me contacter"} ref={refContact} />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
