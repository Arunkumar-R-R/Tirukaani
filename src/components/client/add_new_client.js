import React from 'react';
import Add_new_deal from './client_home/add_new_deal';

export default function Add_new_client()
{
    return(
      <>
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
        <Add_new_deal/>
      </>
    );
}