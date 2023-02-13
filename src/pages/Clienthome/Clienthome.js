import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import FormModal from "../../components/FormModal/FormModal";
import Dealmodal from "../../components/Dealmodal/Dealmodal";
import { useParams } from "react-router-dom";

import "./Clienthome.css";
import { Link } from "react-router-dom";
import { useFirestore } from "../../utils/firebase";
import Deal from "../../components/Deal/Deal";
import { Modal } from "../../components/Modal/Modal";

export default function Clienthome() {
  const [show, setshow] = useState(false);
  const [individualdeal, setindividualdeal] = useState("");

  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const closeModal = () => {
    setshow(false);
  };
  const openModal = (deal) => {
    setshow(true);
    let clickedDeal = deals.filter(
      (individualDeal) => individualDeal.id === deal
    );
    setindividualdeal(clickedDeal);
  };

  useEffect(() => {
    useFirestore
      .collection("clients")
      .doc(id)
      .collection("deals")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        let documents = snap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setDeals(documents);
        setIsLoading(false);
      });
  }, []);

  const { id } = useParams();

  return (
    <>
      <div className="custom_container ">
        <nav className="clienthome-nav col-xl-12 col-lg-12 col-11 mx-auto">
          <Link to={"/home"}>
            <svg
              width="43"
              height="43"
              viewBox="0 0 40 40"
              fill="none"
              className="backButton"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="55" />
              <path
                d="M13 20H27"
                stroke="#18354A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 20L17 24"
                stroke="#18354A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 20L17 16"
                stroke="#18354A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h2 className="clientname-nav">{id}</h2>
        </nav>
        <div className="deal-container">
          {isLoading && (
            <div className="vh-100">
              <h2 className="center-content-for-v-100">Loading ...</h2>
            </div>
          )}

          {!isLoading &&
            deals.length !== 0 &&
            deals.map((deal, index) => {
              deal.dealno = `${deals.length - index}`;
              return (
                <Deal deal={deal} index={deal.dealno} openModal={openModal} />
              );
            })}
          {!isLoading && deals.length == 0 && (
            <div className="vh-100">
              <h1 className="center-content-for-v-100">No deal</h1>
            </div>
          )}
          {show ? (
            <Modal show={show} closeModal={closeModal}>
              <Dealmodal
                dealinformation={individualdeal}
                closeModal={closeModal}
              ></Dealmodal>
            </Modal>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
