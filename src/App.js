import { useState } from "react";
import BarButton from "./components/Icons/BarButton";
import SideBar from "./components/SideBar";
import classes from "./App.module.css";
import ModalButton from "./ModalButton";
import Modal from "./components/Modal";
export default function App() {
  const [showClass, setShowClass] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const closeHandler = () => {
    setShowClass(true);
  };
  const openHandler = () => {
    setShowClass(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && <Modal onClick={closeModal}></Modal>}
      <BarButton onClick={openHandler}></BarButton>
      <SideBar
        onClick={closeHandler}
        className={showClass ? classes.show : ""}
      ></SideBar>
      <ModalButton onClick={openModal}></ModalButton>
    </>
  );
}
