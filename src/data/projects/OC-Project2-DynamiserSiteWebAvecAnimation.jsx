import { icons } from "../icons";

import OC2 from "../../assets/projects/oc_project2_dynamiser_site_web_avec_animation.png";

export const OCProject2DynamiserSiteWebAvecAnimation = {
  name: "Projet OC 2 : Dynamiser un site Web avec des animations",
  image: OC2,
  github:
    "hhttps://github.com/Pavol-69/OP-Project-3-dynamiser-page-web-avec-animations-CSS",
  site: "",
  tools: [icons.html.logo, icons.css.logo, icons.git.logo],
  openClassromm: true,
  description: (
    <>
      <h1>Description</h1>
      <img className="img_modal" src={OC2} />
      <p>
        Second projet OpenClassroom, site pour afficher la carte d'un
        restaurant, qui visait à approfondir nos connaissances HTML/CSS en y
        intégrant cette fois des animations via du SCSS.
      </p>
      <br />
      <p>
        Nous devions respecter une maquette Figma, faire en sorte que les
        différentes pages soient responsives, et rajouter les animations
        demandées, notamment un écran de chargement avant d'accéder à n'importe
        quelle page.
      </p>
    </>
  ),
};
