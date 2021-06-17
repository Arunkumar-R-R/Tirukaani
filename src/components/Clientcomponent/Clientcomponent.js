import React from 'react'
import './Clientcomponent.css'

export default function Clientcomponent({clients})
{
    return clients.map((client)=>{
        return <div className='client'>{client.name}</div>
        console.log(client)
    });
}