import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import Toast from "../../components/Toast/Toast";
import { useAuth } from "../../Context/AuthProvider";
import "./Login.css";

export default function Login() {
  const history = useHistory();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handlesubmit(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    setIsLoading(true);
    try {
      await login(email, password);
      history.push("/home");
    } catch {
      setError("Failed to log in");
      setIsLoading(false);
    }
  }

  return (
    <div className="custom_container vh-100 d-flex justify-content-center">
      <div className="row">
        <div className="col-10 cl-xl-4  col-lg-4 col-md-5 col-sm-10 col-xs-10 mx-auto">
          <form className="form" onSubmit={handlesubmit}>
            <h1 className="form_title">Login</h1>
            <div className="form_element">
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                className="w-100"
                required
              />
            </div>
            <div className="form_element">
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-100"
                required
              />
            </div>
            <Button
              type={"submit"}
              text={"Login"}
              buttontype={"primarybtn"}
              isLoading={isLoading}
              className={"mt-3"}
            />
          </form>
          {error && <Toast type="alert-danger" text={error}></Toast>}
        </div>
      </div>
    </div>
  );
}
