import React from 'react';
import Button from '../../components/Button/Button'
import './Login.css'

export default function Login()
{
    return(
        <div className='login_component'>
            <form className='form'>
                <h3 className='form_title'>Login</h3>
                <label>Password</label>
                <input type='password'  id='password' name='password' required/>
                <Button type={'submit'} text={"Login"} buttontype={'primarybtn'} />
            </form>
        </div>
    );
}