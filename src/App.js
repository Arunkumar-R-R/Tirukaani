import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { ClientProvider } from "./Context/ClientProvider";
import Account from "./pages/Account/Account";
import Clienthome from "./pages/Clienthome/Clienthome";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import { useAuth } from "./Context/AuthProvider";

function App() {
  const { currentUser } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/" &&
      (currentUser === null || currentUser === false)
    ) {
      return <Redirect to="/"></Redirect>;
    }
  });

  return (
    <div className="App vh-100 overflow-hidden">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          {currentUser === null || currentUser === false ? (
            <>
              <Redirect to="/"></Redirect>
            </>
          ) : (
            <ClientProvider>
              <nav className="navigation">
                <Navigation></Navigation>
              </nav>
              <div className="main-container overflow-auto">
                {location.pathname === "/" && <Redirect to="/home"></Redirect>}
                <Route path="/account">
                  <Account></Account>
                </Route>
                <Route path="/home/:id">
                  <Clienthome></Clienthome>
                </Route>
                <Route exact path="/home">
                  <Home></Home>
                </Route>
              </div>
            </ClientProvider>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
