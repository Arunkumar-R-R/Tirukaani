import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Toast from "../../components/Toast/Toast";
import { useAuth } from "../../Context/AuthProvider";
import Button from "./../../components/Button/Button";
import "./Account.css";

export default function Account() {
  const [spells, setSpells] = React.useState([]);
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to logout");
    }
  }

  // useEffect(()=>{
  //     const fetchData = async () => {
  //         const data = await useFirestore.collection('users').get();
  //         console.log(data)
  //         setSpells(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  //       };
  //       fetchData();
  // },[]);

  // useEffect(()=>{
  //     console.log(spells)
  //     let b = spells.map(doc =>{
  //         console.log(doc)
  //         useFirestore.collection('users').doc(doc.id).delete()
  //         return doc.id
  //     });
  //     // useFirestore.collection('users').doc(b).delete()
  //     console.log(b)
  // })

  return (
    <div className="container">
      <div className="row">
        <div className="col-11 col-xl-12 col-lg-11 col-md-10 col-sm-10 mx-auto">
          <h2 className="title">Account</h2>
          <div className="mini-container">
            <h3>Export</h3>
            <span className="export-description">
              Export whole data into csv file
            </span>
            <Button
              className=""
              type={"submit"}
              text={"Export data"}
              buttontype={"primarybtn"}
            ></Button>
          </div>
          <div className="mini-container">
            <h3>Logout of the app</h3>
            <Button
              className=""
              onClick={handleLogout}
              type={"submit"}
              text={"Log out"}
              buttontype={"secondarybtn"}
            ></Button>
            {error && <Toast type="alert-danger" text={error}></Toast>}
          </div>
        </div>
      </div>
    </div>
  );
}
