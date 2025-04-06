import { icons } from "../icons";

import OC9 from "../../assets/projects/oc_project9_utilisation_api_pour_compte_utilisateur_bancaire_avec_react.png";

export const OCProject9APIPourCompteUtilisateurBancaireAvecReact = {
  name: "Projet OC 9 : Utilisation d'une API et de Redux pour une app de compte bancaire",
  image: OC9,
  github: "https://github.com/Pavol-69/OP-Project-4-creer-landing-page-avec-JS",
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
      <img className="img_modal" src={OC9} />
      <p>
        Neuvième projet OpenClassroom, qui visait à nous apprendre à comment
        utiliser une API déjà existante pour créer une application de comptes
        bancaire.
      </p>
      <br />
      <p>
        Pour ce projet, nous avons dû prendre en main Redux, qui nous était
        imposé, afin d'utiliser un store Redux pour gérer nos données.
      </p>
      <br />
      <p>
        API qui était mise à notre disposition ne gérait que les utilisateurs,
        tout ce qui concernait les comptes bancaires n'existait pas. Nous avons
        donc renseigner tout ce que nous souhaitions de l'API via l'outil
        Swagger, dans le but d'y transmettre à l'équipe BackEnd.
      </p>
    </>
  ),
};
