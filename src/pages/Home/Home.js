import React,{useEffect, useState} from 'react';
import Button from '../../components/Button/Button';
import './Home.css';
import FormModal from '../../components/FormModal/FormModal';
import Clientcomponent from '../../components/Clientcomponent/Clientcomponent';
import Bottom_navigation from '../../components/Bottom_navigation/Bottom_navigation';
import Add_button from '../../components/Add_button/Add_button';
import No_client from '../../components/No_client/No_client';
import Account from '../Account/Account';
import Menu_modal from '../../components/Modal/Menu_modal';
import Edit_modal from '../../components/Modal/Edit_modal';
import Delete_modal from '../../components/Modal/Delete_modal';
import Clienthome from '../Clienthome/Clienthome';

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
                        {/* <h2 className='title'>Clients</h2>
                        <No_client></No_client>
                        <Clientcomponent></Clientcomponent> */}
                                  <Clienthome></Clienthome>

                    </div>
                    {/* <Account></Account> */}
                    <div className='gap'></div>
          </div>
          <nav className='bottom_nav'>
              <Add_button></Add_button>
              <Bottom_navigation></Bottom_navigation>
          </nav> 
          {/* <Menu_modal></Menu_modal> */}
          {/* <Delete_modal></Delete_modal> */}
        </>
       
    );
}