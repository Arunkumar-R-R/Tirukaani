import React from 'react'
import './Clientcomponent.css'

export default function Clientcomponent({clients})
{
    function opendealpage(e)
    {
        console.log(e.target.textContent);
    }
    return clients.map((client)=>{
        return <div className='client'onClick={opendealpage}>{client.name}</div>
        console.log(client)
    });
}