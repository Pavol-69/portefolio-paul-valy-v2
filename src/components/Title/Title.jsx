import "./Title.scss";
import "../../index.scss";

import img_bg from "../../assets/images/fond_accueil4.jpg";

import { useState, useEffect } from "react";

function Title() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  useEffect(() => {
    keyboard();
  }, []);

  async function keyboard() {
    const txt = ["Paul Valy", "Développeur Web Junior"];
    for (let j = 0; j < txt.length; j++) {
      let tempo = "";
      for (let i = 0; i < txt[j].length; i++) {
        await wait(100);
        tempo = tempo + txt[j][i];
        if (j === 0) {
          setName(tempo);
        } else {
          setJob(tempo);
        }
      }
    }
  }

  // Fonction pour attendre
  async function wait(t) {
    await delay(t);
  }
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="title_ctn">
      <img className="title_img" src={img_bg} />
      <div className="title_deg" />
      <div className="title_txt elm_ct">
        <p className="title_txt_name">{name}</p>
        <p className="title_txt_job">{job}</p>
      </div>
    </div>
  );
}

export default Title;
