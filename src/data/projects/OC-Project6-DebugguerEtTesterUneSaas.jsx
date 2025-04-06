import { icons } from "../icons";

import OC6 from "../../assets/projects/oc_project6_debugguer_et_tester_une_sass_rh.png";

export const OCProject6DebugguerEtTesterUneSaas = {
  name: "Projet OC 6 : Débugguer et tester une SASS RH",
  image: OC6,
  github:
    "https://github.com/Pavol-69/OP-Project-9-Debugger-et-tester-une-saas-rh",
  site: "",
  tools: [
    icons.html.logo,
    icons.css.logo,
    icons.js.logo,
    icons.jest.logo,
    icons.git.logo,
  ],
  openClassromm: true,
  description: (
    <>
      <h1>Description</h1>
      <img className="img_modal" src={OC6} />
      <p>
        Sixième projet OpenClassroom, qui visait à nous apprendre à comment
        debugguer correctement une application, et à comment tester ses
        différents composants via l'outil Jest.
      </p>
    </>
  ),
};
