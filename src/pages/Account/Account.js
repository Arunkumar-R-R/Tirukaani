import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Toast from "../../components/Toast/Toast";
import { useAuth } from "../../Context/AuthProvider";
import Button from "../../components/Button/Button";
import "./Account.css";

export default function Account() {
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

  return (
    <div className="custom_container">
      <div className="row">
        <div className="col-11 col-xl-12 col-lg-11 col-md-10 col-sm-10 mx-auto">
          <h2 className="title">Account</h2>
          <div className="mini-container">
            <h3>Logout of the app</h3>
            <Button
              onClick={handleLogout}
              type='secondary'
            >Logout</Button>
            {error && <Toast type="alert-danger" text={error}></Toast>}
          </div>
        </div>
      </div>
    </div>
  );
}
