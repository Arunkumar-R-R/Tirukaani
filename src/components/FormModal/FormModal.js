import React, { useEffect, useState } from "react";
import {
  addDeliveryTouch,
  estimatedProductWeight,
  finalTouch,
  ItemsPurity,
  ItemsTouch,
  ItemsWeight,
  purity
} from "../../utils/calculation";
import { addCollection, addSubCollection } from "../../utils/firebase";
import Button from "../Button/Button";
import DynamicSelect from "../DynamicSelect/DynamicSelect";
import Item from "../Item/Item";
import "./FormModal.css";

export default function FormModal({ closeModal }) {
  const [deliverytouchtoggle, setDeliverytouchToggle] = useState(false);
  const [dealtoggle, setDealToggle] = useState(false);
  const [inputList, setInputList] = useState([
    { weight: "", touch: "", silverType: "" },
  ]);
  const [selectedClient, setSelectedClient] = useState("");

  let obj = {};

  function handleAddDealForm(e) {
    e.preventDefault();

    let name = document.querySelector("#name");
    let labourTouch = document.querySelector("#labourTouch");
    let thiruvaniDeliveryTouch = document.querySelector(
      "#thiruvaniDeliveryTouch"
    );
    let clientName;
    let finaltouch;
    let estimatedproductweight;
    let givenpurity;
    let totalItemsPurity;
    let totalItemsWeight;
    let finalItemsTouch;
    //deal
    if (dealtoggle) {
      //More than 1  item
      if (inputList.length != 1) {
        totalItemsPurity = ItemsPurity(inputList);
        totalItemsWeight = ItemsWeight(inputList);
        finalItemsTouch = ItemsTouch(totalItemsPurity, totalItemsWeight);
        givenpurity = totalItemsPurity;
        if (deliverytouchtoggle) {
          obj.thiruvaniDeliveryTouch = thiruvaniDeliveryTouch.value;
          finaltouch = addDeliveryTouch(
            thiruvaniDeliveryTouch.value,
            labourTouch.value
          );
          estimatedproductweight = estimatedProductWeight(
            givenpurity,
            finaltouch,
            totalItemsWeight
          );
        } else {
          finaltouch = finalTouch(finalItemsTouch, labourTouch.value);
          estimatedproductweight = estimatedProductWeight(
            givenpurity,
            finaltouch,
            totalItemsWeight
          );
        }
        obj.name = name.value;
        obj.weight = totalItemsWeight;
        obj.touch = finalItemsTouch;
        obj.labourTouch = labourTouch.value;
        obj.purity = givenpurity;
        obj.finalTouch = finaltouch;
        obj.estimatedProductWeight = estimatedproductweight;
        addSubCollection(obj);
      } else {
        givenpurity = purity(inputList[0].weight, inputList[0].touch);
        if (deliverytouchtoggle) {
          obj.thiruvaniDeliveryTouch = thiruvaniDeliveryTouch.value;
          finaltouch = addDeliveryTouch(
            thiruvaniDeliveryTouch.value,
            labourTouch.value
          );
          estimatedproductweight = estimatedProductWeight(
            givenpurity,
            finaltouch,
            inputList[0].weight
          );
        } else {
          finaltouch = finalTouch(inputList[0].touch, labourTouch.value);
          estimatedproductweight = estimatedProductWeight(
            givenpurity,
            finaltouch,
            inputList[0].weight
          );
        }
        obj.name = name.value;
        obj.weight = inputList[0].weight;
        obj.touch = inputList[0].touch;
        obj.labourTouch = labourTouch.value;
        obj.purity = givenpurity;
        obj.finalTouch = finaltouch;
        obj.estimatedProductWeight = estimatedproductweight;
        obj.finalProductWeight = "---";
        obj.color = "#333";
        obj.balance = "---";
        addSubCollection(obj);
      }
      closemodal();
    } else {
      clientName = name.value;
      addCollection(clientName);
      closemodal();
    }
  }

  function toggledeliverytouch() {
    setDeliverytouchToggle((deliverytouchtoggle) => !deliverytouchtoggle);
    let deliverytouchcheck = document.querySelector(".deliverytouchcheck");
    deliverytouchcheck.checked = !deliverytouchtoggle;
  }

  function toggledeal() {
    setDealToggle((dealtoggle) => !dealtoggle);
    let dealcheck = document.querySelector(".dealcheck");
    dealcheck.checked = !dealtoggle;
    if (deliverytouchtoggle) {
      setDeliverytouchToggle(false);
    }
  }

  function addItem() {
    setInputList([...inputList, { weight: "", touch: "", silverType: "" }]);
  }

  function handleRemove(index) {
    let list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  }

  function closemodal() {
    closeModal();
  }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <>
      <form id="form" onSubmit={handleAddDealForm}>
        <nav className="modal-head">
          {dealtoggle ? (
            <h2 className="modal-title">Add New Deal</h2>
          ) : (
            <h2 className="modal-title">Add New Client</h2>
          )}
          <Button type="secondary" borderRadius="rounded" onClick={closeModal}>
            <svg
              width="16"
              height="16"
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
          </Button>
        </nav>
        <div className="form_element" id="formfirstchild">
          {dealtoggle ? (
            <DynamicSelect
              setSelectedClient={setSelectedClient}
            ></DynamicSelect>
          ) : (
            <>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                autoFocus
                required
              />
            </>
          )}
        </div>
        <div className="deal-toggle-container">
          <div className="deal-toggle" onClick={toggledeal}>
            <input className="dealcheck" type="checkbox" />
            <small>Add deal </small>
          </div>
          {dealtoggle ? (
            <>
              <Item
                inputList={inputList}
                handleRemove={handleRemove}
                setInputList={setInputList}
              ></Item>
              <Button type="secondary" onClick={addItem}>
                {" "}
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 11.25V5C12.75 4.80109 12.671 4.61032 12.5303 4.46967C12.3897 4.32902 12.1989 4.25 12 4.25C11.8011 4.25 11.6103 4.32902 11.4697 4.46967C11.329 4.61032 11.25 4.80109 11.25 5V11.25H5C4.80109 11.25 4.61032 11.329 4.46967 11.4697C4.32902 11.6103 4.25 11.8011 4.25 12C4.25 12.1989 4.32902 12.3897 4.46967 12.5303C4.61032 12.671 4.80109 12.75 5 12.75H11.25V19C11.25 19.1989 11.329 19.3897 11.4697 19.5303C11.6103 19.671 11.8011 19.75 12 19.75C12.1989 19.75 12.3897 19.671 12.5303 19.5303C12.671 19.3897 12.75 19.1989 12.75 19V12.75H19C19.1989 12.75 19.3897 12.671 19.5303 12.5303C19.671 12.3897 19.75 12.1989 19.75 12C19.75 11.8011 19.671 11.6103 19.5303 11.4697C19.3897 11.329 19.1989 11.25 19 11.25H12.75Z"
                    fill="#333333"
                  />
                </svg>
                Add Item
              </Button>
              {/* <AddItem onClick={addItem}></AddItem> */}

              <div className="form_element">
                <label htmlFor="labourTouch">Labour Touch</label>
                <input
                  id="labourTouch"
                  name="labourTouch"
                  type="number"
                  maxLength="100"
                  required
                />
                <span id="labourTouchError" className="error"></span>
              </div>
              <div className="deliverytouch-toggle-container">
                <div
                  className="deliverytouch-toggle addthiruvanitoggle"
                  onClick={toggledeliverytouch}
                >
                  <input className="deliverytouchcheck" type="checkbox" />
                  <small>Add T delivery touch</small>
                </div>
                {deliverytouchtoggle ? (
                  <div className="form_element deliverytouchinput">
                    <label htmlFor="thiruvaniDeliveryTouch">
                      Thiruvani delivery touch
                    </label>
                    <input
                      id="thiruvaniDeliveryTouch"
                      name="thiruvaniDeliveryTouch"
                      type="number"
                      maxLength="100"
                      required
                    />
                    <span
                      id="thiruvaniDeliveryTouchError"
                      className="error"
                    ></span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="submit_button">
          {dealtoggle ? (
            <Button type="primary">Add Deal</Button>
          ) : (
            <Button type="primary">Create Client</Button>
          )}
        </div>
      </form>
    </>
  );
}
