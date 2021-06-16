import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./FormModal.css";
import Button from "../Button/Button";

export default function FormModal (props) {

  let appBody = document.body
  // let appBody = document.querySelector("#root");

  if(props.show)
  {
    appBody.classList.add("hidescroll");
  }
  function validate()
  {
    console.log('called')
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
        <div className="modal-content " onClick={e => e.stopPropagation()}>
            <div className='modal-close-btn'>
                <svg  onClick={closemodal}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" className="close-btn" data-cy="dropdown-close-button" data-name="exit" fill="currentColor" role="button"><path d="M8.951 9.5c-.144 0-.279-.054-.387-.162L.662 1.436C.446 1.22.446.878.662.662c.216-.216.558-.216.774 0l7.902 7.902c.104.102.162.242.162.387 0 .145-.058.285-.162.387-.102.104-.241.163-.387.162zm-7.902 0c-.144 0-.279-.054-.387-.162C.558 9.236.5 9.096.5 8.951c0-.145.058-.285.162-.387L8.564.662c.216-.216.558-.216.774 0 .216.216.216.558 0 .774L1.436 9.338c-.102.104-.241.163-.387.162z"></path></svg>
            </div>
            <h2>Adding new client</h2>
            <form>
            <div className='form_element'>
              <label htmlFor="name">Name</label>
              <input
                  id="name"
                  name='name'
                  type="text"
                  required
              />
              </div>
              <h2 >First Deal</h2> 
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
       </div>
        <div className='form_element'>
          <label htmlFor="weight">Weight</label>
          <input
            id="weight"
            name='weight'
            type="number"
            required
          />
        </div>
        <div className='form_element'>
          <label htmlFor="touch">Touch</label>
          <input
            id="touch"
            name='touch'
            type="number"
            required
          />
        </div> 
        <div className='form_element'>
          <label htmlFor="labourTouch">Labour Touch</label>
          <input
            id="labourTouch"
            name='labourTouch'
            type="number"
            required
          />
        </div>    
              <div className= 'submit_button'>
                    <Button type={'submit'} onClick={validate} text={"Create client"} />
                </div>
            </form>       
         </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

