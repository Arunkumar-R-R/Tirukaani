import React, { useEffect,useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./FormModal.css";
import Button from "../Button/Button";
import { addDeliveryTouch, adddeliverytouch, estimatedProductWeight, finalTouch, katchaPurity, katchaTouch, katchaweight, purity } from "../../utils/calculation";
import  Add_katcha from "../Add_katcha/Add_katcha";
import Katcha from "../katcha/Katcha";
import { addCollection } from "../../utils/firebase";


export default function FormModal ({closeModal}) {

  const [deliverytouchtoggle, setDeliverytouchToggle] = useState(false);
  const [dealtoggle, setDealToggle] = useState(false);
  const [katchatoggle, setKatchaToggle] = useState(false);
  const [inputList, setInputList] =  useState([{ weight: "", touch: "" }]);

  let obj={};

  function handleAddDealForm(e){
    e.preventDefault();

    let name = document.querySelector('#name');
    let silvertypeRadio = document.querySelector('input[name="silverform"]');
    let silvertype = document.querySelector('input[name="silverform"]:checked');
    let weight = document.querySelector('#weight');
    let touch = document.querySelector('#touch');
    let labourTouch = document.querySelector('#labourTouch');
    let thiruvaniDeliveryTouch = document.querySelector('#thiruvaniDeliveryTouch');

    // let silverTypeError = document.querySelector('#silverTypeError');
    // let weightError = document.querySelector('#weightError');
    // let touchError = document.querySelector('#touchError');
    // let labourTouchError = document.querySelector('#labourTouchError');
    // let thiruvaniDeliveryTouchError = document.querySelector('#thiruvaniDeliveryTouchError');

    // const silverTypeErrorMessage = 'Select the silver type';
    // const weightErrorMessage = 'Enter the weight';
    // const touchErrorMessage = 'Enter the Touch below 100';
    let clientName;
    let finaltouch;
    let estimatedproductweight;
    let givenpurity;
    let totalKatchaPurity;
    let totalKatchaWeight;
    let finalKatchaTouch;
    //deal
    if(dealtoggle){
      // katcha
      if(katchatoggle){ 
        //More than 1 katcha item
        if(inputList.length !=1){
          totalKatchaPurity = katchaPurity(inputList);
          totalKatchaWeight = katchaweight(inputList);
          finalKatchaTouch = katchaTouch(totalKatchaPurity, totalKatchaWeight);
          givenpurity = totalKatchaPurity;
          if(deliverytouchtoggle){
            obj.thiruvaniDeliveryTouch = thiruvaniDeliveryTouch.value;
            finaltouch = addDeliveryTouch(thiruvaniDeliveryTouch.value,labourTouch.value);
            estimatedproductweight = estimatedProductWeight(givenpurity, finaltouch, totalKatchaWeight);
          }else{
            finaltouch = finalTouch(finalKatchaTouch, labourTouch.value);
            console.log(givenpurity,'givenpurity in katcha')
            console.log(finaltouch,'finaltouch in katcha')
            console.log(totalKatchaWeight,'totalKatchaWeight in katcha')
            estimatedproductweight = estimatedProductWeight(givenpurity, finaltouch, totalKatchaWeight);
            console.log(estimatedproductweight,'estimatedproductweight in katcha');
          }
          obj.silvertype = silvertype.value;
          obj.weight = totalKatchaWeight;
          obj.touch = finalKatchaTouch;
          obj.labourTouch = labourTouch.value;
          obj.purity = givenpurity;
          obj.finalTouch = finaltouch;
          obj.estimatedProductWeight = estimatedproductweight;
          console.log(obj,"more than 1 katcha item");
        }else{
          //one katcha item
          alert('input list is 1');
          givenpurity = purity(inputList[0].weight,inputList[0].touch);
          if(deliverytouchtoggle){
            obj.thiruvaniDeliveryTouch = thiruvaniDeliveryTouch.value;
            finaltouch = addDeliveryTouch(thiruvaniDeliveryTouch.value,labourTouch.value);
            estimatedproductweight = estimatedProductWeight(givenpurity, finaltouch, inputList[0].weight);
          }else{
            finaltouch = finalTouch(inputList[0].touch, labourTouch.value);
            estimatedproductweight = estimatedProductWeight(givenpurity, finaltouch, inputList[0].weight);
          }
          obj.silvertype = silvertype.value;
          obj.weight = inputList[0].weight;
          obj.touch = inputList[0].touch;
          obj.labourTouch = labourTouch.value;
          obj.purity = givenpurity;
          obj.finalTouch = finaltouch;
          obj.estimatedProductWeight = estimatedproductweight;
          console.log(obj,"single katcha item");
        }
      }else{
        // bar, spatla , katti
        givenpurity = purity(weight.value,touch.value);   
        if(deliverytouchtoggle){
          obj.thiruvaniDeliveryTouch = thiruvaniDeliveryTouch.value;
          finaltouch = addDeliveryTouch(thiruvaniDeliveryTouch.value,labourTouch.value);
          estimatedproductweight = estimatedProductWeight(givenpurity, finaltouch, weight.value);
        }else{
          finaltouch = finalTouch(touch.value, labourTouch.value);
          estimatedproductweight = estimatedProductWeight(givenpurity, finaltouch, weight.value);
        }
        obj.name = name.value;
        if(silvertype){
          obj.silvertype = silvertype.value;
          obj.weight = weight.value;
          obj.touch = touch.value;
          obj.labourTouch = labourTouch.value;
          obj.purity = givenpurity;
          obj.finalTouch = finaltouch;
          obj.estimatedProductWeight = estimatedproductweight;
          console.log(obj);
        }
        else{
          alert('please select any one of the silver form');
        }
      }
    }else{
      clientName = name.value;
      addCollection(clientName);
      closemodal();
    }
   }

  function toggledeliverytouch()
  {
    setDeliverytouchToggle(deliverytouchtoggle=>!deliverytouchtoggle);
    let deliverytouchcheck = document.querySelector('.deliverytouchcheck');
    deliverytouchcheck.checked = !deliverytouchtoggle;
  }

  function toggledeal()
  {
    setDealToggle(dealtoggle=>!dealtoggle);
    let dealcheck = document.querySelector('.dealcheck');
    dealcheck.checked = !dealtoggle;
    if(deliverytouchtoggle){
      setDeliverytouchToggle(false);
    }
    if(dealtoggle)
    {
      setKatchaToggle(false);
    }
  }

  function getkatch(type)
  {
    if(type === 'Katcha')
    {
      setKatchaToggle(true);
    }
    else
    {
      setKatchaToggle(false);
      setDeliverytouchToggle(false)
      let deliverytouchcheck = document.querySelector('.deliverytouchcheck');
      deliverytouchcheck.checked = deliverytouchtoggle;
      setInputList([{ weight: "", touch: "" }]);
    }
  }

  function stopPropagation(e)
  {
    e.stopPropagation();
  }

  function addWeightInput()
  { 
    setInputList([...inputList,{ weight: "", touch: "" } ]);
  }

  function handleRemove(index){
    let list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  }

  function closemodal()
  {
    closeModal();
  }

  const closeOnEscapeKeyDown = e => {
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
     <form className=' mx-auto' id='form' onSubmit={handleAddDealForm}>
              <nav className='modal-head'>
              {
                  dealtoggle?
                  <h2 className='modal-title'>Add New Deal</h2>
                  :
                  <h2 className='modal-title'>Add New Client</h2>
              }
              <button className='nodefault' tabIndex="0"  aria-pressed="false" onClick={closeModal}>
                <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M20.55 4.5501L13.05 12.0501L20.5 19.5001C20.8 19.8001 20.8 20.2501 20.5 20.5501C20.2 20.8501 19.75 20.8501 19.45 20.5501L12 13.0501L4.54999 20.5501C4.24999 20.8501 3.79999 20.8501 3.49999 20.5501C3.19999 20.2501 3.19999 19.8001 3.49999 19.5001L10.95 12.0001L3.44999 4.5001C3.14999 4.2001 3.19994 3.80009 3.49994 3.50009C3.79994 3.20009 4.19999 3.1501 4.49999 3.4501L12 10.9501L19.5 3.4501C19.8 3.1501 20.25 3.1501 20.55 3.4501C20.85 3.7501 20.85 4.2501 20.55 4.5501Z" fill="#18354A"/>
                  </svg>
              </button>
               
              </nav>
              <div className='form_element' id='formfirstchild'>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name='name'
                    type="text"
                    autoComplete='off'
                    autoFocus
                    required
                />
                <div>

                </div>
              </div> 
              <div className='deal-toggle-container'>
                <div className='deal-toggle'  onClick={toggledeal}>
                    <input className='dealcheck' type="checkbox"/>
                    <small>Add deal </small>      
                </div>
                {
                      dealtoggle ?
                      <>
                        <div className='form_element'>
                          <span className='radiolabel'>Silver Form</span>
                          <label className='elements' onClick={()=>getkatch('Bar')}>
                              <input type='radio' value='Bar' name='silverform' /> 
                              <span className='small-text' >Bar</span>
                          </label>
                          <label className='elements' onClick={()=>getkatch('Spatla')} >
                              <input type='radio' value='Spatla' name='silverform'  />
                              <span className='small-text' >Spatla</span>
                          </label>
                          <label className='elements'  onClick={()=>getkatch('Katcha')}>
                              <input type='radio' value='Katcha' name='silverform'  />
                              <span className='small-text'>Katcha</span>
                          </label>
                          <label className='elements' onClick={()=>getkatch('Katti')}>
                              <input type='radio' value='Katti' name='silverform' />
                              <span className='small-text'>Katti</span>
                          </label>
                          <span id="silverTypeError"  className='error'></span>
                        </div>

                        <div >
                          {
                            katchatoggle ? 
                            <>
                            {
                              console.log(inputList)
                            }
                              <Katcha inputList={inputList} handleRemove={handleRemove} setInputList={setInputList} ></Katcha>
                              <Add_katcha Add_katcha onClick={addWeightInput}></Add_katcha>
                            </>
                            :
                            <>
                            <div className='form_element'>
                              <label htmlFor="weight">Weight</label>
                              <input
                                id="weight"
                                name='weight'
                                type="number"
                                required
                              />
                              <span id="weightError"  className='error'></span>
                            </div>
                            <div className='form_element'>
                              <label htmlFor="touch">Touch</label>
                              <input
                                id="touch"
                                name='touch'
                                type="number"
                                maxLength = "100"
                                required
                              />
                              <span id="touchError"  className='error'></span>
                          </div> 
                            </>
                          }
                        </div>
                    
                        <div className='form_element'>
                            <label htmlFor="labourTouch">Labour Touch</label>
                            <input
                              id="labourTouch"
                              name='labourTouch'
                              type="number"
                              maxLength = "100"
                              required
                            />
                            <span id="labourTouchError"  className='error'></span>
                        </div>
                        <div className='deliverytouch-toggle-container'>
                            <div className='deliverytouch-toggle addthiruvanitoggle'  onClick={toggledeliverytouch} >
                              <input className='deliverytouchcheck' type="checkbox" />
                              <small>Add T delivery touch</small> 
                            </div>
                            {
                              deliverytouchtoggle ?
                              <div className='form_element deliverytouchinput'>
                                    <label htmlFor="thiruvaniDeliveryTouch">Thiruvani delivery touch</label>
                                    <input
                                      id="thiruvaniDeliveryTouch"
                                      name='thiruvaniDeliveryTouch'
                                      type="number"
                                      maxLength = "100"
                                      required
                                    />
                                    <span id="thiruvaniDeliveryTouchError"  className='error'></span>
                              </div> 
                              :''
                            }
                         </div>
                      </> 
                      :''
                }
              </div>

              <div className= 'submit_button'>
                {
                  dealtoggle?
                  <Button type={"submit"} buttontype={'primarybtn'} text={"Add Deal"} />
                  :
                  <Button type={"submit"} buttontype={'primarybtn'} text={"Create client"} />
                }
                </div>
            </form>    
    </>
  );
};

