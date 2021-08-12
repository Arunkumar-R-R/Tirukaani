import React,{useEffect, useState} from 'react';
import Button from '../../components/Button/Button';
import './Home.css';
import FormModal from '../../components/FormModal/FormModal';
import Clientcomponent from '../../components/Clientcomponent/Clientcomponent';
import Bottom_navigation from '../../components/Bottom_navigation/Bottom_navigation';
import Add_button from '../../components/Add_button/Add_button';
import No_client from '../../components/No_client/No_client';
import Account from '../Account/Account';

export default function Home()
{
    // const [show, setShow] = useState(false);
    // const [clients, setClients] = useState([]);
    // let newclient=[];

    // const addclient = client => {
        
    //     newclient.push(client);
    //     setClients(newclient);

    // };

    // useEffect(()=>{
    //     if(clients.length>0)
    //     {
    //         newclient = [...clients];
    //     }
    // },[newclient]);
    

    return(
        <>
          <div className='container'>
                    <div className='clients-container'>
                        <h2 className='title'>Clients</h2>
                        {/* <No_client></No_client> */}
                        <Clientcomponent></Clientcomponent>
                    </div>
                    {/* <Account></Account> */}
                    <div className='gap'></div>
          </div>
          <nav className='bottom_nav'>
              <Add_button></Add_button>
              <Bottom_navigation></Bottom_navigation>
          </nav> 
        </>
       
    );
}