import "./HomePage.scss";
import "../../index.scss";

import Title from "../Title/Title";
import Header from "../Header/Header";

function HomePage() {
  const headerProps = [
    {
      name: "Accueil",
      function: () => {
        console.log("Accueil");
      },
    },
    {
      name: "Présentation",
      function: () => {
        console.log("Présenation");
      },
    },
    {
      name: "Projets",
      function: () => {
        console.log("Projets");
      },
    },
    {
      name: "Technologies",
      function: () => {
        console.log("Technologies");
      },
    },
    {
      name: "Contact",
      function: () => {
        console.log("Contact");
      },
    },
  ];
  return (
    <>
      <Header headerProps={headerProps} mobile={false} />
      <Title />
    </>
  );
}

export default HomePage;
