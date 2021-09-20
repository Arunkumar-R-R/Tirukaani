import React, { useEffect, useState } from 'react';
import './Home.css';
import { useFirestore } from "../../utils/firebase";
import Clientcomponent from '../../components/Clientcomponent/Clientcomponent';


export default function Home()
{
    const [clients, setClients] = useState([]);

    useEffect(()=>{
        useFirestore.collection('clients').orderBy("timestamp", "desc").onSnapshot((snap) => {
            let  documents = snap.docs.map((doc) => ({
                 id: doc.id,
                 data: doc.data(),
               }));
               setClients(documents); 
         }
         );
    },[]);

    return(
        <>
          <div className='container'>  
          <div className='row '>
                <div className='col col-11 col-sm-6 col-md-5  mx-auto'>
                    {
                        clients.length !=0 ?
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