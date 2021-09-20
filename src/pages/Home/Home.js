import React, { useEffect, useState } from 'react';
import './Home.css';
import { useFirestore } from "../../utils/firebase";
import Clientcomponent from '../../components/Clientcomponent/Clientcomponent';


export default function Home()
{
    const [clients, setClients] = useState([]);

    useEffect(()=>{
        if(available){
            
        }else{
            useFirestore.collection('clients').orderBy("timestamp", "desc").onSnapshot((snap) => {
                let  documents = snap.docs.map((doc) => ({
                     id: doc.id,
                     data: doc.data(),
                   }));
                   setClients(documents); 
                   console.log(documents);
             }
             );
        }
    },[]);

    return(
        <>
          <div className='container'>  
                    <div className='row mx-auto'>
                        <div className='col-xl-12 col-md-12 col-sm-12 col-xs-12'>
                                {
                                    clients ?
                                    clients.map(client => {
                                        return <Clientcomponent data={client} />
                                    })
                                    :
                                    <div className= 'vh-100'>
                                        <h2 className='no-data-available'>🗑️ No Client Available </h2>
                                    </div>
                                    
                                }
                        </div>
                    </div>
          </div>
        </> 
    );
}