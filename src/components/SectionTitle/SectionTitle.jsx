import "./SectionTitle.scss";
import "../../index.scss";

function SectionTitle({ name, ref }) {
  return <h1 ref={ref} className="section_title elm_ct">{`< ${name} />`}</h1>;
}

export default SectionTitle;
