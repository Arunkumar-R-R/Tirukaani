import React from 'react';
import './Clientcomponent.css';
import {Link} from 'react-router-dom'

export default function Clientcomponent({clients})
{
    return clients.map((client,index)=>{
        let subroute = client.name.split(" ").join("");
        return <Link to={{
            pathname: 'client/' + subroute,
            state:{
                client:client.name
            }
            }} key={index} className='client'>{client.name}</Link>;
    });
}