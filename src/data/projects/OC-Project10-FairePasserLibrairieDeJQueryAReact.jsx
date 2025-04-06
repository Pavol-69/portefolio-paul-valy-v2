import { icons } from "../icons";

import OC10 from "../../assets/projects/oc_project10_faire_passer_une_librairie_jquery_vers_react.png";

export const OCProject10FairePasserLibrairieDeJQueryAReact = {
  name: "Projet OC 10 : Faire passer une app RH de jQuery à React",
  image: OC10,
  github:
    "https://github.com/Pavol-69/OP-Project-14-faire-passer-une-librairie-jquery-vers-react",
  site: "",
  tools: [
    icons.html.logo,
    icons.css.logo,
    icons.js.logo,
    icons.react.logo,
    icons.redux.logo,
    icons.git.logo,
  ],
  openClassromm: true,
  description: (
    <>
      <h1>Description</h1>
      <img className="img_modal" src={OC10} />
      <p>
        Dernier projet OpenClassroom, qui nous demandait de faire passer une
        application RH de jQuery vers React.
      </p>
      <br />
      <p>
        L'application jQuery disposait de 4 composants externes : un datePicker,
        un dropDownMenu, une Modal, et une dataTable. Nous devions en retrouver
        3 équivalents pour React, et recoder complètement le quatrième.Le
        composant que j'ai choisi de recoder fut la dataTable.
      </p>
      <br />
      <p>
        Une fois le composant prêt, il nous était demandé de mettre à
        disposition sur la{" "}
        <a
          target="_blank"
          href="https://www.npmjs.com/package/datatable-plugin"
        >
          plateforme npm
        </a>
        .
      </p>
    </>
  ),
};
