import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Dealmodal.css";

import Button from "../Button/Button";
import InlineEditableInput from "../../components/EditableInput/InlineEditableInput";
import { finalTouch, purity } from "../../utils/calculation";

export default function Dealmodal(props) {
  const [finalThiruvaniWeight, setfinalThiruvaniWeight] = useState("");
  return (
    <>
      <div className="b-modal modal display-block">
        <div className="bottommodal" onClick={(e) => e.stopPropagation()}>
          <div className="dealmodalnav">
            <h3 className="dealname"> Deal </h3>
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
                d="M20.55 4.5501L13.05 12.0501L20.5 19.5001C20.8 19.8001 20.8 20.2501 20.5 20.5501C20.2 20.8501 19.75 20.8501 19.45 20.5501L12 13.0501L4.54999 20.5501C4.24999 20.8501 3.79999 20.8501 3.49999 20.5501C3.19999 20.2501 3.19999 19.8001 3.49999 19.5001L10.95 12.0001L3.44999 4.5001C3.14999 4.2001 3.19994 3.80009 3.49994 3.50009C3.79994 3.20009 4.19999 3.1501 4.49999 3.4501L12 10.9501L19.5 3.4501C19.8 3.1501 20.25 3.1501 20.55 3.4501C20.85 3.7501 20.85 4.2501 20.55 4.5501Z"
                fill="#18354A"
              />
            </svg>
          </div>
          <div className="deal-specific">
            <div className="deal-info-container">
              <div className=" dealinforow">
                <p className="dealinfo">katcha</p>
                <small className="dealvalue">1500 x 70</small>
              </div>
              <div className=" dealinforow">
                <p className="dealinfo"> purity</p>
                <small className="dealvalue"> P</small>
              </div>
              <div className=" dealinforow">
                <p className="dealinfo"> Labour Touch</p>
                <small className="dealvalue"> T</small>
              </div>
              <div className=" dealinforow">
                <p className="dealinfo"> Total Touch</p>
                <small className="dealvalue"> T</small>
              </div>
              <div className=" dealinforow">
                <p className="dealinfo">Est thiruvani weight</p>
                <small className="dealvalue">---</small>
              </div>
              <div className=" dealinforow">
                <p className="dealinfo">Final thiruvani weight </p>
                <InlineEditableInput
                  text={finalThiruvaniWeight}
                  placeholder="---"
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
                <small className="dealvalue"> P</small>
              </div>
            </div>
          </div>
          <div className="buttongroup">
            <Button
              type={"submit"}
              text={"Close"}
              buttontype={"secondarybtn btn-width-fit-parent"}
            />
            <Button
              type={"submit"}
              text={"Save changes"}
              buttontype={"primarybtn btn-width-fit-parent"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
