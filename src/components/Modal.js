import CloseButton from "./Icons/CloseButton";
import classes from "./Modal.module.css";
const Modal = function ({ onClick }) {
  return (
    <div className={classes.backdrop} onClick={onClick}>
      <div className={classes.modal}>
        <CloseButton onClick={onClick}></CloseButton>
        <p className={classes["modal-text"]}>Modal Content</p>
      </div>
    </div>
  );
};

export default Modal;
