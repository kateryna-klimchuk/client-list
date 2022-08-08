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
          <li>Identification number: {id}</li>
          <li>First Name: {name}</li>
          <li>Last Name: {lastName}</li>
          <li>Birth date: {birthDay}</li>
          <li>Gender: {gender}</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
