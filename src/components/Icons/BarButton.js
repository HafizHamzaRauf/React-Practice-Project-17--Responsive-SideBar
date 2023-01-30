import { FaBars } from "react-icons/fa";
import classes from "./BarButton.module.css";
function BarButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${classes.btn} ${classes.animations}`}
    >
      <FaBars color={"blue"} size={24}></FaBars>
    </button>
  );
}

export default BarButton;
