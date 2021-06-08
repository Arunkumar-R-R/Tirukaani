import React from 'react';
import './form.css';
import Button from './../../components/button/Button';
import Add_new_deal from '../../components/client/client_home/add_new_deal';

export default function Deal_page()
{
    return(
        <div className='wrapper'>
            <h1>Adding new deal</h1>
            <form>
            <Add_new_deal/>
            <div className= 'submit_button'>
                 <Button type={'submit'} text={"Add"} />
            </div>
            </form>
        </div>
    );
}