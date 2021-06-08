import React from 'react';

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
      <form>
       <div>
            <label>Silver Form</label>
            <input type='radio' value='Bar' name='silverform' />Bar
            <input type='radio' value='Spatla' name='silverform' />Spatla
            <input type='radio' value='Katcha' name='silverform' />Katcha
            <input type='radio' value='Katti' name='silverform' />Katti
       </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <input
            id="weight"
            type="number"
            
          />
        </div>
        <div>
          <label htmlFor="touch">Touch</label>
          <input
            id="touch"
            type="number"
          />
        </div> <div>
          <label htmlFor="labourTouch">Labour Touch</label>
          <input
            id="labourTouch"
            type="number"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
};
