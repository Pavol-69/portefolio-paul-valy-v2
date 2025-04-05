import "./Presentation.scss";
import "../../index.scss";

import profilImg from "../../assets/images/photo_profil2.jpg";

import { presentationText } from "../../data/presentationText";

function Presentation() {
  return (
    <section className="pres_ctn elm_ct">
      <img alt="photo profil" src={profilImg} />
      <div className="pres_txt">{presentationText}</div>
    </section>
  );
}

export default Presentation;
