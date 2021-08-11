import React,{useEffect, useState} from 'react';
import Button from '../../components/Button/Button';
import './Home.css';
import FormModal from '../../components/FormModal/FormModal';
import Clientcomponent from '../../components/Clientcomponent/Clientcomponent';
import Bottom_navigation from '../../components/Bottom_navigation/Bottom_navigation';
import Add_button from '../../components/Add_button/Add_button';

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
                        <h1 className= 'client_home_title'>Clients</h1>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                        <h2 className='no-data-available'>No Client Available</h2>
                    </div>
                    <div className='gap'></div>
          </div>
          <nav className='bottom_nav'>
              <Add_button></Add_button>
              <Bottom_navigation></Bottom_navigation>
          </nav> 
        </>
       
    );
}