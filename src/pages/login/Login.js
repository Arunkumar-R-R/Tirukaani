import React from 'react';
import Button from '../../components/Button/Button'
import './Login.css'


export default function Login({getuserdata})
{
    return(
        <div class="container ">
            <div class="row mx-auto height-full">
                <div class="col-12 cl-xl-12  col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
                    <form className='form' onSubmit={getuserdata}>
                            <h3 className='form_title'>Login</h3>
                            <div className='form_element'>
                                <label >Email</label>
                                <input type='email'  id='email' name='email' required/>
                            </div> 
                            <div className='form_element' >
                                <label>Password</label>
                                <input type='password'  id='password' name='password' required/>
                            </div>  
                            <Button type={'submit'} text={"Login"} buttontype={'primarybtn'} />
                    </form>
                </div>
            </div>
        </div>
    );
}