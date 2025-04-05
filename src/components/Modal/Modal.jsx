import "./Modal.scss";
import "../../index.scss";

function Modal({ content, setShowModal }) {
  return (
    <div className="modal">
      <div className="modal_content elm_ct">
        {content}
        <div className="btn elm_ct" onClick={() => setShowModal(false)}>
          Fermer
        </div>
      </div>
    </div>
  );
}

export default Modal;
