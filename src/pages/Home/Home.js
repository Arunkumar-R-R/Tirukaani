import React, { useEffect, useState } from 'react';
import './Home.css';
import { useFirestore } from "../../utils/firebase";
import Clientcomponent from '../../components/Clientcomponent/Clientcomponent';


export default function Home()
{
    // const [show, setShow] = useState(false);
    const [clients, setClients] = useState();
    // let newclient=[];

    let documents ;
    useEffect(()=>{
        useFirestore.collection('clients').orderBy("timestamp", "desc").onSnapshot((snap) => {
             documents = snap.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }));
              setClients(documents)
        });
    },[]);

    return(
        <>
          <div className='container'>  
                    {/* <div className='gap'></div>  */}
                    <div className='row mx-auto'>
                        <div className='col-xl-12 col-md-12 col-sm-12 col-xs-12 vh-100 '>
                            {
                                clients ?
                                clients.map(client => {
                                    console.log(client)
                                    return <Clientcomponent data={client} />
                                })
                                 :
                                <h2 className='no-data-available'>🗑️ No Client Available </h2>
                            }
                        </div>
                    </div>
          </div>
        </> 
    );
}