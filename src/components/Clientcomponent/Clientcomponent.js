import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useClientData from "../../utils/useClientData";
import MenuModal from "../Modal/MenuModal";
import { Modal } from "../Modal/Modal";
import "./Clientcomponent.css";

export default function Clientcomponent({ data }) {
  const history = useHistory();

  const [show, setshow] = useState(false);
  const closeModal = () => {
    setshow(false);
  };
  const openModal = (e) => {
    e.stopPropagation();
    setshow(true);
  };
  const goToDealPage = (e) => {
    let id = e.currentTarget.dataset.client;
    history.push(`/home/${id}`);
  };
  const deals = useClientData(data.id);

  return (
    <>
      <div className="client" data-client={data.id} onClick={goToDealPage}>
        <div>
          <h4 className="clientname">{data.id}</h4>
          <span className="numberofdeal">
            Number of deal - <span className="dealcount">{deals.length}</span>
          </span>
        </div>
        <div className="menubtn" onClick={openModal}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 14C4.46957 14 3.96086 13.7893 3.58579 13.4142C3.21071 13.0391 3 12.5304 3 12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10C5.53043 10 6.03914 10.2107 6.41421 10.5858C6.78929 10.9609 7 11.4696 7 12C7 12.5304 6.78929 13.0391 6.41421 13.4142C6.03914 13.7893 5.53043 14 5 14ZM12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM19 14C18.4696 14 17.9609 13.7893 17.5858 13.4142C17.2107 13.0391 17 12.5304 17 12C17 11.4696 17.2107 10.9609 17.5858 10.5858C17.9609 10.2107 18.4696 10 19 10C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12C21 12.5304 20.7893 13.0391 20.4142 13.4142C20.0391 13.7893 19.5304 14 19 14Z"
              fill="#333333"
            />
          </svg>
        </div>
      </div>
      {show ? (
        <Modal show={show} closeModal={closeModal}>
          <MenuModal closeModal={closeModal} clientid={data.id}></MenuModal>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}
