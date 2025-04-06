import { icons } from "../icons";

import OC3 from "../../assets/projects/oc_project3_landing_page.png";

export const OCProject3LandingPage = {
  name: "Projet OC 3 : Formulaire pour une incription à un évènement de jeu vidéo",
  image: OC3,
  github: "https://github.com/Pavol-69/OP-Project-4-creer-landing-page-avec-JS",
  site: "",
  tools: [icons.html.logo, icons.css.logo, icons.js.logo, icons.git.logo],
  openClassromm: true,
  description: (
    <>
      <h1>Description</h1>
      <img className="img_modal" src={OC3} />
      <p>
        Troisième projet OpenClassroom, qui nous initiait au JS via un
        formulaire d'inscription pour un évènement de jeu video.
      </p>
      <br />
      <p>
        Le formulaire devait faire un retour à l'utilisateur de s'il avait été
        correctement renseigné, et si l'inscription avait bien été prise en
        compte.
      </p>
    </>
  ),
};
