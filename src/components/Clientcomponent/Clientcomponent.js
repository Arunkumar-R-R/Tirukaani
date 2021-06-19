import React from 'react';
import './Clientcomponent.css';
import {Link} from 'react-router-dom'

export default function Clientcomponent({clients})
{
    return clients.map((client,index)=>{
        return <Link to={{
            pathname: 'client/' + client.name,
            state:{
                client:client.name
            }
            }} key={index} className='client'>{client.name}</Link>;
    });
}