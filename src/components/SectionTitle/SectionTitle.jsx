import "./SectionTitle.scss";
import "../../index.scss";

function SectionTitle({ name }) {
  return <h1 className="section_title elm_ct">{`< ${name} />`}</h1>;
}

export default SectionTitle;
