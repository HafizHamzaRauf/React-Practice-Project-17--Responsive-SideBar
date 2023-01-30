import classes from "./ModalButton.module.css";
export default function ModalButton({ onClick }) {
  return (
    <button onClick={onClick} className={classes["modal-btn"]}>
      Show Modal
    </button>
  );
}
