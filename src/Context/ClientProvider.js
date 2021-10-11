import React, { createContext, useContext, useEffect, useState } from "react";
import { useFirestore } from "../utils/firebase";

const ClientContext = createContext();

export function ClientProvider({children}){

  const [clients, setClients] = useState([]);
  const [clientsData,setClientsData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

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
  
  let value = {
    clientsAvailable:clients,
    isStillLoading: isLoading,
    clientsDeals:clientsData
  }

  return  ( 
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  );
 
}

export function useClient() {
    return useContext(ClientContext);
  }
  