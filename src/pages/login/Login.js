import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button'
import Toast from '../../components/Toast/Toast';
import { useAuth } from '../../Context/AuthProvider';
import './Login.css'


export default function Login()
{

    const history = useHistory();
    const { login } = useAuth();
    const [error, setError] = useState("")

     async function handlesubmit(e){
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        try {
            setError("")
            await login(email, password);
            history.push("/home");
        } catch {
            setError("Failed to log in");
          }
    } 

    return(
        <div class="container ">
            <div class="row mx-auto height-full">
                <div class="col-12 cl-xl-12  col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
                    <form className='form' onSubmit={handlesubmit}>
                            <h3 className='form_title'>Login</h3>
                            <div className='form_element'>
                                <label >Email</label>
                                <input  type='email'  id='email' name='email' required/>
                            </div> 
                            <div className='form_element' >
                                <label>Password</label>
                                <input type='password'  id='password' name='password' required/>
                            </div>  
                            <Button type={'submit'} text={"Login"} buttontype={'primarybtn'} />
                    </form>
                    {error && <Toast type='alert-danger' text={error}></Toast>}
                </div>
            </div>
        </div>
    );
}