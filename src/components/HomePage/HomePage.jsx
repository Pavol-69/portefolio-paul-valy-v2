import "./HomePage.scss";
import "../../index.scss";

import { headerProps } from "../../data/headerProps";

import Title from "../Title/Title";
import Header from "../Header/Header";
import SectionTitle from "../SectionTitle/SectionTitle";
import Presentation from "../Presentation/Presentation";
import Projects from "../Projects/Projects";

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
    </>
  );
}

export default HomePage;
