import "./CVButton.scss";
import "../../../index.scss";

import myCV from "../../../assets/documents/CV_Paul_Valy.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import "font-awesome/css/font-awesome.min.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function CVButton() {
  return (
    <a className="btn_dwl elm_ct" href={myCV} download="CV Paul Valy">
      CV
      <div id="case_icon_dwl" className="txt_blc">
        <FontAwesomeIcon id="icon_dwl" icon={faDownload} />
      </div>
    </a>
  );
}

export default CVButton;
