import React, { useEffect,useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./FormModal.css";
import Button from "../Button/Button";
import { addDeliveryTouch, adddeliverytouch, estimatedProductWeight, finalTouch, katchaPurity, katchaTouch, katchaweight, purity } from "../../utils/calculation";
import  Add_katcha from "../Add_katcha/Add_katcha";
import Katcha from "../katcha/Katcha";


export default function FormModal ({closeModal}) {

  const [deliverytouchtoggle, setDeliverytouchToggle] = useState(false);
  const [dealtoggle, setDealToggle] = useState(false);
  const [katchatoggle, setRadioToggle] = useState(false);
  const [inputList, setInputList] =  useState([{ weight: "", touch: "" }]);

  // let appBody = document.body
  let obj={};
  // if(props.show)
  // {
  //   appBody.classList.add("hidescroll");
  // }

  // function handleAddClientForm(e){
  //   e.preventDefault();

  //   let nameInput = document.querySelector('#name');
  //   let name = document.querySelector('#name').value;


  //   let nameError = document.querySelector('#nameerror');

  //   const nameErrorMessage = 'please enter the name';

  //   if(name.length == 0 )
  //   {
  //     nameInput.classList.add('invalid');
  //     nameError.style.display = "inline";
  //     nameError.innerHTML = nameErrorMessage;
  //   }
  //   else
  //   {
  //     nameInput.classList.remove('invalid');
  //     nameError.style.display = "none";
  //     obj.name = name;
  //     props.onSubmit(obj)
  //     closemodal();
  //   }    
    
  // }

  function handleAddDealForm(e){
    
    e.preventDefault();

    let name = document.querySelector('#name');
    let silvertypeRadio = document.querySelector('input[name="silverform"]');
    let silvertype = document.querySelector('input[name="silverform"]:checked');
    let weight = document.querySelector('#weight');
    let touch = document.querySelector('#touch');
    let labourTouch = document.querySelector('#labourTouch');
    let thiruvaniDeliveryTouch = document.querySelector('#thiruvaniDeliveryTouch');

    let silverTypeError = document.querySelector('#silverTypeError');
    let weightError = document.querySelector('#weightError');
    let touchError = document.querySelector('#touchError');
    let labourTouchError = document.querySelector('#labourTouchError');
    let thiruvaniDeliveryTouchError = document.querySelector('#thiruvaniDeliveryTouchError');

    const silverTypeErrorMessage = 'Select the silver type';
    const weightErrorMessage = 'Enter the weight';
    const touchErrorMessage = 'Enter the Touch below 100';

    let finaltouch;
    let estimatedproductweight;
    let givenpurity;

    let totalKatchaPurity = katchaPurity(inputList);
    let totalKatchaWeight = katchaweight(inputList);
    let katchatouch = katchaTouch(totalKatchaPurity, totalKatchaWeight);

    if(dealtoggle){
      console.log(weight.value);
    givenpurity = purity(weight.value,touch.value);   
    finaltouch = finalTouch(touch.value, labourTouch.value);
    estimatedproductweight = estimatedProductWeight(givenpurity, finaltouch, weight.value);
    console.log(givenpurity,'purity');
    console.log(finaltouch,'finaltouch');
    console.log(estimatedproductweight,'estimatedproductweight');
    }
    if(deliverytouchtoggle){
      console.log(thiruvaniDeliveryTouch.value,'DeliveryTouch')
      finaltouch = addDeliveryTouch(labourTouch.value,thiruvaniDeliveryTouch.value);
      estimatedproductweight = estimatedProductWeight(givenpurity, finaltouch, weight.value);
      console.log(finaltouch,'addDeliveryTouch')
      console.log(estimatedproductweight,'DeliveryTouch with estimatedProductWeight')
      console.log(inputList);
    }
   
    if( silvertype.value|| weight.value || touch.value || labourTouch.value ){
        silvertypeRadio.classList.remove('invalid');
        silverTypeError.style.display = "none"; 
        if(weight.value>0)
        {
          weight.classList.remove('invalid');
          weightError.style.display = "none"; 
          if( touch.value < 100 && touch.value > 0 ){
              touch.classList.remove("invalid");
              touchError.style.display = "none";
              if( labourTouch.value < 100 && labourTouch.value > 0 )
              {
                  labourTouch.classList.remove("invalid");
                  labourTouchError.style.display = "none";

                  let givenpurity = purity(weight.value,touch.value);

                  if(thiruvaniDeliveryTouch !== null && thiruvaniDeliveryTouch.value)
                  {
                    if( thiruvaniDeliveryTouch.value < 100 && thiruvaniDeliveryTouch.value > 0)
                    {
                      thiruvaniDeliveryTouch.classList.remove("invalid");
                      thiruvaniDeliveryTouchError.style.display = "none";

                      obj.thiruvaniDeliveryTouch = thiruvaniDeliveryTouch.value;
                      finaltouch = addDeliveryTouch(labourTouch.value,thiruvaniDeliveryTouch.value);
                      estimatedproductweight = estimatedProductWeight(givenpurity, finaltouch, weight.value);
                    }
                    else
                    {
                      thiruvaniDeliveryTouch.classList.add('invalid');
                      thiruvaniDeliveryTouchError.style.display = "inline";
                      thiruvaniDeliveryTouchError.innerHTML = touchErrorMessage;
                      return;
                    }
                  }
                  else{
                      obj.thiruvaniDeliveryTouch = 0;
                      finaltouch = finalTouch(touch.value, labourTouch.value);
                      estimatedproductweight = estimatedProductWeight(givenpurity, finaltouch, weight.value);
                  }

                  obj.silvertype = silvertype.value;
                  obj.weight = weight.value;
                  obj.touch = touch.value;
                  obj.labourTouch = labourTouch.value;
                  obj.purity = givenpurity;
                  obj.finalTouch = finaltouch;
                  obj.estimatedProductWeight = estimatedproductweight;
                  // props.onSubmit(obj);
                  console.log(obj);
              
                }
              else 
              {
                  labourTouch.classList.add('invalid');
                  labourTouchError.style.display = "inline";
                  labourTouchError.innerHTML = touchErrorMessage;
              }   
              }   
          else {
            touch.classList.add('invalid');
            touchError.style.display = "inline";
            touchError.innerHTML = touchErrorMessage;
          }  
        }
        else{
          weight.classList.add("invalid");
          weightError.style.display = "inline";
          weightError.innerHTML = weightErrorMessage;
        }
      }
    else {
        silvertypeRadio.classList.add('invalid');
        silverTypeError.style.display = "inline"; 
        silverTypeError.innerHTML = silverTypeErrorMessage;

        weight.classList.add("invalid");
        weightError.style.display = "inline";
        weightError.innerHTML = weightErrorMessage;
        
        touch.classList.add("invalid");
        touchError.style.display = "inline";
        touchError.innerHTML = touchErrorMessage;

        labourTouch.classList.add("invalid");
        labourTouchError.style.display = "inline";
        labourTouchError.innerHTML = touchErrorMessage;
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
      setRadioToggle(false);
    }
  }

  function getkatch(e)
  {
    let silvertype = document.querySelector('input[name="silverform"]:checked').value;
    if(silvertype == 'Katcha')
    {
      setRadioToggle(true);
    }
    else
    {
      setRadioToggle(false);
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

  // function removeclass()
  // {
  //   let iscontain =  appBody.classList.contains("hidescroll");
  //   if(iscontain){
  //     appBody.classList.remove("hidescroll");
  //   }
  // }

  // function closemodal()
  // {
  //   props.onClose();
  //   removeclass();
  //   setDeliverytouchtoggle(false);
  // }

  // const closeOnEscapeKeyDown = e => {
  //   if ((e.charCode || e.keyCode) === 27) {
  //     props.onClose();
  //     removeclass();
  //   }
  // };

  // useEffect(() => {

  //   document.body.addEventListener("keydown", closeOnEscapeKeyDown);
  //   return function cleanup() {
  //     document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  //   };
  // }, []);

  return (
    <>
     <form id='form' onSubmit={handleAddDealForm}>
              <nav className='modal-head'>
              {
                  dealtoggle?
                  <h2>Add New Deal</h2>
                  :
                  <h2>Add New Client</h2>
                }
                  <svg onClick={closeModal} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M20.55 4.5501L13.05 12.0501L20.5 19.5001C20.8 19.8001 20.8 20.2501 20.5 20.5501C20.2 20.8501 19.75 20.8501 19.45 20.5501L12 13.0501L4.54999 20.5501C4.24999 20.8501 3.79999 20.8501 3.49999 20.5501C3.19999 20.2501 3.19999 19.8001 3.49999 19.5001L10.95 12.0001L3.44999 4.5001C3.14999 4.2001 3.19994 3.80009 3.49994 3.50009C3.79994 3.20009 4.19999 3.1501 4.49999 3.4501L12 10.9501L19.5 3.4501C19.8 3.1501 20.25 3.1501 20.55 3.4501C20.85 3.7501 20.85 4.2501 20.55 4.5501Z" fill="#18354A"/>
                  </svg>
              </nav>
              <div className='form_element' id='formfirstchild'>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name='name'
                    type="text"
                    autoFocus
                    required
                />
                <span id="nameerror" className='error'></span>
              </div> 
              <div className='deal-toggle-container'>
                <div className='deal-toggle'  onClick={toggledeal}>
                    <input className='dealcheck' type="checkbox"/>
                    <small>Add deal </small>      
                </div>
                {
                      dealtoggle ?
                      <>
                    <div className='form_element'  onClick={getkatch}>
                      <span className='radiolabel'>Silver Form</span>
                      <label className='elements' >
                          <input type='radio' value='Bar' name='silverform' /> 
                          <span className='small-text' onClick={stopPropagation}>Bar</span>
                      </label>
                      <label className='elements' >
                          <input type='radio' value='Spatla' name='silverform'  />
                          <span className='small-text' onClick={stopPropagation}>Spatla</span>
                      </label>
                      <label className='elements'>
                          <input type='radio' value='Katcha' name='silverform'  />
                          <span className='small-text'  onClick={stopPropagation}>Katcha</span>
                      </label>
                      <label className='elements' >
                          <input type='radio' value='Katti' name='silverform' />
                          <span className='small-text'  onClick={stopPropagation}>Katti</span>
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
                  <Button type={'submit'} buttontype={'primarybtn'} text={"Add Deal"} />
                  :
                  <Button type={'submit'} buttontype={'primarybtn'} text={"Create client"} />
                }
                </div>
            </form>    
    </>
  );
};

