import { icons } from "../icons";

import OC1 from "../../assets/projects/oc_project1_page_accueil_agence_voyage.png";

export const OCProject1AccueilAgenceVoyage = {
  name: "Projet OC 1 : Page d'accueil pour une agence de voyage",
  image: OC1,
  github:
    "https://github.com/Pavol-69/OP-Project-2-page-accueil-agence-voyage-HTML-CSS",
  site: "",
  tools: [icons.html.logo, icons.css.logo, icons.git.logo],
  openClassromm: true,
  description: (
    <>
      <h1>Description</h1>
      <img className="img_modal" src={OC1} />
      <p>
        Premier projet OpenClassroom, qui visait à nous apprendre les base du
        HTML/CSS en nous faisant concevoir la page d'accueil d'une agance de
        voyage.
      </p>
      <br />
      <p>
        Nous devions respecter une maquette Figma, et faire en sorte que cette
        page d'accueil soit responsive.
      </p>
    </>
  ),
};
