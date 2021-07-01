import React, { useEffect,useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./FormModal.css";
import Button from "../Button/Button";
import { addDeliveryTouch, adddeliverytouch, estimatedProductWeight, finalTouch, purity } from "../../utils/calculation";


export default function FormModal (props) {

  const [deliverytouchtoggle, setDeliverytouchtoggle] = useState(false);

  let appBody = document.body
  let obj={};
  if(props.show)
  {
    appBody.classList.add("hidescroll");
  }

  function handleAddClientForm(e){
    e.preventDefault();

    let nameInput = document.querySelector('#name');
    let name = document.querySelector('#name').value;


    let nameError = document.querySelector('#nameerror');

    const nameErrorMessage = 'please enter the name';

    if(name.length == 0 )
    {
      nameInput.classList.add('invalid');
      nameError.style.display = "inline";
      nameError.innerHTML = nameErrorMessage;
    }
    else
    {
      nameInput.classList.remove('invalid');
      nameError.style.display = "none";
      obj.name = name;
      props.onSubmit(obj)
      closemodal();
    }    
    
  }

  function handleAddDealForm(e){
    
    e.preventDefault();

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
                  props.onSubmit(obj);
                  closemodal();
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
    setDeliverytouchtoggle(deliverytouchtoggle=>!deliverytouchtoggle);
    let deliverytouchcheck = document.querySelector('.deliverytouchcheck');
    deliverytouchcheck.checked = !deliverytouchtoggle;
  }


  function removeclass()
  {
    let iscontain =  appBody.classList.contains("hidescroll");
    if(iscontain){
      appBody.classList.remove("hidescroll");
    }
  }

  function closemodal()
  {
    props.onClose();
    removeclass();
    setDeliverytouchtoggle(false);
  }

  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
      removeclass();
    }
  };

  useEffect(() => {

    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={closemodal}>
        <div className={` wrapper modal-${props.formposition}`}  onClick={e => e.stopPropagation()}>
           
            <form id='form' onSubmit={props.handleSubmit?handleAddClientForm:handleAddDealForm}>
              <div className='flex modal-header'>
                 { props.isThisAddNewClient? <h2>Adding new client</h2> : <h2>Add new Deal</h2>}
                <div className='modal-close-btn'>
                  <svg  onClick={closemodal}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" className="close-btn" role="button">
                    <path d="M8.951 9.5c-.144 0-.279-.054-.387-.162L.662 1.436C.446 1.22.446.878.662.662c.216-.216.558-.216.774 0l7.902 7.902c.104.102.162.242.162.387 0 .145-.058.285-.162.387-.102.104-.241.163-.387.162zm-7.902 0c-.144 0-.279-.054-.387-.162C.558 9.236.5 9.096.5 8.951c0-.145.058-.285.162-.387L8.564.662c.216-.216.558-.216.774 0 .216.216.216.558 0 .774L1.436 9.338c-.102.104-.241.163-.387.162z">
                    </path>
                  </svg>
                </div>
              </div>
              {
                props.isThisAddNewClient ?
                <div className='form_element'>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name='name'
                    type="text"
                    autoFocus
                    required
                />
                <span id="nameerror" className='error'></span>
              </div> :
              <>
              <div className='form_element'>
                <span className='radiolabel'>Silver Form</span>
                <label className='elements'>
                    <input type='radio' value='Bar' name='silverform' required/> 
                    <span className='small-text'>Bar</span>
                </label>
                <label className='elements'>
                    <input type='radio' value='Spatla' name='silverform' required />
                    <span className='small-text'>Spatla</span>
                </label>
                <label className='elements'>
                    <input type='radio' value='Katcha' name='silverform' required />
                    <span className='small-text'>Katcha</span>
                </label>
                <label className='elements'>
                    <input type='radio' value='Katti' name='silverform' required/>
                    <span className='small-text'>Katti</span>
                </label>
                <span id="silverTypeError"  className='error'></span>
              </div>
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
                    <div className='deliverytouch-toggle' onClick={toggledeliverytouch}>
                      <small>Do you want to add Thiruvani delivery touch</small> 
                      <input className='deliverytouchcheck' type="checkbox" aria-label="Toggle Button" />
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
              }
              <div className= 'submit_button'>
                    <Button type={'submit'} buttontype={'primarybtn'} onClick={props.handleAddClientFormSubmit ? handleAddClientForm : handleAddDealForm} text={"Create client"} />
                </div>
            </form>       
         </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

