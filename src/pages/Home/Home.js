import React, { useEffect, useState } from 'react';
import './Home.css';
import { useFirestore } from "../../utils/firebase";
import Clientcomponent from '../../components/Clientcomponent/Clientcomponent';


export default function Home()
{
    const [clients, setClients] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [dealsCount, setDealsCount] = useState(0);


    useEffect(()=>{
        useFirestore.collection('clients').orderBy("timestamp", "desc").onSnapshot((snap) => {
            let  documents = snap.docs.map((doc) => ({
                 id: doc.id,
                 data: doc.data(),
               }));
               setClients(documents);
               setIsLoading(false); 
         }
         );
    },[]);

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    return(
        <>
          <div className='container'>  
          <div className='row'>
                <div className=' col-11 col-xl-4 col-lg-6  col-md-6 col-sm-6'>
                    { 
                        isLoading && <div className= 'vh-100'>
                           <h2 className='center-content-for-v-100'>Loading ...</h2>
                        </div>
                    }

                    {
                        !isLoading && clients.length !==0 &&
                        clients.map(client => {
                            return <Clientcomponent data={client} key={client.id} count={dealsCount}/>
                        })
                    }{
 
                        !isLoading && clients.length ==0 && <div className= 'vh-100'>
                            <h2 className='center-content-for-v-100'>🗑️ No Client Available </h2>
                        </div>
                        
                    } 
                    
                </div>
          </div>
          </div>
        </> 
    );
}