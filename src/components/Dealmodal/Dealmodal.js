import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Dealmodal.css";

import Button from "../Button/Button";
import InlineEditableInput from "../../components/EditableInput/InlineEditableInput";
import { calculateBalance, finalTouch, purity } from "../../utils/calculation";
import { UpdateDoc } from "../../utils/firebase";

export default function Dealmodal({ dealinformation, closeModal }) {
  const [finalThiruvaniWeight, setfinalThiruvaniWeight] = useState(
    dealinformation[0].data.finalProductWeight
  );
  const [balance, setBalance] = useState({
    color: dealinformation[0].data.color,
    gram: dealinformation[0].data.balance,
  });

  let weight = dealinformation[0].data.weight;
  let touch = dealinformation[0].data.touch;
  let purity = dealinformation[0].data.purity;
  let labourTouch = dealinformation[0].data.labourTouch;
  let totalTouch = dealinformation[0].data.finalTouch;
  let estimatedThiruvaniWeight = dealinformation[0].data.estimatedProductWeight;

  useEffect(() => {
    const balance = calculateBalance(
      finalThiruvaniWeight,
      estimatedThiruvaniWeight
    );
    setBalance(balance);
  }, [finalThiruvaniWeight]);

  const addBalance = () => {
    if (balance.gram) {
      dealinformation[0].data.balance = balance.gram;
      dealinformation[0].data.color = balance.color;
      dealinformation[0].data.finalProductWeight = finalThiruvaniWeight;
      UpdateDoc(dealinformation[0]);
    }
    closeModal();
  };
  return (
    <div className="deal-info-modal">
      <div className="dealmodalnav">
        <h3 className="dealname"> Deal {dealinformation[0].dealno}</h3>
        <svg
          onClick={() => {
            closeModal();
          }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.55 4.5501L13.05 12.0501L20.5 19.5001C20.8 19.8001 20.8 20.2501 20.5 20.5501C20.2 20.8501 19.75 20.8501 19.45 20.5501L12 13.0501L4.54999 20.5501C4.24999 20.8501 3.79999 20.8501 3.49999 20.5501C3.19999 20.2501 3.19999 19.8001 3.49999 19.5001L10.95 12.0001L3.44999 4.5001C3.14999 4.2001 3.19994 3.80009 3.49994 3.50009C3.79994 3.20009 4.19999 3.1501 4.49999 3.4501L12 10.9501L19.5 3.4501C19.8 3.1501 20.25 3.1501 20.55 3.4501C20.85 3.7501 20.85 4.2501 20.55 4.5501Z"
            fill="#18354A"
          />
        </svg>
      </div>
      <div className="deal-specific">
        <div className="deal-info-container">
          <div className=" dealinforow">
            <p className="dealinfo">Item</p>
            <small className="dealvalue">
              {weight} x {touch}
            </small>
          </div>
          <div className=" dealinforow">
            <p className="dealinfo"> purity</p>
            <small className="dealvalue">{purity} P</small>
          </div>
          <div className=" dealinforow">
            <p className="dealinfo"> Labour Touch</p>
            <small className="dealvalue"> {labourTouch}</small>
          </div>
          <div className=" dealinforow">
            <p className="dealinfo"> Total Touch</p>
            <small className="dealvalue"> {totalTouch}</small>
          </div>
          <div className=" dealinforow">
            <p className="dealinfo">Est thiruvani weight</p>
            <small className="dealvalue">{estimatedThiruvaniWeight}</small>
          </div>
          <div className=" dealinforow">
            <p className="dealinfo">Final thiruvani weight </p>
            <InlineEditableInput
              text={finalThiruvaniWeight}
              placeholder={finalThiruvaniWeight}
              type="input"
            >
              <input
                className="inlineinput"
                type="number"
                name="task"
                placeholder=""
                tabIndex="0"
                onChange={(e) => setfinalThiruvaniWeight(e.target.value)}
                autoFocus
              />
            </InlineEditableInput>
          </div>
          <div className=" dealinforow">
            <p className="dealinfo">Balance </p>
            <small className="dealvalue" style={{ color: balance.color }}>
              {balance.color == "green" && "+"}
              {balance.color == "red" && "-"}
              {balance.gram}
            </small>
          </div>
        </div>
      </div>
      <div className="buttongroup">
        <Button
          type="secondary"
          onClick={() => {
            closeModal();
          }}
        >
          Close
        </Button>
        <Button type="primary" onClick={() => addBalance()}>
          Save changes
        </Button>
      </div>
    </div>
  );
}
