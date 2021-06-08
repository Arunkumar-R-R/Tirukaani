import React from 'react';
import './Deal_page.css'
import Add_new_deal from '../../components/client/client_home/add_new_deal';

export default function Deal_page()
{
    return(
        <div className='wrapper'>
        <h1>Adding new deal</h1>
        <Add_new_deal/>
        </div>
    );
}