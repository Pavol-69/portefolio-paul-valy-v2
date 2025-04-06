import { icons } from "../icons";

import OC7 from "../../assets/projects/oc_project7_app_web_react_et_react_router.png";

export const OCProject7AppWebReactEtReactRouter = {
  name: "Projet OC 7 : Création d'une app pour logements avec React et React Router",
  image: OC7,
  github:
    "https://github.com/Pavol-69/OP-Project-11-App-web-React-et-React-Router",
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
      <img className="img_modal" src={OC7} />
      <p>
        Septième projet OpenClassroom, qui visait à nous apprendre à utiliser
        React et React Router afin de réaliser un site pour des logements. React
        Router nous permettait de naviguer entre les pages, mais aussi de mettre
        en place une page Erreur 404.
      </p>
      <br />
      <p>
        En parallèle, il y avait également quelques défis techniques à réaliser,
        comme la création d'un caroussel, ou d'un menu qui s'étend pour nous
        révéler son contenu.
      </p>
    </>
  ),
};
