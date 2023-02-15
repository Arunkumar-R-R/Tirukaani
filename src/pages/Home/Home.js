import React, { useEffect, useState } from "react";
import "./Home.css";
import { useFirestore } from "../../utils/firebase";
import Clientcomponent from "../../components/Clientcomponent/Clientcomponent";
import { useClient } from "../../Context/ClientProvider";

export default function Home() {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dealsCount, setDealsCount] = useState(0);

  let { clientsAvailable, isStillLoading } = useClient();

  useEffect(() => {
    setClients(clientsAvailable);
    setIsLoading(isStillLoading);
  });

  return (
    <>
      <div className="custom_container">
        <div className="row">
          <div className="col-12 col-xl-12 col-lg-12 col-md-6 col-sm-6 mx-auto d-flex flex-column justify-content-center align-items-center">
            {!isLoading && clients.length !== 0 ? (
              clientsAvailable.map((client) => {
                return (
                  <Clientcomponent
                    data={client}
                    key={client.id}
                    count={dealsCount}
                  />
                );
              })
            ) : (
              <div className="no_deal_container">
                <h2 className="center-content-for-v-100">Loading ...</h2>
              </div>
            )}
            {!isLoading && clients.length == 0 && (
              <div className="no_deal_container">
                <h2 className="center-content-for-v-100">
                  🗑️ No Client Available{" "}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
