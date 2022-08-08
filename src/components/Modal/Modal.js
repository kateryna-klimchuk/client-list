import style from "./Modal.module.css";

const Modal = ({ closeModal, name, lastName, id, gender, birthDay }) => {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <button
          className={style.modalButton}
          type="button"
          onClick={closeModal}
        >
          Close
        </button>
        <ul className={style.modalList}>
          <li className="style.modalItem">Identification number: {id}</li>
          <li className="style.modalItem">First Name: {name}</li>
          <li className="style.modalItem">Last Name: {lastName}</li>
          <li className="style.modalItem">Birth date: {birthDay}</li>
          <li className="style.modalItem">Gender: {gender}</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
