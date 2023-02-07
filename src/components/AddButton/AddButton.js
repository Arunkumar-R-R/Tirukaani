import React, { useState } from "react";
import FormModal from "../FormModal/FormModal";
import { Modal } from "../Modal/Modal";
import "./AddButton.css";

export default function AddButton({ className }) {
  const [show, setshow] = useState(false);
  const closeModal = () => {
    setshow(false);
  };
  const openModal = () => {
    setshow(true);
  };
  return (
    <>
      <button
        className={`add_btn button ${className}`}
        tabIndex="0"
        aria-pressed="false"
        onClick={openModal}
      >
        <span> Add</span>
      </button>
      {show ? (
        <Modal show={show} closeModal={closeModal}>
          <FormModal closeModal={closeModal}></FormModal>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}
