import { icons } from "../icons";

import OC4 from "../../assets/projects/oc_project4_site_accessible_pour_plateforme_photographes.png";

export const OCProject4SiteAccessiblePourPlateformePhotographes = {
  name: "Projet OC 4 : Création d'une plateforme pour photographes accessible",
  image: OC4,
  github:
    "https://github.com/Pavol-69/OP-Project-6-site-accessible-pour-plateforme-photographes",
  site: "",
  tools: [icons.html.logo, icons.css.logo, icons.js.logo, icons.git.logo],
  openClassromm: true,
  description: (
    <>
      <h1>Description</h1>
      <img className="img_modal" src={OC4} />
      <p>
        Quatrième projet OpenClassroom, qui visait à approfondir notre
        apprentissage du JS avec l'introduction de composants.
      </p>
      <br />
      <p>
        Nous avions une autre consigne en parallèle : faire en sorte que le site
        soit le plus accessible possible, en le rendant ncomplètement avigable
        via un clavier
      </p>
    </>
  ),
};
