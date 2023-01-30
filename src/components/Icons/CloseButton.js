import { FaTimes } from "react-icons/fa";
import classes from "./BarButton.module.css";
function CloseButton({ onClick }) {
  return (
    <button onClick={onClick} className={`${classes.btn} `}>
      <FaTimes color={"red"} size={24}></FaTimes>
    </button>
  );
}

export default CloseButton;
