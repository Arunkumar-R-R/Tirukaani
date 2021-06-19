import React from 'react';
import ReactDOM from 'react-dom';
import './Clientcomponent.css';
import Clienthome from '../../pages/Clienthome/Clienthome';
import {Link} from 'react-router-dom'

export default function Clientcomponent({clients})
{
    function opendealpage(e)
    {
        let clientname = e.target.textContent;
        ReactDOM.render(
            <Clienthome clientname={clientname}/>,
            document.getElementById('root')
          );
        
    }
    return clients.map((client,index)=>{
        return <Link to={'client/' + client.name} key={index} className='client'onClick={opendealpage}>{client.name}</Link>;
    });
}