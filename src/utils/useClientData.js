import React, { createContext, useContext, useEffect, useState } from "react";
import { useFirestore } from "../utils/firebase";

function useClientData(id) {
    let documents;
    const [deals, setDeals] = useState([]);

    useEffect(()=>{
        useFirestore.collection('clients').doc(id).collection('deals').orderBy("timestamp", "desc").onSnapshot((snap) => {
              documents = snap.docs.map((doc) => ({
                id:doc.id,
                data:doc.data()
            }
            ));
                setDeals(documents);
                // setIsLoading(false); 
         }
         );
    },[]);
      
    return deals;
}

export default useClientData;