import { icons } from "../icons";

import OC5 from "../../assets/projects/oc_project5_algorithme_de_recherche.png";

export const OCProject5AlgorithmeRecherche = {
  name: "Projet OC 5 : Création un algorithme de recherche pour un site de recette",
  image: OC5,
  github: "https://github.com/Pavol-69/OP-Project-7-Algorithme-de-recherche-JS",
  site: "",
  tools: [icons.html.logo, icons.css.logo, icons.js.logo, icons.git.logo],
  openClassromm: true,
  description: (
    <>
      <h1>Description</h1>
      <img className="img_modal" src={OC5} />
      <p>
        Cinquième projet OpenClassroom, qui visait à toujours plus approfondir
        notre apprentissage du JS, en nous faisant concevoir un algorithme de
        recherche.
      </p>
      <br />
      <p>
        Nous devions créer deux variantes du même algorithme, via 2 branches
        différentes sur le GitHub, afin de les comparer via un outil pour
        mesurer la performance.
      </p>
    </>
  ),
};
