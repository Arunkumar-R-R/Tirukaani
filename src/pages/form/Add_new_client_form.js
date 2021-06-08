import React from 'react';
import Add_new_client from '../../components/client/add_new_client';
import Button from '../../components/button/Button';
import './form.css';

export default function Add_new_client_form()
{
    return(
        <div className='wrapper'>
            <h2>Adding new client</h2>
            <form>
                <Add_new_client/>
                <div className= 'submit_button'>
                    <Button type={'submit'} text={"Create client"} />
                </div>
            </form>
        </div>
    );
}