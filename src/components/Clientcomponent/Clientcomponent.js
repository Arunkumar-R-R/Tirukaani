import React from 'react';
import './Clientcomponent.css';
import {Link} from 'react-router-dom'
import Menu_component from '../Menu_component/Menu_component';

export default function Clientcomponent()
{
    return (
        <>
        <div className='client'>
            <div>
                <h4 className='clientname'>client name</h4>
                <span className='numberofdeal'>Number of deal - 0</span>
            </div>
            <Menu_component></Menu_component>
        </div>
        </>
    );
}

//export default function Clientcomponent({clients})
// {
//     return clients.map((client,index)=>{
//         let subroute = client.name.split(" ").join("");
//         return <Link to={{
//             pathname: 'client/' + subroute,
//             state:{
//                 client:client.name
//             }
//             }} key={index} className='client'>{client.name}</Link>;
//     });
// }