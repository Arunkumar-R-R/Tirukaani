import React,{useEffect, useState} from 'react';
import './Home.css';


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
                    {/* <div className='gap'></div>  */}
                    <div className='row mx-auto'>
                        <div className='col-xl-12 col-md-12 col-sm-12 col-xs-12 vh-100 '>
                            <h2 className='no-data-available'>🗑️ No Client Available </h2>
                        </div>
                    </div>
          </div>
        </> 
    );
}