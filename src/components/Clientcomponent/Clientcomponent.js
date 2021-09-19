import React from 'react';
import './Clientcomponent.css';
import Menu_component from '../Menu_component/Menu_component';

export default function Clientcomponent({data})
{
    return (
        <>
        <div className='client'>
            <div>
                <h4 className='clientname'>{data.id}</h4>
                <span className='numberofdeal'>Number of deal - <span className='dealcount'>0</span></span>
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