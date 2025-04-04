import "./Techno.scss";
import "../../index.scss";

import { technoList } from "../../data/technolist";
import { icons_list } from "../../data/icons";

function Techno() {
  return (
    <section className="techno_ctn">
      {technoList.map((techno, index) => (
        <article key={index}>
          <div className="techno_header elm_ct">
            <div className="left_line" />
            <h3>{techno.toLowerCase()}</h3>
            <div className="right_line" />
          </div>
          <div className="icons_ctn elm_ct">
            {icons_list.map((icon, index_icon) =>
              icon.type.toLowerCase() == techno.toLowerCase() ? (
                <div className="icon elm_ct" key={index_icon}>
                  <img src={icon.logo} />
                </div>
              ) : null
            )}
          </div>
        </article>
      ))}
    </section>
  );
}

export default Techno;
