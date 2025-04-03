import "./Modal.scss";
import "../../index.scss";

function Modal({ content, setShowModal }) {
  return (
    <div className="modal">
      <div className="modal_content elm_ct">
        <h1>Description</h1>
        {content}
        <div className="btn elm_ct" onClick={() => setShowModal(false)}>
          Fermer
        </div>
      </div>
    </div>
  );
}

export default Modal;
