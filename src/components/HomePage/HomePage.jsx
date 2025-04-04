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

function HomePage() {
  return (
    <>
      <Header headerProps={headerProps} mobile={true} />
      <Title />
      <SectionTitle name={"Présentation"} />
      <Presentation />
      <SectionTitle name={"Projets"} />
      <Projects />
      <SectionTitle name={"Technologies"} />
      <Techno />
      <SectionTitle name={"Me contacter"} />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
