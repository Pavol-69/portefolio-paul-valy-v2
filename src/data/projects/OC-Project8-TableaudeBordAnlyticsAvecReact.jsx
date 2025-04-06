import { icons } from "../icons";

import OC8 from "../../assets/projects/oc_project8_tableau_de_bord_analytics_avec_react.png";

export const OCProject8TableaudeBordAnlyticsAvecReact = {
  name: "Projet OC 8 : Création d'un tableau de bord Analytics avec React",
  image: OC8,
  github:
    "https://github.com/Pavol-69/OP-Project-12-Tableau-de-bord-analytics-avec-React",
  site: "",
  tools: [
    icons.html.logo,
    icons.css.logo,
    icons.js.logo,
    icons.react.logo,
    icons.git.logo,
  ],
  openClassromm: true,
  description: (
    <>
      <h1>Description</h1>
      <img className="img_modal" src={OC8} />
      <p>
        Huitième projet OpenClassroom, toujours avec React, qui nous demandait
        de créer un tableau de bord analytics pour les différents utilisateurs.
      </p>
      <br />
      <p>
        Ce projet nous apprenait en fait à comment utiliser et paramétrer un
        composant d'une librairie extérieure. En effet, nous avons utiliser la
        librairie ReCharts pour réaliser les différents graphiques.
      </p>
    </>
  ),
};
