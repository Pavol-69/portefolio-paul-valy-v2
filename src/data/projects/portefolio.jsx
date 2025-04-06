import { icons } from "../icons";

import portefolio from "../../assets/projects/portefolio.png";

export const portefolioProject = {
  name: "PorteFolio Paul Valy",
  image: portefolio,
  github: "https://github.com/Pavol-69/portefolio-paul-valy-v2/",
  site: "https://portefolio-paul-valy.web.app/",
  tools: [
    icons.html.logo,
    icons.css.logo,
    icons.js.logo,
    icons.react.logo,
    icons.git.logo,
    icons.firebase.logo,
  ],
  openClassromm: false,
  description: (
    <>
      <h1>Description</h1>
      <img className="img_modal" src={portefolio} />
      <p>Mon portefolio, que vous êtes actuellement en train de parcourir !</p>
    </>
  ),
};
