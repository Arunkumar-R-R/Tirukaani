import React from 'react';
import './add_new_deal.css'

export default function Add_new_deal(){
    // const nameRef = React.useRef();
    // const emailRef = React.useRef();
    // const messageRef = React.useRef();
  
    // function handleSubmit(event) {
    //   event.preventDefault();
    //   console.log('name:', nameRef.current.value);
    //   console.log('email:', emailRef.current.value);
    //   console.log('message:', messageRef.current.value);
    // }
  
    return (
     <>
       <div className='form_element'>
            <span className='radiolabel'>Silver Form</span>
                <label className='elements'>
                    <input type='radio' value='Bar' name='silverform' /> 
                    <span className='small-text'>Bar</span>
                </label>
                <label className='elements'>
                    <input type='radio' value='Spatla' name='silverform' />
                    <span className='small-text'>Spatla</span>
                </label>
                <label className='elements'>
                    <input type='radio' value='Katcha' name='silverform' />
                    <span className='small-text'>Katcha</span>
                </label>
                <label className='elements'>
                    <input type='radio' value='Katti' name='silverform' />
                    <span className='small-text'>Katti</span>
                </label>
       </div>
        <div className='form_element'>
          <label htmlFor="weight">Weight</label>
          <input
            id="weight"
            type="number"
            
          />
        </div>
        <div className='form_element'>
          <label htmlFor="touch">Touch</label>
          <input
            id="touch"
            type="number"
          />
        </div> 
        <div className='form_element'>
          <label htmlFor="labourTouch">Labour Touch</label>
          <input
            id="labourTouch"
            type="number"
          />
        </div>
         
      </>
    );
};
